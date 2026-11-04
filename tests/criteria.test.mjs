import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { FACTORS, QUESTIONS, SOURCES, evaluateAnswers } from '../dist/content.js';

test('A case with missing or unrecognized answers never becomes favorable', () => {
  const empty = evaluateAnswers({});
  assert.equal(empty.length, 19);
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

test('Prior examinations and periods without mating remain contextual', () => {
  const results = evaluateAnswers({ evaluacion: 'yes', monta: 'inactive', demanda: 'planned' });
  for (const id of ['evaluacion','monta','demanda']) assert.equal(results.find(r => r.question.id === id).status, 'context');
  assert.ok(!QUESTIONS.some(q => q.id === 'raza'));
});

test('Age ranges and every reproductive period are descriptive context, never fertility classifications', () => {
  for (const id of ['edad','periodo']) {
    const q = QUESTIONS.find(q => q.id === id);
    assert.ok(q, `Missing contextual question ${id}`);
    for (const option of q.options) {
      const result = evaluateAnswers({[id]:option.value}).find(r => r.question.id === id);
      assert.equal(result.status, option.value === 'unknown' ? 'unknown' : 'context');
    }
    assert.equal(evaluateAnswers({}).find(r=>r.question.id === id).status,'unknown');
  }
});

test('Older cases retain their individual results while the two newly introduced questions remain unknown', () => {
  const oldAnswers = Object.fromEntries(QUESTIONS.filter(q=>!['edad','periodo'].includes(q.id)).map(q=>[q.id,q.options[0].value]));
  const oldResults = evaluateAnswers(oldAnswers);
  for (const result of oldResults) assert.equal(result.status, ['edad','periodo'].includes(result.question.id) ? 'unknown' : result.question.options[0].status);
  for (const period of QUESTIONS.find(q=>q.id === 'periodo').options) {
    const changed = evaluateAnswers({...oldAnswers,edad:'under2',periodo:period.value});
    for (const oldResult of oldResults.filter(r=>!['edad','periodo'].includes(r.question.id))) {
      assert.equal(changed.find(r=>r.question.id === oldResult.question.id).status,oldResult.status);
    }
  }
});

test('The five health questions preserve prior answers and leave new conditions unknown in older visits', () => {
  const health = QUESTIONS.filter(q => q.group === 'salud');
  assert.equal(health.length, 5);
  assert.equal(health[0].id, 'fiebre');
  assert.ok(!health[0].title.includes('fiebre medida'));
  assert.equal(health[4].id, 'vacunas');
  assert.ok(!QUESTIONS.some(q => q.id === 'plan-sanitario'));
  const newIds = ['zona-reproductiva', 'vision', 'vacunas', 'hijas'];
  const previousAnswers = Object.fromEntries(QUESTIONS.filter(q => !newIds.includes(q.id)).map(q => [q.id, q.options[0].value]));
  const results = evaluateAnswers(previousAnswers);
  for (const result of results) {
    assert.equal(result.status, newIds.includes(result.question.id) ? 'unknown' : result.question.options[0].status);
  }
});

test('Vaccination and father–daughter mating remain separate management conditions, not semen conclusions', () => {
  assert.equal(QUESTIONS.filter(q => q.group === 'manejo').length, 5);
  const results = evaluateAnswers({ vacunas: 'yes', hijas: 'yes' });
  assert.equal(results.find(r => r.question.id === 'vacunas').status, 'context');
  assert.equal(results.find(r => r.question.id === 'hijas').status, 'attention');
  assert.match(results.find(r => r.question.id === 'hijas').question.explanation, /no demuestra un problema de calidad seminal/);
  assert.equal(evaluateAnswers({hijas:'unknown'}).find(r => r.question.id === 'hijas').status, 'unknown');
});

test('All five groups and every published option have traceable explanations and sources', () => {
  const ids = new Set(SOURCES.map(s => s.id));
  assert.equal(new Set(QUESTIONS.map(q => q.id)).size, QUESTIONS.length);
  assert.equal(new Set(FACTORS.map(f => f.id)).size, 5);
  assert.equal(ids.size, SOURCES.length);
  for (const factor of FACTORS) assert.ok(QUESTIONS.some(q => q.group === factor.id));
  for (const q of QUESTIONS) {
    assert.ok(FACTORS.some(f => f.id === q.group));
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
    for (const o of q.options) assert.ok(matrix.includes(o.label), `Missing option ${q.id}/${o.value}`);
  }
  assert.match(matrix, /no validan las preguntas/);
});
