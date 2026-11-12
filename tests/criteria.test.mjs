import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { FACTORS, QUESTIONS, SOURCES, evaluateAnswers } from '../dist/content.js';

test('A case with missing or unrecognized answers never becomes favorable', () => {
  const empty = evaluateAnswers({});
  assert.equal(empty.length, 22);
  assert.ok(empty.every(r => r.status === 'unknown' && r.answer === null));
  const unrecognized = Object.fromEntries(QUESTIONS.map(q => [q.id, 'not-a-valid-answer']));
  assert.ok(evaluateAnswers(unrecognized).every(r => r.status === 'unknown'));
});

test('No sé is information insufficient in every group, even alongside favorable answers', () => {
  const answers = Object.fromEntries(QUESTIONS.map(q => [q.id, 'unknown']));
  const allUnknown = evaluateAnswers(answers);
  assert.ok(allUnknown.every(r => r.status === 'unknown' && r.answer?.label === 'No sé'));
  const shade = QUESTIONS.find(q => q.id === 'sombra');
  answers.sombra = shade.options.find(o => o.status === 'adequate').value;
  const mixed = evaluateAnswers(answers);
  assert.equal(mixed.find(r => r.question.id === 'sombra').status, 'adequate');
  assert.ok(mixed.filter(r => r.question.id !== 'sombra').every(r => r.status === 'unknown'));
});

test('An individual priority never changes other conditions or produces a global result', () => {
  const answers = { sombra: 'always', agua: 'unavailable' };
  const before = JSON.stringify(answers);
  const results = evaluateAnswers(answers);
  assert.equal(results.find(r => r.question.id === 'agua').status, 'priority');
  assert.equal(results.find(r => r.question.id === 'sombra').status, 'adequate');
  assert.ok(results.filter(r => !['sombra', 'agua'].includes(r.question.id)).every(r => r.status === 'unknown'));
  assert.equal(JSON.stringify(answers), before);
  assert.ok(Array.isArray(results));
  assert.ok(results.every(r => Object.keys(r).sort().join(',') === 'answer,question,status'));
});

test('Mating context and periods without mating remain contextual', () => {
  const results = evaluateAnswers({ 'modalidad-monta': 'continua', monta: 'inactive', 'vacas-asignadas': '25-30' });
  for (const id of ['modalidad-monta','monta','vacas-asignadas']) assert.equal(results.find(r => r.question.id === id).status, 'context');
  assert.ok(!QUESTIONS.some(q => q.id === 'raza'));
});

test('Age, mating modality and reproductive period are descriptive context, never fertility classifications', () => {
  for (const id of ['edad','modalidad-monta','periodo']) {
    const q = QUESTIONS.find(q => q.id === id);
    assert.ok(q, `Missing contextual question ${id}`);
    for (const option of q.options) {
      const result = evaluateAnswers({[id]:option.value}).find(r => r.question.id === id);
      assert.equal(result.status, option.value === 'unknown' ? 'unknown' : 'context');
    }
    assert.equal(evaluateAnswers({}).find(r=>r.question.id === id).status,'unknown');
  }
});

test('Older cases retain other results while changed questions await fresh answers', () => {
  const changedIds = ['edad','periodo','perdida-peso','modalidad-monta'];
  const oldAnswers = Object.fromEntries(QUESTIONS.filter(q=>!changedIds.includes(q.id)).map(q=>[q.id,q.options[0].value]));
  oldAnswers.condicion = 'loss';
  oldAnswers.evaluacion = 'yes';
  const oldResults = evaluateAnswers(oldAnswers);
  for (const result of oldResults) assert.equal(result.status, changedIds.includes(result.question.id) ? 'unknown' : result.question.options[0].status);
  for (const period of QUESTIONS.find(q=>q.id === 'periodo').options) {
    const changed = evaluateAnswers({...oldAnswers,edad:'under2',periodo:period.value});
    for (const oldResult of oldResults.filter(r=>!changedIds.includes(r.question.id))) {
      assert.equal(changed.find(r=>r.question.id === oldResult.question.id).status,oldResult.status);
    }
  }
});

