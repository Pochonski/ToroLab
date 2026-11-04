import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { CELL_PARTS, MORPH_EXAMPLES, CONCENTRATION_COUNTS, createExplorerState, createMotileCells, advanceMotileCells, renderScientificExplorer } from '../dist/science-visuals.js';

test('The visualizer starts in progressive motion and exposes all three accessible views', () => {
  const state = createExplorerState();
  const markup = renderScientificExplorer(state);
  assert.equal(state.tab, 'motility');
  assert.equal(state.movement, 'progressive');
  assert.equal(state.speed, 1);
  assert.equal(state.trails, false);
  assert.match(markup, /role="tablist"/);
  assert.equal((markup.match(/role="tab"/g) || []).length, 3);
  assert.match(markup, /Simulación educativa · sin escala/);
  assert.match(markup, /Movimiento sin avance/);
  assert.match(markup, /Inmovilidad/);
  assert.equal(createExplorerState(true).paused, true);
});

test('The motion model keeps 24 individual cells and moves along head orientation', () => {
  const cells = createMotileCells();
  assert.equal(cells.length, 24);
  assert.equal(new Set(cells.map(cell => cell.x.toFixed(4) + ':' + cell.y.toFixed(4))).size, 24);
  const before = cells.map(cell => ({ x: cell.x, y: cell.y, heading: cell.heading }));
  advanceMotileCells(cells, 'progressive', .2, .2);
  for (let i = 0; i < cells.length; i++) {
    const dx = cells[i].x - before[i].x, dy = cells[i].y - before[i].y;
    assert.ok(dx * Math.cos(cells[i].heading) + dy * Math.sin(cells[i].heading) > 0);
  }
  const snapshot = structuredClone(cells);
  advanceMotileCells(cells, 'still', .5, .7);
  assert.deepEqual(cells, snapshot);
});

test('Morphology offers reference plus three sourced examples and the concentration fields share a stage', () => {
  assert.deepEqual(Object.keys(CELL_PARTS), ['head', 'midpiece', 'tail']);
  assert.deepEqual(Object.keys(MORPH_EXAMPLES), ['reference', 'pyriform', 'droplet', 'coiled']);
  const morph = renderScientificExplorer({ ...createExplorerState(), tab: 'morphology' });
  for (const item of Object.values(MORPH_EXAMPLES)) assert.ok(morph.includes(item.label));
  assert.match(morph, /pmc\.ncbi\.nlm\.nih\.gov\/articles\/PMC7468166/);
  assert.match(morph, /science-fallback/);
  const concentration = renderScientificExplorer({ ...createExplorerState(), tab: 'concentration' });
  assert.deepEqual(CONCENTRATION_COUNTS, [12, 24, 48]);
  assert.match(concentration, /science-reference/);
  assert.match(concentration, /science-comparison/);
  assert.match(concentration, /min="1" max="3"/);
  const three = readFileSync(new URL('../dist/vendor/three/three.module.js', import.meta.url), 'utf8');
  assert.ok(three.length > 100000);
  assert.ok(existsSync(new URL('../dist/vendor/three/LICENSE', import.meta.url)));
});
