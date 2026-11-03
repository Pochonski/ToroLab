// Escenas vectoriales educativas. No representan diagnósticos ni muestras reales.
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

export const FACTOR_SCENES = {
  ambiente: {
    title: 'Un día en el potrero',
    alt: 'Toro en un potrero con un árbol de sombra, sol y bebedero. Tres puntos permiten explorar sombra, agua y exposición al calor.',
    topics: [
      { id:'sombra', title:'Sombra', x:19, y:29, description:'Observa dónde puede refugiarse el toro durante las horas de mayor calor.', observation:'¿La sombra está disponible cuando la necesita?' },
      { id:'agua', title:'Agua', x:82, y:72, description:'Mira el bebedero, su suministro y el camino que utiliza el toro para llegar hasta él.', observation:'¿Puede alcanzar agua limpia durante todo el día?' },
      { id:'calor', title:'Calor', x:81, y:19, description:'Recuerda si ha pasado varios días de mucho calor sin refugio. Cada reproductor puede responder de manera diferente.', observation:'¿Qué condiciones de calor has observado en la finca?' }
    ]
  },
  nutricion: {
    title: 'Lo que come y lo que observas',
    alt: 'Toro junto a forraje y un comedero, con un registro de alimentación. Tres puntos permiten explorar alimento, condición corporal y cambios de dieta.',
    topics: [
      { id:'alimento', title:'Alimento', x:17, y:70, description:'Revisa la disponibilidad de pasto, forraje y alimento a lo largo del periodo.', observation:'¿Ha habido interrupciones repetidas del alimento disponible?' },
      { id:'condicion', title:'Condición corporal', x:52, y:42, description:'Compara lo que observas hoy con los registros del toro. Su apariencia no permite conocer la calidad del semen.', observation:'¿Has observado pérdida marcada de condición o exceso de grasa?' },
      { id:'dieta', title:'Cambios de dieta', x:85, y:27, description:'Ubica los cambios de pasto, alimento o suplementación y cómo se planificó la transición.', observation:'¿Hubo cambios importantes sin una transición planificada?' }
    ]
  },
  salud: {
    title: 'Su historia sanitaria también cuenta',
    alt: 'Toro de pie junto a un registro sanitario y un termómetro ilustrado. Dos puntos permiten explorar antecedentes de fiebre o enfermedad y signos visibles.',
    topics: [
      { id:'fiebre', title:'Antecedentes sanitarios', x:76, y:28, description:'Consulta las fechas y los registros de fiebre medida o enfermedad atendida por un profesional.', observation:'¿Hay antecedentes que deban compartirse durante la evaluación?' },
      { id:'lesiones', title:'Movimiento y lesiones', x:34, y:74, description:'Observa cómo se mueve desde una distancia segura. La ilustración señala qué observar, sin representar a un toro enfermo.', observation:'¿Has observado cojera, dolor o una lesión visible?' }
    ]
  },
  reproductor: {
    title: 'Conoce a este reproductor',
    alt: 'Toro acompañado por una ficha de edad, un informe de evaluación y documentos de seguimiento. Tres puntos permiten explorar sus antecedentes individuales.',
    topics: [
      { id:'edad', title:'Edad e historia', x:16, y:26, description:'La edad ayuda a describir al animal. Un rango de edad no determina madurez, aptitud ni fertilidad.', observation:'¿Conoces su edad aproximada o su fecha de nacimiento?' },
      { id:'evaluacion', title:'Evaluación individual', x:83, y:27, description:'El informe profesional aporta información sobre este toro en el momento de la evaluación.', observation:'¿Cuentas con un informe para el periodo actual o próximo?' },
      { id:'seguimiento', title:'Seguimiento', x:82, y:74, description:'Reúne las indicaciones anteriores del profesional y revisa si alguna sigue pendiente.', observation:'¿Se indicó repetir una prueba o revisar un hallazgo?' }
    ]
  },
  manejo: {
    title: 'Una mirada al periodo de monta',
    alt: 'Calendario de monta, toro y vaca en un potrero con cercas y un registro del hato. Cuatro puntos permiten explorar periodo, demanda, servicio y seguimiento del hato.',
    topics: [
      { id:'periodo', title:'Periodo reproductivo', x:15, y:26, description:'Ubica si está antes, durante o después de la monta, o si la finca no tiene un periodo definido.', observation:'Esta etapa se registra como contexto y no califica al toro.' },
      { id:'demanda', title:'Demanda de monta', x:42, y:44, description:'Piensa en los cambios del grupo de vacas, los recorridos y la organización del trabajo del toro.', observation:'¿Cambió la demanda sin revisar el plan de manejo?' },
      { id:'monta', title:'Observación del servicio', x:67, y:67, description:'Observa el servicio desde una distancia segura. Completar una monta no demuestra la calidad del semen.', observation:'¿Has observado dificultades repetidas para completar el servicio?' },
      { id:'hato', title:'Registros del hato', x:88, y:46, description:'Reúne los registros de servicios, celos y preñez. Una preocupación del hato puede tener distintas causas.', observation:'¿Hay resultados que convenga revisar con el profesional?' }
    ]
  }
};

