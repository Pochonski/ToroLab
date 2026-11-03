import { FACTORS, QUESTIONS, SOURCES, evaluateAnswers } from './content.js';

const main = document.querySelector('main');
const nav = document.querySelector('#primary-nav');
const menu = document.querySelector('#menu-toggle');
const storageKey = 'calidad-seminal-caso-v1';
const statusLabels = {
  adequate: 'Adecuada según lo declarado', attention: 'Merece atención',
  priority: 'Requiere mayor atención', unknown: 'Información insuficiente', context: 'Dato de contexto'
};
const paths = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  external: '<path d="M14 4h6v6m0-6L10 14M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  leaf: '<path d="M20 3C9 1 3 6 4 13c1 7 12 9 15 0 1-3 0-7 1-10ZM3 22C6 13 11 9 16 7m-8 7 6 1m-3-5-1-4"/>',
  heart: '<path d="M20.5 5.5a5 5 0 0 0-7 0L12 7l-1.5-1.5a5 5 0 0 0-7 7L12 21l8.5-8.5a5 5 0 0 0 0-7Z"/><path d="M5 12h4l1.5-3 3 6 1.5-3h4"/>',
  bull: '<path d="M7 7C3 8 1 5 2 2c3 4 6 1 8 4m7 1c4 1 6-2 5-5-3 4-6 1-8 4M7 7l-3 3 3 2 1 7 4 3 4-3 1-7 3-2-3-3-5-1z"/><path d="m9 14 1 1m5-1-1 1m-4 3h4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5 3 3 5-5"/>',
  clipboard: '<rect x="5" y="4" width="15" height="18" rx="2"/><rect x="9" y="2" width="7" height="4" rx="1"/><path d="m8 11 1 1 2-2m2 1h4m-9 6 1 1 2-2m2 1h4"/>',
  book: '<path d="M12 5C8 2 4 3 2 4v16c3-2 7-1 10 1 3-2 7-3 10-1V4c-3-1-6-2-10 1Zm0 0v16M5 8l4 1m6 0 4-1M5 12l4 1m6 0 4-1"/>',
  microscope: '<path d="m10 3 5 3-4 8-5-3zM8 13l-2 4h8m2-8a7 7 0 0 1 1 13H6m7-1v-4m-9 5h17m-7-20 3 2"/>',
  chart: '<path d="M4 20V10h3v10m4 0V4h3v16m4 0V7h3v13M2 22h21"/>',
  shield: '<path d="M12 2 3 6v6c0 5 5 8 9 10 4-2 9-5 9-10V6z"/><path d="m8 12 3 3 5-6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
  check: '<path d="m5 12 4 4L20 5"/>',
  file: '<path d="M14 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8zm0 0v6h6M8 12h8m-8 4h8"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  play: '<path d="m8 4 12 8-12 8Z"/>'
};
const icon = (name, small = false) => `<svg class="icon${small ? ' icon-sm' : ''}" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.info}</svg>`;
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sourceById = new Map(SOURCES.map(source => [source.id, source]));
const questionNumbers = new Map(QUESTIONS.map((q, i) => [q.id, i + 1]));
const groupQuestions = group => QUESTIONS.filter(q => q.group === group);
const sourceLinks = ids => `<div class="sources-inline">Fuentes: ${ids.map(id => sourceById.get(id)).filter(Boolean).map(source => `<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)} <span aria-hidden="true">↗</span></a>`).join(' ')}</div>`;
const statusLabel = status => `<span class="status-label status-${status}"><span class="status-dot" aria-hidden="true"></span>${statusLabels[status]}</span>`;

