// Fotografías de contexto generadas con IA. Los puntos son educativos, no diagnósticos.
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

export const FACTOR_SCENES = {
  ambiente: {
    title: 'Un día en el potrero',
    alt: 'Toro en un potrero tropical bajo un árbol de sombra, con un bebedero en primer plano. Fotografía de contexto generada con IA.',
    topics: [
      { id:'sombra', title:'Sombra', x:15, y:35, description:'Observa dónde puede refugiarse el toro durante las horas de mayor calor.', observation:'¿La sombra está disponible cuando la necesita?' },
      { id:'agua', title:'Agua', x:86, y:68, description:'Mira el bebedero, su suministro y el camino que utiliza el toro para llegar hasta él.', observation:'¿Puede alcanzar agua limpia durante todo el día?' },
      { id:'calor', title:'Calor', x:83, y:18, description:'Recuerda si ha pasado varios días de mucho calor sin refugio. Cada reproductor puede responder de manera diferente.', observation:'¿Qué condiciones de calor has observado en la finca?' }
    ]
  },
  nutricion: {
    title: 'Lo que come y lo que observas',
    alt: 'Toro junto a un comedero con forraje y una reserva de alimento en una finca tropical. Fotografía de contexto generada con IA.',
    topics: [
      { id:'alimento', title:'Alimento', x:16, y:61, description:'Revisa la disponibilidad de pasto, forraje y alimento a lo largo del periodo.', observation:'¿Ha habido interrupciones repetidas del alimento disponible?' },
      { id:'condicion', title:'Condición corporal', x:50, y:49, description:'Compara lo que observas hoy con los registros del toro. Su apariencia no permite conocer la calidad del semen.', observation:'¿Has observado pérdida marcada de condición o exceso de grasa?' },
      { id:'dieta', title:'Cambios de dieta', x:89, y:47, description:'Ubica los cambios de pasto, alimento o suplementación y cómo se planificó la transición.', observation:'¿Hubo cambios importantes sin una transición planificada?' }
    ]
  },
  salud: {
    title: 'Su historia sanitaria también cuenta',
    alt: 'Veterinaria con un registro observa a un toro desde fuera del cercado de un corral. Fotografía de contexto generada con IA.',
    topics: [
      { id:'fiebre', title:'Antecedentes sanitarios', x:89, y:40, description:'Consulta las fechas y los registros de fiebre o enfermedad atendida por un profesional.', observation:'¿Hay antecedentes que deban compartirse durante la evaluación?' },
      { id:'lesiones', title:'Movimiento y lesiones', x:31, y:75, description:'Observa cómo se mueve desde una distancia segura. La imagen solo sitúa la observación; no demuestra el estado de salud del toro.', observation:'¿Has observado cojera, dolor o una lesión visible?' }
    ]
  },
  reproductor: {
    title: 'Conoce a este reproductor',
    alt: 'Toro en un corral con un cuaderno de registros sostenido en primer plano, fuera de la cerca. Fotografía de contexto generada con IA.',
    topics: [
      { id:'edad', title:'Edad e historia', x:22, y:28, description:'La edad ayuda a describir al animal. Un rango de edad no determina madurez, aptitud ni fertilidad.', observation:'¿Conoces su edad aproximada o su fecha de nacimiento?' },
      { id:'evaluacion', title:'Evaluación individual', x:75, y:59, description:'El informe profesional aporta información sobre este toro en el momento de la evaluación.', observation:'¿Cuentas con un informe para el periodo actual o próximo?' },
      { id:'seguimiento', title:'Seguimiento', x:87, y:78, description:'Reúne las indicaciones anteriores del profesional y revisa si alguna sigue pendiente.', observation:'¿Se indicó repetir una prueba o revisar un hallazgo?' }
    ]
  },
  manejo: {
    title: 'Una mirada al periodo de monta',
    alt: 'Toro y vacas en un potrero cercado, con un cuaderno de registros sobre una cerca en primer plano. Fotografía de contexto generada con IA.',
    topics: [
      { id:'periodo', title:'Periodo reproductivo', x:15, y:25, description:'Ubica si está antes, durante o después de la monta, o si la finca no tiene un periodo definido.', observation:'Esta etapa se registra como contexto y no califica al toro.' },
      { id:'cantidad-vacas', title:'Demanda de monta', x:28, y:45, description:'Compara la cantidad de vacas asignadas al toro antes y ahora, y revisa si se valoró su capacidad.', observation:'¿Aumentó la cantidad de vacas sin evaluar si el toro puede cubrirlas?' },
      { id:'monta', title:'Observación del servicio', x:70, y:38, description:'Observa el servicio desde una distancia segura. Completar una monta no demuestra la calidad del semen.', observation:'¿Has observado dificultades repetidas para completar el servicio?' },
      { id:'hato', title:'Registros del hato', x:78, y:74, description:'Reúne los registros de servicios, celos y preñez. Una preocupación del hato puede tener distintas causas.', observation:'¿Hay resultados que convenga revisar con el profesional?' }
    ]
  }
};