test('The weight and mating questions retain their wording and answers', () => {
  const weight = QUESTIONS.find(q => q.id === 'perdida-peso');
  assert.equal(weight.id, 'perdida-peso');
  assert.equal(weight.title, 'En los últimos dos meses, ¿ha observado pérdida marcada de peso o de condición corporal?');
  assert.deepEqual(weight.options.map(o=>o.value), ['yes','no','unknown']);
  assert.equal(evaluateAnswers({'perdida-peso':'yes'}).find(r=>r.question.id === weight.id).status,'attention');
  const mating = QUESTIONS.find(q => q.id === 'modalidad-monta');
  assert.equal(mating.id, 'modalidad-monta');
  assert.equal(mating.title, '¿Cómo se maneja el período de monta del toro reproductor en la finca?');
  assert.deepEqual(mating.options.map(o=>o.label), [
    'El toro permanece con las vacas todo el año',
    'Se usa al toro solo en ciertos meses',
    'Se introduce al toro en fechas programadas',
    'No hay fechas ni períodos de monta definidos',
    'No sé'
  ]);
  assert.ok(mating.options.every(o=>o.status === (o.value === 'unknown' ? 'unknown' : 'context')));
});

test('The four health questions preserve prior answers and leave new conditions unknown in older visits', () => {
  const health = QUESTIONS.filter(q => q.group === 'salud');
  assert.equal(health.length, 4);
  assert.equal(health[0].id, 'fiebre');
  assert.ok(!health[0].title.includes('fiebre medida'));
  assert.equal(health[3].id, 'registro-vacunas');
  assert.ok(!QUESTIONS.some(q => q.id === 'plan-sanitario'));
  assert.ok(!QUESTIONS.some(q => q.id === 'vision' || q.id === 'vacunas'));
  const newIds = ['zona-reproductiva', 'registro-vacunas', 'hijas'];
  const previousAnswers = Object.fromEntries(QUESTIONS.filter(q => !newIds.includes(q.id)).map(q => [q.id, q.options[0].value]));
  const results = evaluateAnswers(previousAnswers);
  for (const result of results) {
    assert.equal(result.status, newIds.includes(result.question.id) ? 'unknown' : result.question.options[0].status);
  }
});

test('Vaccination records and father–daughter mating remain separate management conditions, not semen conclusions', () => {
  assert.equal(QUESTIONS.filter(q => q.group === 'manejo').length, 5);
  const results = evaluateAnswers({ 'registro-vacunas': 'yes', hijas: 'yes' });
  assert.equal(results.find(r => r.question.id === 'registro-vacunas').status, 'context');
  assert.equal(evaluateAnswers({'registro-vacunas':'no'}).find(r => r.question.id === 'registro-vacunas').status, 'attention');
  assert.equal(evaluateAnswers({vacunas:'yes'}).find(r => r.question.id === 'registro-vacunas').status, 'unknown');
  assert.match(results.find(r => r.question.id === 'registro-vacunas').answer.explanation, /no demuestra que todas las vacunas estén vigentes/);
  assert.equal(results.find(r => r.question.id === 'hijas').status, 'attention');
  assert.match(results.find(r => r.question.id === 'hijas').question.explanation, /no significa que el semen del toro sea de mala calidad/);
  assert.equal(evaluateAnswers({hijas:'unknown'}).find(r => r.question.id === 'hijas').status, 'unknown');
});

test('The first case group records herd organization and both relation ranges', () => {
  const general = QUESTIONS.filter(q => q.group === 'general');
  assert.deepEqual(general.map(q => q.id), ['organizacion-hato', 'relacion-hato', 'numero-toros']);
  assert.equal(general[2].parentId, 'relacion-hato');
  assert.ok(general.every(q => q.options.every(o => o.status === (o.value === 'unknown' ? 'unknown' : 'context'))));
  assert.equal(QUESTIONS.filter(q => !q.parentId).length, 21);
  assert.equal(QUESTIONS.findIndex(q => q.id === 'sombra'), 3);
  assert.equal(QUESTIONS.find(q => q.id === 'sombra').title, '¿El toro tiene acceso a sombra durante las horas de mayor temperatura?');
  assert.equal(QUESTIONS.find(q => q.id === 'calor').title, 'En los últimos dos meses, ¿ha pasado varios días de exposición a altas temperaturas sin poder refugiarse?');
  assert.equal(evaluateAnswers({'numero-toros':'unknown'}).find(r => r.question.id === 'numero-toros').status, 'unknown');
});