function loadState() {
  const empty = { answers: {}, step: 0, completed: false };
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey));
    if (!saved || typeof saved !== 'object') return empty;
    const answers = {};
    for (const q of QUESTIONS) {
      if (q.options.some(o => o.value === saved.answers?.[q.id])) answers[q.id] = saved.answers[q.id];
    }
    return { answers, step: Number.isInteger(saved.step) && saved.step >= 0 && saved.step < FACTORS.length ? saved.step : 0, completed: saved.completed === true && Object.keys(answers).length === QUESTIONS.length };
  } catch { return empty; }
}
let state = loadState();
let activeFactor = 'ambiente';
let movement = 'progressive';
let density = 'less';
let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveState = () => { try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch { /* The questionnaire also works in memory when storage is unavailable. */ } };
const answeredCount = () => Object.keys(state.answers).length;
const reviewNotice = () => `<div class="review-notice">${icon('info')}<p><strong>Propuesta para revisión académica.</strong> Los niveles de atención son criterios educativos provisionales. Las fuentes respaldan el contenido general, pero no validan este cuestionario ni sus colores. <a href="#criterios">Consultar los criterios</a>.</p></div>`;
const intro = (eyebrow, title, text) => `<div class="page-intro"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${text}</p></div>`;
const breadcrumb = current => `<div class="breadcrumb"><a href="#inicio">Inicio</a><span aria-hidden="true">/</span><span>${current}</span></div>`;

function homePage() {
  const shortcuts = [
    ['mi-caso', 'clipboard', 'Mi caso', 'Explora tu realidad'],
    ['factores', 'leaf', 'Los factores', 'Conoce qué influye'],
    ['evaluacion', 'microscope', 'Evaluación', 'Aprende con imágenes'],
    ['recursos', 'book', 'Recursos', 'Consulta las fuentes']
  ];
  return `<section class="container home">
    <div class="hero">
      <picture><source media="(max-width: 700px)" srcset="./assets/toro-potrero-960.webp"><img class="hero-image" src="./assets/toro-potrero.webp" alt="Toro adulto de pelaje negro en un potrero con árboles y sombra" width="1672" height="941" fetchpriority="high"></picture>
      <div class="hero-panel"><p class="eyebrow">Conocimiento que llega a la finca</p><h1>¿Qué puede afectar la calidad seminal de tu toro?</h1><p>Conoce los factores, reconoce condiciones de tu finca y descubre por qué es importante la evaluación andrológica.</p><a class="button button-light" href="#mi-caso">${answeredCount() ? 'Continuar mi caso' : 'Explorar mi caso'} ${icon('arrow')}</a></div>
      <span class="hero-caption">Imagen de contexto generada con IA</span>
    </div>
    <div class="quick-grid">${shortcuts.map(([route, symbol, title, subtitle]) => `<a class="quick-card" href="#${route}"><span class="icon-box">${icon(symbol)}</span><div><h2>${title}</h2><p>${subtitle}</p></div></a>`).join('')}</div>
    <section class="home-factors"><div class="section-heading"><div><p class="eyebrow">Una mirada integral</p><h2>Cinco factores. Un mismo reproductor.</h2><p>El ambiente, su historia y el manejo también cuentan.</p></div><a class="text-link" href="#factores">Explorar los factores ${icon('arrow', true)}</a></div>
      <div class="factor-preview-grid">${FACTORS.map(factor => `<a class="factor-preview" href="#factores/${factor.id}">${icon(factor.icon)}<h3>${esc(factor.title)}</h3><p>${esc(factor.short)}</p><span class="card-arrow" aria-hidden="true">↗</span></a>`).join('')}</div>
    </section>
    <div class="journey-banner">${icon('shield')}<div><h3>Observar es el primer paso. Evaluar permite saber más.</h3><p>Reconocer un factor de atención no demuestra que el semen esté alterado. La evaluación andrológica integra información del animal y pruebas realizadas por un profesional.</p></div><a class="text-link" href="#evaluacion">Conocer la evaluación ${icon('arrow', true)}</a></div>
    <section class="home-how"><h2>De tu finca al conocimiento</h2><div class="how-grid">
      <div class="how-card"><span class="how-number">01</span><div><h3>Conoce lo que influye</h3><p>Explora situaciones cotidianas y su relación con la calidad seminal.</p></div></div>
      <div class="how-card"><span class="how-number">02</span><div><h3>Relaciona con tu caso</h3><p>Responde preguntas sobre el toro y las condiciones de tu finca.</p></div></div>
      <div class="how-card"><span class="how-number">03</span><div><h3>Comprende tus puntos de atención</h3><p>Consulta cada condición y prepara tus dudas para el profesional.</p></div></div>
    </div></section>
  </section>`;
}