export function sceneTopic(group, id) {
  const scene = FACTOR_SCENES[group];
  return scene?.topics.find(t => t.id === id) || scene?.topics[0];
}

// Portadas de identidad visual. Las escenas interactivas conservan sus fotografías
// de contexto para que los puntos sigan correspondiendo con lo que se observa.
const COVER_ALTS = {
  ambiente: 'Árbol de sombra y agua en un potrero tropical. Portada generada con IA.',
  nutricion: 'Manos con forraje fresco junto a un comedero. Portada generada con IA.',
  salud: 'Guantes y estetoscopio de atención veterinaria. Portada generada con IA.',
  reproductor: 'Retrato cercano de un toro de pelaje gris. Portada generada con IA.',
  manejo: 'Grupo de bovinos en potreros organizados por cercas. Portada generada con IA.'
};

export function factorCover(group, {className='', sizes='64px', decorative=false} = {}) {
  if (!Object.hasOwn(COVER_ALTS,group)) return '';
  return `<img class="${esc(className)}" src="./assets/portadas/${group}.webp" srcset="./assets/portadas/${group}-480.webp 480w, ./assets/portadas/${group}.webp 960w" sizes="${esc(sizes)}" alt="${decorative ? '' : esc(COVER_ALTS[group])}" width="960" height="960" loading="lazy" decoding="async">`;
}

export function factorPhoto(group, {className='', sizes='(max-width: 700px) 90vw, 600px', loading='lazy', decorative=false} = {}) {
  const scene = FACTOR_SCENES[group];
  if (!scene) return '';
  return `<img class="${esc(className)}" src="./assets/premium/${group}.webp" srcset="./assets/premium/${group}-480.webp 480w, ./assets/premium/${group}-960.webp 960w, ./assets/premium/${group}.webp 1672w" sizes="${esc(sizes)}" alt="${decorative ? '' : esc(scene.alt)}" width="1672" height="941" loading="${esc(loading)}" decoding="async">`;
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
  return `<figure class="interactive-scene" data-interactive-scene="${group}">
    <figcaption class="scene-heading"><h3>${esc(scene.title)}</h3><p>Selecciona un punto y descubre qué observar.</p></figcaption>
    <div class="scene-interaction">
      <div class="scene-visual">
        <div class="scene-stage">${factorPhoto(group,{className:"scene-photo",sizes:"(max-width: 700px) 90vw, 55vw",loading:"eager"})}${scene.topics.map((t,i) => `<button class="scene-marker" style="left:${t.x}%;top:${t.y}%" data-action="scene-topic" data-value="${t.id}" data-group="${group}" data-caption="${esc(t.title)}" aria-label="${esc(t.title)}, punto ${i+1}" aria-pressed="${selected.id===t.id}" aria-controls="scene-detail"><span>${i+1}</span></button>`).join('')}<span class="scene-caption">Imagen de contexto generada con IA</span></div>
        <div class="scene-topic-list" role="group" aria-label="Temas de la escena">${scene.topics.map((t,i) => `<button class="scene-topic-button" data-action="scene-topic" data-value="${t.id}" data-group="${group}" aria-pressed="${selected.id===t.id}" aria-controls="scene-detail"><span>${i+1}</span>${esc(t.title)}</button>`).join('')}</div>
      </div>
      <div class="scene-detail" id="scene-detail" aria-live="polite" aria-atomic="true">${renderSceneDetail(group,selected.id)}</div>
    </div>
  </figure>`;
}
