import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { FACTORS, QUESTIONS } from '../dist/content.js';
import { FACTOR_SCENES, sceneTopic, renderFactorScene, renderSceneDetail } from '../dist/factor-scenes.js';

test('Every factor has a distinct scene and each interactive topic links to a question in that factor', () => {
  assert.deepEqual(Object.keys(FACTOR_SCENES),FACTORS.map(f=>f.id));
  const images = new Set();
  for (const factor of FACTORS) {
    const scene = FACTOR_SCENES[factor.id];
    assert.ok(scene.topics.length >= 2);
    assert.ok(scene.alt.length > 40);
    for (const topic of scene.topics) {
      assert.ok(QUESTIONS.some(q=>q.id === topic.id && q.group === factor.id),`${factor.id}/${topic.id}`);
      assert.ok(topic.x >= 7 && topic.x <= 93 && topic.y >= 13 && topic.y <= 82);
    }
    const rendered = renderFactorScene(factor.id);
    const photo = rendered.match(/<img[^>]*src="([^"]+)"/)[1];
    images.add(photo);
    assert.ok(existsSync(new URL(`../dist/${photo}`,import.meta.url)));
    assert.ok(existsSync(new URL(`../dist/assets/premium/${factor.id}-960.webp`,import.meta.url)));
    assert.ok(existsSync(new URL(`../dist/assets/premium/${factor.id}-480.webp`,import.meta.url)));
    assert.match(rendered,/generada con IA/);
  }
  assert.equal(images.size,5);
});

test('Each scene topic has an educational explanation and an explicit separate action to the case', () => {
  for (const [group,scene] of Object.entries(FACTOR_SCENES)) {
    for (const topic of scene.topics) {
      const detail = renderSceneDetail(group,topic.id);
      assert.ok(detail.includes(topic.description));
      assert.ok(detail.includes(topic.observation));
      assert.ok(detail.includes(`data-action="start-topic" data-value="${topic.id}"`));
      const rendered = renderFactorScene(group,topic.id);
      assert.match(rendered,/aria-live="polite"/);
      assert.ok(rendered.includes('data-action="scene-topic"'));
      assert.ok(!rendered.includes('<input'));
    }
  }
});

test('Invalid scene selections fall back to a valid topic without exposing arbitrary markup', () => {
  for (const group of Object.keys(FACTOR_SCENES)) assert.equal(sceneTopic(group,'<script>'),FACTOR_SCENES[group].topics[0]);
  assert.equal(renderFactorScene('unrecognized'), '');
  assert.equal(renderSceneDetail('unrecognized','unrecognized'), '');
});