function farmIllustration(factor) {
  return `<svg class="farm-illustration" viewBox="0 0 340 210" role="img" aria-label="Ilustración educativa de un toro, sombra, agua y pasto en una finca"><rect width="340" height="210" fill="#edf3e6"/><path d="M0 150Q70 110 150 142T340 128v82H0Z" fill="#dce7cc"/><path d="M0 180Q120 147 340 173v37H0Z" fill="#c7d9b3"/><circle cx="270" cy="42" r="21" fill="#e5cb82"/><g stroke="#e5cb82" stroke-width="2"><path d="M270 9V2m0 80v-8m33-32h9m-84 0h9m9-24-7-7m55 55 7 7m-7-55 7-7"/></g><path d="M59 139V71m-1 25-18-18m19 29 19-20" stroke="#6a7952" stroke-width="7" fill="none"/><path d="M24 71c-16-24 12-48 30-39 9-22 45-6 41 13 25 1 27 29 8 38-14 9-31 4-40-3-22 13-39 7-39-9Z" fill="#78985e"/><path d="M28 153h69" stroke="#afc69b" stroke-width="5" stroke-linecap="round"/><g fill="#315846"><path d="M127 113q7-17 28-15h43l15-14 17 7-4 20-12 8-9-4-3 23-7 22h-8l3-23-27 1-10 25h-9l5-28-16-8-2 32h-8l-3-41Z"/><path d="m207 87 1-11 8 9 10-5 2 9m-101 18-13 17 1 20-4 3-3-25 14-18"/></g><circle cx="221" cy="98" r="1.7" fill="#edf3e6"/><path d="M257 151h56l-7 24h-43Z" fill="#a5bca1" stroke="#6e8d75" stroke-width="2"/><path d="M261 154h48" stroke="#82acb4" stroke-width="6"/><path d="M282 147v-18h12v8" fill="none" stroke="#6e8d75" stroke-width="3"/><g stroke="#8baa69" stroke-width="2" fill="none"><path d="m94 190 3-10 4 8 5-12m117 19 2-13 4 9 6-11M15 193l3-11 5 8 5-14"/></g><text x="15" y="202" fill="#647951" font-family="Arial,sans-serif" font-size="7">REPRESENTACIÓN EDUCATIVA</text></svg>`;
}

function factorsPage() {
  const factor = FACTORS.find(f => f.id === activeFactor) || FACTORS[0];
  const questions = groupQuestions(factor.id);
  return `<section class="container page">${breadcrumb('Factores')}${intro('Cinco grupos para explorar', 'Lo que rodea a tu toro también cuenta', 'Selecciona un grupo y descubre qué observar en tu finca. Puedes aprender a tu ritmo, sin completar el formulario.')}
    <div class="factor-layout"><nav class="factor-nav" aria-label="Grupos de factores">${FACTORS.map(f => `<button class="factor-tab" data-action="factor" data-value="${f.id}" aria-pressed="${f.id === factor.id}">${icon(f.icon)}<span>${esc(f.title)}</span><span class="tab-arrow" aria-hidden="true">→</span></button>`).join('')}</nav>
      <article class="factor-content"><div class="factor-content-top"><div><p class="eyebrow">${String(FACTORS.indexOf(factor) + 1).padStart(2, '0')} · ${esc(factor.short)}</p><h2>${esc(factor.title)}</h2><p>${esc(factor.description)}</p></div>${farmIllustration(factor)}</div>
      <div class="factor-body"><h3>Qué puedes observar</h3><ul class="factor-points">${questions.map(q => `<li>${icon('check')}<span>${esc(q.title)}</span></li>`).join('')}</ul>
        <details class="technical"><summary>¿Quieres saber más? · Nivel técnico</summary><p>${esc(factor.technical)}</p>${sourceLinks(factor.sourceIds)}</details>
        <div class="factor-cta"><p>Relaciona lo aprendido con las condiciones de tu propio reproductor.</p><button class="button" data-action="start-group" data-value="${factor.id}">Explorar este grupo ${icon('arrow')}</button></div>
      </div></article></div><p class="educational-note"><strong>Cada reproductor es diferente.</strong> La presencia de un factor no permite predecir por sí sola la calidad seminal de un toro. Las condiciones se interpretan dentro de una evaluación integral.</p>
  </section>`;
}

