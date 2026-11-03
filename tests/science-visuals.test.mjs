import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { CELL_PARTS, renderScientificVisual } from '../dist/science-visuals.js';

test('Equal-volume comparison changes cell count while retaining its educational context', () => {
  const less = renderScientificVisual('concentration',{density:'less'});
  const more = renderScientificVisual('concentration',{density:'more'});
  assert.equal((less.match(/class="sperm-sprite"/g)||[]).length,4);
  assert.equal((more.match(/class="sperm-sprite"/g)||[]).length,12);
  for (const visual of [less,more]) {
    assert.match(visual,/un mismo volumen, sin escala ni valor diagnóstico/);
    assert.match(visual,/Modelo generado con IA/);
  }
});

test('Anatomy selections name the selected part and unknown selections have a safe fallback', () => {
  for (const [part,{label,left,top}] of Object.entries(CELL_PARTS)) {
    const visual = renderScientificVisual('morphology',{part});
    assert.ok(visual.includes(`Parte seleccionada: ${label}`));
    assert.ok(visual.includes(`left:${left}%;top:${top}%`));
    assert.match(visual,/class="cell-composition"/);
  }
  assert.match(renderScientificVisual('morphology',{part:'<script>'}),/Parte seleccionada: Cabeza/);
  assert.equal(renderScientificVisual('unexpected'),'');
});

test('Movement and pause remain available with real generated assets', () => {
  assert.match(renderScientificVisual('motility'),/sprite-flow /);
  assert.match(renderScientificVisual('motility',{movement:'reduced',paused:true}),/scientific-visual paused/);
  assert.match(renderScientificVisual('motility',{movement:'reduced'}),/is-reduced/);
  for (const asset of ['celula.webp','celula-640.webp','laboratorio.webp','laboratorio-960.webp']) {
    assert.ok(existsSync(new URL(`../dist/assets/premium/${asset}`,import.meta.url)));
  }
});
