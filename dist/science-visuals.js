// Modelo celular generado con IA, nunca una muestra ni un resultado de laboratorio.
const cell = (x,y,angle=0) => `<img class="sperm-sprite" src="./assets/premium/celula-640.webp" alt="" width="640" height="213" style="left:${x}%;top:${y}%;--angle:${angle}deg;--delay:-${(x+y)%6}s" loading="lazy" decoding="async">`;
export const CELL_PARTS = {
  head: {label:'Cabeza',left:9,top:50},
  midpiece: {label:'Pieza intermedia',left:23,top:55},
  tail: {label:'Cola',left:66,top:45}
};
export function renderScientificVisual(kind,{movement='progressive',density='less',paused=false,part='head'}={}) {
  let interior = '';
  let label = '';
  if (kind === 'motility') {
    label = movement === 'reduced' ? 'Modelo educativo de movimiento con poco avance' : 'Modelo educativo de movimiento progresivo hacia la cabeza de la célula';
    interior = `<div class="cell-field sprite-flow ${movement === 'reduced' ? 'is-reduced' : ''}">${[[13,16,-8],[55,17,8],[27,42,-12],[62,43,6],[13,69,8],[54,73,-7]].map(p=>cell(...p)).join('')}</div><span class="science-mode">${movement === 'reduced' ? 'Poco avance' : 'Avance progresivo'} <span aria-hidden="true">←</span></span>`;
  } else if (kind === 'morphology') {
    const selected = CELL_PARTS[part] || CELL_PARTS.head;
    label = `Modelo tridimensional de un espermatozoide. Parte seleccionada: ${selected.label}`;
    interior = `<div class="cell-composition"><img class="cell-large" src="./assets/premium/celula.webp" alt="" width="2172" height="724" loading="lazy" decoding="async"><span class="cell-part-indicator" style="left:${selected.left}%;top:${selected.top}%" aria-hidden="true"></span></div><span class="science-mode">${selected.label}</span>`;
  } else if (kind === 'concentration') {
    label = `${density === 'more' ? 'Mayor' : 'Menor'} cantidad representada en un mismo volumen, sin escala ni valor diagnóstico`;
    const positions = density === 'more' ? Array.from({length:12},(_,i)=>[3+(i%3)*32,9+Math.floor(i/3)*21,(i%3-1)*5]) : [[7,18,-8],[54,21,7],[25,57,5],[65,73,-8]];
    interior = `<div class="cell-field density-field" data-density="${density}">${positions.map(p=>cell(...p)).join('')}</div><span class="science-mode">Mismo volumen · ${density === 'more' ? 'mayor' : 'menor'} cantidad</span>`;
  } else return '';
  return `<div class="concept-visual scientific-visual ${paused ? 'paused' : ''}" role="img" aria-label="${label}">${interior}<span class="concept-label">Modelo generado con IA · sin escala</span></div>`;
}