function casePage() {
  const factor = FACTORS[state.step];
  const questions = groupQuestions(factor.id);
  return `<section class="container page">${breadcrumb('Mi caso')}${intro('Tu toro, tu finca', 'Exploremos las condiciones de tu reproductor', 'Responde según lo que conoces. Si no tienes un dato, elige «No sé». Cada condición se interpretará por separado.')}
    <div class="case-layout"><aside><ol class="step-list" aria-label="Pasos del formulario">${FACTORS.map((f, i) => `<li class="${i === state.step ? 'current' : i < state.step ? 'done' : ''}"${i === state.step ? ' aria-current="step"' : ''}><span class="step-number">${i < state.step ? icon('check', true) : i + 1}</span><div><strong>${esc(f.title)}</strong><small>${groupQuestions(f.id).length} preguntas</small></div></li>`).join('')}</ol><div class="case-aside-note">${icon('shield')}<h3>Una mirada por condición</h3><p>La herramienta reconoce puntos de atención. No calcula la calidad del semen ni determina si el toro es fértil o infértil.</p></div></aside>
    <div><form class="case-form" id="case-form" novalidate><div class="case-form-top"><div><span class="icon-box">${icon(factor.icon)}</span><div><h2>${esc(factor.title)}</h2><p>${esc(factor.short)}</p></div></div><span class="step-counter">Paso ${state.step + 1} de ${FACTORS.length}</span></div>
      <div class="progress" role="progressbar" aria-label="Avance por grupos" aria-valuenow="${state.step + 1}" aria-valuemin="1" aria-valuemax="${FACTORS.length}"><span style="width:${(state.step + 1) * 20}%"></span></div>
      <p class="case-description">${state.step === 0 ? 'Comencemos por el lugar donde permanece habitualmente. Selecciona una respuesta por pregunta.' : 'Selecciona una respuesta por pregunta. Puedes volver al grupo anterior sin perder lo que has respondido.'}</p><div class="form-error" id="form-error" role="alert"></div>
      ${questions.map(q => `<fieldset class="question"><legend><span class="question-number">${questionNumbers.get(q.id)}.</span>${esc(q.title)}</legend><p class="question-hint" id="hint-${q.id}">${esc(q.hint)}</p><div class="options">${q.options.map(o => `<label class="radio-option"><input type="radio" name="${q.id}" value="${o.value}" aria-describedby="hint-${q.id}" required ${state.answers[q.id] === o.value ? 'checked' : ''}><span>${esc(o.label)}</span></label>`).join('')}</div></fieldset>`).join('')}
      <div class="form-actions">${state.step > 0 ? `<button type="button" class="button button-outline" data-action="previous">${icon('back')} Anterior</button>` : '<span>13 preguntas · 5 grupos</span>'}<button class="button" type="submit">${state.step === FACTORS.length - 1 ? 'Ver mis puntos' : 'Siguiente grupo'} ${icon('arrow')}</button></div>
    </form><p class="privacy-note">${icon('lock')} Tus respuestas se conservan solo en esta pestaña durante la visita. No se envían ni se piden datos personales.</p></div></div>
  </section>`;
}