test('The andrological analysis and individual cow assignment have independent criteria', () => {
  const analysis = QUESTIONS.find(q => q.id === 'analisis-andrologico');
  const cows = QUESTIONS.find(q => q.id === 'vacas-asignadas');
  assert.equal(QUESTIONS.filter(q => !q.parentId).indexOf(analysis) + 1, 15);
  assert.equal(QUESTIONS.filter(q => !q.parentId).indexOf(cows) + 1, 18);
  assert.deepEqual(analysis.options.map(o => o.value), ['menos-ano','ano-mas','nunca','unknown']);
  assert.equal(evaluateAnswers({'analisis-andrologico':'ano-mas'}).find(r => r.question.id === analysis.id).status, 'attention');
  assert.equal(evaluateAnswers({'analisis-andrologico':'nunca'}).find(r => r.question.id === analysis.id).status, 'attention');
  assert.equal(evaluateAnswers({'vacas-asignadas':'mas-30'}).find(r => r.question.id === cows.id).status, 'context');
  assert.equal(evaluateAnswers({'cantidad-vacas':'unplanned'}).find(r => r.question.id === cows.id).status, 'unknown');
});

test('Result explanations distinguish answers that need different actions', () => {
  for (const id of ['sombra','agua','modalidad-monta']) {
    const q = QUESTIONS.find(q => q.id === id);
    const known = q.options.filter(o => o.value !== 'unknown');
    assert.equal(new Set(known.map(o => o.explanation || q.explanation)).size, known.length);
  }
});

test('All six case groups and every published option have traceable explanations and sources', () => {
  const ids = new Set(SOURCES.map(s => s.id));
  assert.equal(new Set(QUESTIONS.map(q => q.id)).size, QUESTIONS.length);
  assert.equal(new Set(FACTORS.map(f => f.id)).size, 5);
  assert.equal(ids.size, SOURCES.length);
  for (const factor of FACTORS) assert.ok(QUESTIONS.some(q => q.group === factor.id));
  for (const q of QUESTIONS) {
    assert.ok(q.group === 'general' || FACTORS.some(f => f.id === q.group));
    assert.ok(q.sourceIds.length > 0 && q.sourceIds.every(id => ids.has(id)));
    assert.equal(q.options.filter(o => o.value === 'unknown').length, 1);
    assert.equal(new Set(q.options.map(o => o.value)).size, q.options.length);
    for (const option of q.options) {
      assert.ok(['adequate','attention','priority','unknown','context'].includes(option.status));
      assert.ok(option.explanation || q.explanation);
      assert.ok(option.recommendation || q.recommendation);
    }
  }
  assert.ok(SOURCES.every(s => new URL(s.url).protocol === 'https:'));
});

test('The review matrix includes every question and each answer option', async () => {
  const matrix = await readFile(new URL('../docs/criterios-revision.md', import.meta.url), 'utf8');
  for (const q of QUESTIONS) {
    assert.equal(matrix.split(q.title).length - 1, 1, `Question ${q.id} should appear once in the review matrix`);
    for (const o of q.options) {
      assert.ok(matrix.includes(o.label), `Missing option ${q.id}/${o.value}`);
      assert.ok(matrix.includes(o.explanation || q.explanation), `Outdated explanation ${q.id}/${o.value}`);
      assert.ok(matrix.includes(o.recommendation || q.recommendation), `Outdated recommendation ${q.id}/${o.value}`);
    }
  }
  assert.match(matrix, /no validan las preguntas/);
});
