import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { FACTORS, QUESTIONS, SOURCES, evaluateAnswers } from '../dist/content.js';

test('A case with missing or unrecognized answers never becomes favorable', () => {
  const empty = evaluateAnswers({});
  assert.equal(empty.length, 13);
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
  assert.ok(!QUESTIONS.some(q => ['edad','raza'].includes(q.id)));
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
    assert.ok(matrix.includes(q.title), `Missing question ${q.id}`);
    for (const o of q.options) assert.ok(matrix.includes(o.label), `Missing option ${q.id}/${o.value}`);
  }
  assert.match(matrix, /no validan las preguntas/);
});