function resultsPage() {
  if (!answeredCount()) return `<section class="container page">${breadcrumb('Mis puntos')}${intro('Relaciona lo aprendido', 'Tus puntos de atención', 'Aquí podrás consultar las condiciones de tu caso, una por una.')}<div class="empty-state"><span class="icon-box">${icon('clipboard')}</span><h2>Comienza por conocer tu caso</h2><p>Responde sobre el ambiente, la nutrición, la salud y el manejo de tu toro. Después podrás explorar cada condición y su explicación.</p><a class="button" href="#mi-caso">Explorar mi caso ${icon('arrow')}</a><a class="text-link" href="#factores">Prefiero conocer primero los factores ${icon('arrow', true)}</a></div></section>`;
  const results = evaluateAnswers(state.answers);
  return `<section class="container page">${breadcrumb('Mis puntos')}<div class="page-toolbar">${intro('Una condición a la vez', 'Mis puntos de atención', 'Selecciona una condición para leer su explicación y qué puedes revisar. Estos resultados no califican al toro ni evalúan directamente su semen.')}<a class="button button-outline" href="#mi-caso">Modificar respuestas ${icon('arrow')}</a></div>
    ${reviewNotice()}${!state.completed ? `<p class="educational-note" style="padding-top:0">Has respondido ${answeredCount()} de ${QUESTIONS.length} preguntas. Las condiciones sin respuesta aparecen como información insuficiente. <a class="text-link" href="#mi-caso">Continuar el caso</a>.</p>` : ''}
    <div class="result-legend" aria-label="Leyenda de los estados">${Object.keys(statusLabels).map(statusLabel).join('')}</div>
    ${FACTORS.map(factor => `<section class="result-group"><h2>${icon(factor.icon)}${esc(factor.title)}</h2>${results.filter(r => r.question.group === factor.id).map(({ question: q, answer, status }) => `<details class="result-card"><summary><div class="result-title"><strong>${esc(q.title)}</strong><p class="answer-line">Tu respuesta: ${esc(answer?.label || 'Sin responder')}</p></div>${statusLabel(status)}</summary><div class="result-detail"><h3>Qué significa esta condición</h3><p>${esc(answer?.explanation || (status === 'unknown' ? 'No hay información suficiente para interpretar esta condición. La ausencia de una respuesta no se considera una condición favorable.' : q.explanation))}</p><h3>Qué puedes revisar</h3><p>${esc(answer?.recommendation || (status === 'unknown' ? 'Puedes modificar la respuesta cuando dispongas de información. No es necesario adivinar; consulta tus registros o conversa con el profesional.' : q.recommendation))}</p>${sourceLinks(q.sourceIds)}</div></details>`).join('')}</section>`).join('')}
    <div class="result-footer"><p>Encontrar un punto de atención no demuestra una alteración seminal. Para conocer el estado del reproductor, se necesita una evaluación andrológica profesional.</p><a class="button" href="#evaluacion">¿Cómo se evalúa? ${icon('arrow')}</a></div>
  </section>`;
}