function bull(x, y, scale = 1, color = '#365d4b') {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="${color}"><ellipse cx="103" cy="90" rx="83" ry="41"/><path d="M131 63q6-38 27-35 21 1 22 36l20 12-7 34-19 19-16-5-5-31Z"/><path d="m180 65 22-13 21 8 11 19-8 18-25 1-16-12Z"/><path d="m205 55-2-16 11 16 13-7-5 14m-194 12-16 24-1 32-5 4-1-39 16-28Z"/><path d="m36 112-5 68h12l12-63m22 5 1 58h11l5-58m49-7 2 65h12l8-67m17-3 8 70h11l-3-76Z"/><path d="m180 103 14 5-12 27-10-4Z"/><path d="M31 180h14m32 0h14m53 0h15m29 0h15" stroke="#244638" stroke-width="4" stroke-linecap="round"/><circle cx="217" cy="72" r="2.2" fill="#f6f7ec"/><path d="m223 87 8-1" stroke="#c4d8b6" stroke-width="1.5" fill="none"/></g>`;
}
function clipboard(x, y, variant = 'lines') {
  return `<g transform="translate(${x} ${y})"><rect x="0" y="4" width="105" height="129" rx="8" fill="#fcfdf6" stroke="#92ab83" stroke-width="2"/><rect x="31" y="0" width="43" height="14" rx="4" fill="#aabf94"/><path d="M18 41h69M18 64h69M18 87h69M18 110h42" stroke="#c6d4b8" stroke-width="3" stroke-linecap="round"/>${variant === 'health' ? '<circle cx="53" cy="42" r="18" fill="#e3ece0"/><path d="M53 32v20m-10-10h20" stroke="#5c8564" stroke-width="4"/>' : ''}</g>`;
}
function calendar(x, y, mark = 'age') {
  return `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="114" height="112" rx="9" fill="#fcfdf5" stroke="#91aa82" stroke-width="2"/><path d="M0 31h114" stroke="#91aa82" stroke-width="2"/><path d="M27-7v18m60-18v18" stroke="#688665" stroke-width="5" stroke-linecap="round"/>${mark === 'age' ? '<text x="57" y="73" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="#56784f">EDAD</text><path d="M29 89h56" stroke="#bdcdae" stroke-width="3"/>' : '<path d="M23 53h14m12 0h14m12 0h14M23 73h14m12 0h14m12 0h14M23 92h14m12 0h14" stroke="#c1d0b2" stroke-width="5" stroke-linecap="round"/><circle cx="56" cy="73" r="12" fill="none" stroke="#64865a" stroke-width="2"/>'}</g>`;
}
function object(id, markup, selected) {
  return `<g class="scene-object${id === selected ? ' is-highlighted' : ''}" data-scene-object="${id}">${markup}</g>`;
}
function art(group, selected) {
  const base = '<rect width="680" height="350" rx="12" fill="#eef3e7"/><path d="M0 230q135-65 285-15T680 192v158H0Z" fill="#e0e9d2"/><path d="M0 286q250-56 680-9v73H0Z" fill="#cfdfbe"/><path d="M30 313h620" stroke="#bbd0a7" stroke-width="2" stroke-linecap="round"/>';
  let scene = '';
  if (group === 'ambiente') {
    scene = object('sombra','<path d="M126 235V99m0 54-29-26m29 55 30-33" stroke="#7e8a60" stroke-width="11" fill="none"/><path d="M57 109c-27-37 13-82 49-65 17-37 71-21 72 10 43-1 60 39 31 62-24 23-50 16-70 6-34 23-73 20-82-13Z" fill="#8faa70"/><ellipse cx="130" cy="253" rx="89" ry="12" fill="#afc69a"/>',selected)
      + bull(224,116,1.03)
      + object('agua','<path d="M504 257h126l-14 41h-100Z" fill="#b4c8aa" stroke="#789673" stroke-width="2"/><ellipse cx="567" cy="258" rx="63" ry="9" fill="#97bdc4"/><path d="M550 247v-39h31v15" fill="none" stroke="#769274" stroke-width="5"/><path d="M580 229v15" stroke="#91b6be" stroke-width="3" stroke-dasharray="3 4"/>',selected)
      + object('calor','<circle cx="553" cy="65" r="28" fill="#e4c985"/><path d="M553 20V9m0 101v11m-44-56h-12m100 0h12m-75-31-8-8m60 60 8 8m-60-8-8 8m60-60 8-8" fill="none" stroke="#d6b66e" stroke-width="3" stroke-linecap="round"/>',selected);
  } else if (group === 'nutricion') {
    scene = object('alimento','<rect x="50" y="237" width="122" height="51" rx="7" fill="#cebd82" stroke="#b3a373" stroke-width="2"/><path d="M70 238v49m26-49v49m28-49v49m28-49v49" stroke="#e2d4a8" stroke-width="3"/><path d="m65 224 9-43 15 43m7 0 13-57 14 57m3 0 12-47 14 47" fill="#8ea46c"/><path d="M74 211h75" stroke="#647d55" stroke-width="3"/>',selected)
      + object('condicion',bull(226,112,1.02),selected)
      + object('dieta',clipboard(520,60)+'<path d="M542 215h73m-59 14h48" stroke="#9fb68c" stroke-width="4" stroke-linecap="round"/><path d="m553 205 10 10-10 10m44-6-10 10 10 10" stroke="#62845d" stroke-width="2" fill="none"/>',selected);
  } else if (group === 'salud') {
    scene = object('lesiones',bull(110,114,1.04)+'<ellipse cx="245" cy="301" rx="116" ry="9" fill="#b3cba0" opacity=".65"/><path d="m122 288-22 11 23 9m202-20 24 11-24 9" stroke="#91aa7b" stroke-width="2" fill="none"/>',selected)
      + object('fiebre',clipboard(435,58,'health')+'<g transform="translate(579 81)"><rect x="0" y="0" width="17" height="79" rx="8" fill="#f8faf2" stroke="#90a780" stroke-width="2"/><circle cx="8.5" cy="83" r="15" fill="#f8faf2" stroke="#90a780" stroke-width="2"/><path d="M8.5 28v54" stroke="#bb927c" stroke-width="5" stroke-linecap="round"/><circle cx="8.5" cy="83" r="8" fill="#bb927c"/></g>',selected);
  } else if (group === 'reproductor') {
    scene = object('edad',calendar(52,54),selected)+bull(221,110,1.03)
      + object('evaluacion',clipboard(513,52)+'<path d="m534 79 8 8 14-16" fill="none" stroke="#739768" stroke-width="3"/>',selected)
      + object('seguimiento','<g transform="translate(510 240)"><path d="M0 9V0h42l10 9h61v60H0Z" fill="#a7bd90" stroke="#789c69" stroke-width="2"/><path d="M8 20h114l-15 49H0Z" fill="#cfddbd" stroke="#789c69" stroke-width="2"/><path d="M34 39h46m-46 13h29" stroke="#91ab7c" stroke-width="3" stroke-linecap="round"/></g>',selected);
  } else {
    scene = '<path d="M65 203h557M66 179v70m91-70v70m96-70v70m94-70v70m96-70v70m96-70v70m83-70v70" stroke="#b5c59e" stroke-width="5" fill="none"/>'
      + object('periodo',calendar(49,51,'period'),selected)
      + object('demanda',bull(170,150,.83),selected)
      + object('monta',bull(426,183,.65,'#8aa178'),selected)
      + object('hato',clipboard(568,119),selected);
  }
  return base + scene;
}

export function sceneTopic(group, id) {
  const scene = FACTOR_SCENES[group];
  return scene?.topics.find(t => t.id === id) || scene?.topics[0];
}

export function renderSceneDetail(group, id) {
  const topic = sceneTopic(group,id);
  if (!topic) return '';
  return `<p class="scene-detail-kicker">En tu finca</p><h3>${esc(topic.title)}</h3><p>${esc(topic.description)}</p><p class="scene-observation">${esc(topic.observation)}</p><button class="text-link scene-case-link" data-action="start-topic" data-value="${topic.id}" data-group="${group}">Relacionarlo con mi caso <span aria-hidden="true">→</span></button>`;
}

export function renderFactorScene(group, selectedId) {
  const scene = FACTOR_SCENES[group];
  if (!scene) return '';
  const selected = sceneTopic(group,selectedId);
  return `<figure class="interactive-scene" data-interactive-scene="${group}"><figcaption class="scene-heading"><h3>${esc(scene.title)}</h3><p>Selecciona un punto y descubre qué observar.</p></figcaption><div class="scene-stage"><svg class="scene-graphic" viewBox="0 0 680 350" role="img" aria-label="${esc(scene.alt)}">${art(group,selected.id)}</svg>${scene.topics.map((t,i) => `<button class="scene-marker" style="left:${t.x}%;top:${t.y}%" data-action="scene-topic" data-value="${t.id}" data-group="${group}" aria-label="${esc(t.title)}, punto ${i+1}" aria-pressed="${selected.id===t.id}" aria-controls="scene-detail"><span>${i+1}</span></button>`).join('')}<span class="scene-caption">Representación educativa · sin escala</span></div><div class="scene-topic-list" role="group" aria-label="Temas de la ilustración">${scene.topics.map((t,i) => `<button class="scene-topic-button" data-action="scene-topic" data-value="${t.id}" data-group="${group}" aria-pressed="${selected.id===t.id}" aria-controls="scene-detail"><span>${i+1}</span>${esc(t.title)}</button>`).join('')}</div><div class="scene-detail" id="scene-detail" aria-live="polite" aria-atomic="true">${renderSceneDetail(group,selected.id)}</div></figure>`;
}