function sperm(x, y, angle = 0, variation = '') {
  return `<g transform="translate(${x} ${y}) rotate(${angle})"><g class="swimmer"><ellipse cx="0" cy="0" rx="${variation === 'head' ? 5 : 3.5}" ry="${variation === 'head' ? 2 : 2.4}" fill="#416a58"/><path d="M3 0h5" stroke="#658f73" stroke-width="2"/><path class="tail" d="${variation === 'tail' ? 'M8 0c8-12 15 14 7 16s-9-12 8-14' : 'M8 0c8-8 12 8 21 0s12-4 17-1'}" stroke="#6e9379" fill="none" stroke-width="1.1" stroke-linecap="round"/></g></g>`;
}
function semenVisual(kind) {
  const cells = kind === 'motility' ? [[37,40,12],[121,52,-10],[217,32,10],[54,104,-9],[163,100,14],[260,116,-8],[24,163,10],[128,178,-10],[242,175,15]] : kind === 'morphology' ? [[50,61,0],[180,61,0],[50,143,0],[180,143,0]] : Array.from({ length: density === 'less' ? 6 : 18 }, (_, i) => [26 + (i % 5) * 57 + (Math.floor(i / 5) % 2) * 8, 34 + Math.floor(i / 5) * 43, (i % 3 - 1) * 14]);
  return `<div class="concept-visual ${paused ? 'paused' : ''}"><svg viewBox="0 0 330 219" class="${kind === 'motility' ? `moving ${movement === 'reduced' ? 'reduced' : ''}` : ''}" role="img" aria-label="${kind === 'motility' ? 'Representación esquemática del movimiento de los espermatozoides' : kind === 'morphology' ? 'Comparación esquemática de formas de cabeza y cola' : 'Representación comparativa de menor o mayor cantidad de espermatozoides en igual volumen'}"><defs><pattern id="grid-${kind}" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0v22" fill="none" stroke="#d9e4d0" stroke-width=".5"/></pattern></defs><rect width="330" height="219" fill="url(#grid-${kind})"/>${cells.map(([x,y,a],i) => sperm(x,y,a,kind === 'morphology' ? (i === 1 ? 'head' : i === 3 ? 'tail' : '') : '')).join('')}${kind === 'morphology' ? '<path d="M164 28v150M25 108h280" stroke="#d0deca" stroke-dasharray="4 4"/><text x="40" y="93" font-size="8" fill="#5f7556">Esquema de referencia</text><text x="188" y="93" font-size="8" fill="#5f7556">Cabeza diferente</text><text x="40" y="176" font-size="8" fill="#5f7556">Esquema de referencia</text><text x="188" y="176" font-size="8" fill="#5f7556">Cola diferente</text>' : ''}</svg><span class="concept-label">REPRESENTACIÓN EDUCATIVA · SIN ESCALA</span></div>`;
}
function evaluationPage() {
  return `<section class="container page">${breadcrumb('Evaluación seminal')}${intro('Del factor a la evaluación', '¿Cómo se conoce la calidad del semen?', 'Observar al toro y su ambiente aporta información. Para valorar el semen, un profesional analiza la muestra y la interpreta junto con el examen del animal.')}
    <div class="concept-grid"><article class="concept-card">${semenVisual('motility')}<div class="concept-body"><div class="concept-number">01 · EL MOVIMIENTO</div><h2>Motilidad</h2><p>Describe cómo se mueven los espermatozoides. Se observa su movimiento y, entre otras características, si avanzan de forma progresiva.</p><div class="concept-control" role="group" aria-label="Comparación de movimiento"><button id="motion-progressive" class="chip" data-action="movement" data-value="progressive" aria-pressed="${movement === 'progressive'}">Movimiento progresivo</button><button id="motion-reduced" class="chip" data-action="movement" data-value="reduced" aria-pressed="${movement === 'reduced'}">Movimiento reducido</button><button id="motion-pause" class="chip" data-action="pause">${paused ? 'Reanudar' : 'Pausar'} animación</button></div><p class="concept-note">Comparación ilustrativa. No reproduce una muestra real ni permite decidir si un semen es apto.</p></div></article>
    <article class="concept-card">${semenVisual('morphology')}<div class="concept-body"><div class="concept-number">02 · LA ESTRUCTURA</div><h2>Morfología</h2><p>Observa la estructura de los espermatozoides, incluidas la cabeza, la pieza intermedia y la cola, para identificar y describir sus características.</p><details class="technical"><summary>¿Todas las diferencias significan lo mismo?</summary><p>No. La interpretación depende del tipo y la proporción de las formas observadas, la muestra y el método de evaluación. Los dibujos solo ayudan a reconocer partes y diferencias.</p></details><p class="concept-note">Los dibujos no son una guía para clasificar muestras ni representan proporciones reales.</p></div></article>
    <article class="concept-card">${semenVisual('concentration')}<div class="concept-body"><div class="concept-number">03 · LA CANTIDAD POR VOLUMEN</div><h2>Concentración</h2><p>Es la cantidad de espermatozoides presente en un volumen de semen. Para medirla se utilizan métodos y equipos adecuados.</p><div class="concept-control" role="group" aria-label="Comparación de cantidad en igual volumen"><button id="density-less" class="chip" data-action="density" data-value="less" aria-pressed="${density === 'less'}">Menor cantidad</button><button id="density-more" class="chip" data-action="density" data-value="more" aria-pressed="${density === 'more'}">Mayor cantidad</button></div><p class="concept-note">Se ilustra igual volumen con cantidades distintas. Más células no significa automáticamente mejor calidad.</p></div></article></div>
    ${sourceLinks(['valverde2021','araya2024','msu2019'])}
    <div class="evaluation-bottom"><div><h2>¿Quieres saber más?</h2>
      <details class="technical"><summary>CASA y cinemática espermática</summary><p>Los sistemas de análisis seminal asistido por computadora (CASA) siguen trayectorias y permiten medir características como velocidades y linealidad del movimiento. Las mediciones dependen del equipo, su configuración y la preparación de la muestra. Su interpretación requiere criterios profesionales.</p>${sourceLinks(['valverde2021','araya2024'])}</details>
      <details class="technical"><summary>Espermatogénesis y termorregulación</summary><p>La espermatogénesis es el proceso de formación de los espermatozoides. La regulación de la temperatura testicular es parte de ese proceso. Una exposición al calor puede relacionarse con cambios que se manifiestan después y la respuesta varía entre individuos.</p>${sourceLinks(['netherton2022','morrell2020'])}</details>
      <details class="technical"><summary>Las diferencias entre reproductores</summary><p>No todos los toros responden de igual manera a condiciones parecidas. Ni la raza, ni la apariencia, ni un único dato permiten trasladar el resultado de un estudio a un animal concreto.</p>${sourceLinks(['netherton2022','sevilla2025'])}</details>
      <details class="technical"><summary>Un ejemplo en toros Brahman</summary><p>Araya-Zúñiga y colaboradores estudiaron semen fresco antes, durante y después del periodo de monta con sistemas CASA. Observaron variaciones en características cinemáticas y morfométricas. El estudio ayuda a comprender la variabilidad; no demuestra que toda actividad de monta empeore el semen.</p>${sourceLinks(['araya2024'])}</details>
    </div><aside class="professional-card">${icon('shield')}<h2>La muestra es parte de una evaluación integral</h2><p>La evaluación andrológica considera los antecedentes, el estado físico y reproductivo del animal y, cuando corresponde, las características seminales.</p><p>Un resultado describe un momento. Ante dudas o problemas reproductivos, consulta a un profesional y comparte los registros de tu finca.</p><a class="text-link" href="#mi-caso">Organizar mis puntos de atención ${icon('arrow',true)}</a></aside></div>
  </section>`;
}

function resourcesPage() {
  return `<section class="container page">${breadcrumb('Recursos')}${intro('Para seguir aprendiendo', 'Ciencia que puedes consultar', 'Las publicaciones ayudan a comprender los factores y la evaluación. Aquí encuentras la bibliografía del proyecto y guías universitarias complementarias.')}
    <div class="resource-layout"><div>${SOURCES.map(source => `<article class="source-card"><span class="icon-box">${icon('file')}</span><div><div class="source-year">${esc(source.label)}</div><h2><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a></h2><p>${esc(source.summary)}</p><a class="text-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Consultar publicación ${icon('external',true)}</a></div></article>`).join('')}</div>
    <aside class="resource-aside"><div class="project-card"><p class="eyebrow">Acerca del proyecto</p><h2>Conocer para cuidar</h2><p>Una herramienta de divulgación científica creativa en andrología para acercar el conocimiento a productores con distintos niveles de formación.</p><p><strong>Autores</strong><br>Dikson Aarón Guzmán Sibaja<br>José Ángel Aguirre Reyes</p><p>Instituto Tecnológico de Costa Rica<br>Campus Local San Carlos</p><hr><p><strong>Primera versión de revisión</strong><br>3 de noviembre de 2026. El cuestionario y sus colores son una propuesta pendiente de revisión docente.</p><a class="text-link" href="#criterios">Revisar la tabla de criterios ${icon('arrow',true)}</a><hr><p>Fotografía de contexto generada con IA. Ilustraciones y animaciones esquemáticas para explicar conceptos; no muestran resultados de laboratorio.</p><p>Las respuestas de «Mi caso» se conservan solo durante esta visita en la pestaña. No se envían a un servidor.</p></div></aside></div>
  </section>`;
}

function criteriaPage() {
  return `<section class="container page">${breadcrumb('Criterios propuestos')}${intro('Material para el equipo y el docente', 'Criterios propuestos para revisión', 'Esta tabla permite revisar cómo se relaciona cada respuesta con una indicación educativa. Las asignaciones de colores son decisiones editoriales; no han sido validadas como instrumento clínico.')}${reviewNotice()}
    <p class="educational-note" style="padding-top:0"><strong>Reglas de interpretación:</strong> no se suman ni se promedian estados. Edad y raza no generan calificaciones. «No sé» y las respuestas ausentes indican información insuficiente. El marco de «últimos dos meses» ayuda a recordar observaciones; no es un umbral diagnóstico ni un periodo universal de recuperación.</p>
    ${FACTORS.map(f => `<h2 class="criteria-heading">${esc(f.title)}</h2>${groupQuestions(f.id).map(q => `<div class="criteria-table-wrap"><table class="criteria-table"><caption>${questionNumbers.get(q.id)}. ${esc(q.title)}</caption><thead><tr><th scope="col">Respuesta</th><th scope="col">Indicación propuesta</th><th scope="col">Explicación</th><th scope="col">Recomendación</th><th scope="col">Fuentes del contexto</th></tr></thead><tbody>${q.options.map(o => `<tr><td>${esc(o.label)}</td><td>${statusLabel(o.status)}</td><td>${esc(o.explanation || q.explanation)}</td><td>${esc(o.recommendation || q.recommendation)}</td><td>${q.sourceIds.map(id => sourceById.get(id)).filter(Boolean).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>`).join('<br>')}</td></tr>`).join('')}</tbody></table></div>`).join('')}`).join('')}
    <a class="button button-outline" href="#recursos">${icon('back')} Volver a las fuentes</a>
  </section>`;
}

const pages = { inicio: homePage, factores: factorsPage, 'mi-caso': casePage, resultados: resultsPage, evaluacion: evaluationPage, recursos: resourcesPage, criterios: criteriaPage };
const pageTitles = { inicio: 'Inicio', factores: 'Factores', 'mi-caso': 'Mi caso', resultados: 'Mis puntos de atención', evaluacion: 'Evaluación seminal', recursos: 'Recursos', criterios: 'Criterios propuestos para revisión' };
function routeInfo() {
  const [route, value] = location.hash.replace(/^#/, '').split('/');
  return { route: Object.hasOwn(pages, route) ? route : 'inicio', value };
}
function renderPage(focus = true) {
  const { route, value } = routeInfo();
  if (route === 'factores' && FACTORS.some(f => f.id === value)) activeFactor = value;
  main.innerHTML = pages[route]();
  document.title = `${pageTitles[route]} · Calidad del semen`;
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === route || (route === 'criterios' && link.dataset.nav === 'recursos')) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  nav.classList.remove('is-open'); menu.setAttribute('aria-expanded','false');
  if (focus) { main.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' }); }
}
function refreshKeepingFocus() {
  const activeId = document.activeElement?.id;
  renderPage(false);
  if (activeId) document.getElementById(activeId)?.focus({preventScroll:true});
}
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded',String(isOpen));nav.classList.toggle('is-open',isOpen);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) { nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.focus(); }
});
document.querySelector('.skip-link').addEventListener('click', event => { event.preventDefault(); main.focus(); main.scrollIntoView(); });
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');}
});
main.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const { action, value } = button.dataset;
  if (action === 'factor') {
    activeFactor = value;
    history.replaceState(null, '', `#factores/${value}`);
    renderPage(false);
    main.querySelector(`[data-action="factor"][data-value="${value}"]`)?.focus({preventScroll:true});
  } else if (action === 'start-group') {
    state.step = Math.max(0, FACTORS.findIndex(f => f.id === value));saveState();
    location.hash = 'mi-caso';
  } else if (action === 'previous') {
    state.step = Math.max(0,state.step - 1);saveState();renderPage();
  } else if (action === 'movement') { movement = value; refreshKeepingFocus(); }
  else if (action === 'density') { density = value;refreshKeepingFocus(); }
  else if (action === 'pause') { paused = !paused;refreshKeepingFocus(); }
});
main.addEventListener('change', event => {
  const input = event.target;
  if (!input.matches('#case-form input[type=radio]')) return;
  const q = QUESTIONS.find(q => q.id === input.name);
  if (!q?.options.some(o => o.value === input.value)) return;
  state.answers[q.id] = input.value;
  if (Object.keys(state.answers).length === QUESTIONS.length) state.completed = true;
  saveState();
  const error = document.querySelector('#form-error');if(error)error.textContent = '';
});
main.addEventListener('submit', event => {
  if (event.target.id !== 'case-form') return;
  event.preventDefault();
  const missing = groupQuestions(FACTORS[state.step].id).find(q => !state.answers[q.id]);
  if (missing) {
    document.querySelector('#form-error').textContent = 'Selecciona una respuesta en cada pregunta. Puedes elegir «No sé» cuando no tengas información.';
    document.querySelector(`input[name="${missing.id}"]`)?.focus();return;
  }
  if (state.step < FACTORS.length - 1) {state.step++;saveState();renderPage();}
  else {state.completed = answeredCount() === QUESTIONS.length;saveState();location.hash = 'resultados';}
});
window.addEventListener('hashchange', () => renderPage());
renderPage(false);
