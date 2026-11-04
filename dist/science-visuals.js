export const CELL_PARTS = {
  head: { label: 'Cabeza', detail: 'Contiene el material genético. Su contorno se observa al describir la morfología.' },
  midpiece: { label: 'Pieza intermedia', detail: 'Une la cabeza con la cola y contiene estructuras relacionadas con la energía para el movimiento.' },
  tail: { label: 'Cola', detail: 'Su ondulación impulsa a la célula; aquí se exagera para poder observarla.' }
};
export const MORPH_EXAMPLES = {
  reference: { label: 'Forma de referencia', detail: 'Esquema de una cabeza ovalada, pieza intermedia y cola extendida.' },
  pyriform: { label: 'Cabeza piriforme', detail: 'Ejemplo ilustrativo de una cabeza con contorno más estrecho hacia la unión con la pieza intermedia.' },
  droplet: { label: 'Gota citoplasmática proximal', detail: 'Ejemplo ilustrativo de una gota citoplasmática cercana a la unión entre cabeza y pieza intermedia.' },
  coiled: { label: 'Cola enrollada', detail: 'Ejemplo ilustrativo de una cola que se curva sobre sí misma.' }
};
export const MOTION_MODES = {
  progressive: { label: 'Avance progresivo', detail: 'Las cabezas avanzan en la dirección hacia la que apuntan mientras las colas ondulan.' },
  local: { label: 'Movimiento sin avance', detail: 'Las células se mueven y las colas ondulan, pero permanecen cerca del mismo lugar.' },
  still: { label: 'Inmovilidad', detail: 'Se congelan el desplazamiento y la ondulación de las colas en esta representación.' }
};
export const CONCENTRATION_COUNTS = [12, 24, 48];
export function createExplorerState(reducedMotion = false) {
  return { tab: 'motility', movement: 'progressive', speed: 1, trails: false, paused: reducedMotion, part: 'head', example: 'reference', density: 2, pose: null };
}
const frac = n => n - Math.floor(n);
export function createMotileCells(count = 24) {
  return Array.from({ length: count }, (_, i) => {
    const x = .08 + .84 * frac((i + 1) * .61803398875);
    const y = .09 + .82 * frac((i + 1) * .7548776662);
    return { x, y, anchorX: x, anchorY: y, heading: -Math.PI * .12 + (frac(i * .4142) - .5) * .9, seed: i * 1.79, speed: .05 + frac(i * .367) * .035, trail: [] };
  });
}
export function advanceMotileCells(cells, mode, seconds, time) {
  if (mode === 'still') return;
  for (const cell of cells) {
    if (mode === 'progressive') {
      cell.heading += Math.sin(time * .7 + cell.seed) * seconds * .13;
      cell.x += Math.cos(cell.heading) * cell.speed * seconds;
      cell.y += Math.sin(cell.heading) * cell.speed * seconds;
      if (cell.x > 1.08) cell.x = -.08;
      if (cell.x < -.08) cell.x = 1.08;
      if (cell.y > 1.08) cell.y = -.08;
      if (cell.y < -.08) cell.y = 1.08;
    } else {
      cell.x = cell.anchorX + Math.sin(time * 2 + cell.seed) * .009;
      cell.y = cell.anchorY + Math.cos(time * 1.7 + cell.seed) * .009;
      cell.heading += Math.sin(time * 1.1 + cell.seed) * seconds * .5;
    }
    cell.trail.push([cell.x, cell.y]);
    if (cell.trail.length > 42) cell.trail.shift();
  }
}
const chip = (action, value, label, active) => '<button type="button" class="science-chip" data-sci-action="' + action + '" data-value="' + value + '" aria-pressed="' + active + '">' + label + '</button>';
const cite = '<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7468166/" target="_blank" rel="noopener noreferrer">Nongbua et al., 2020 ↗</a>';
function controls(state) {
  if (state.tab === 'motility') return '<div class="science-control-group" role="group" aria-label="Tipo de movimiento"><span>Movimiento</span><div>' + Object.entries(MOTION_MODES).map(([id, item]) => chip('movement', id, item.label, state.movement === id)).join('') + '</div></div><div class="science-control-group" role="group" aria-label="Velocidad de reproducción"><span>Velocidad</span><div>' + chip('speed', '0.5', '0,5×', state.speed === .5) + chip('speed', '1', '1×', state.speed === 1) + chip('trails', '', 'Mostrar trayectorias', state.trails) + '</div></div><button type="button" class="science-play" data-sci-action="pause">' + (state.paused ? '▶ Reproducir' : 'Ⅱ Pausar') + '</button>';
  if (state.tab === 'morphology') return '<div class="science-control-group" role="group" aria-label="Parte para enfocar"><span>Enfocar</span><div>' + Object.entries(CELL_PARTS).map(([id, item]) => chip('part', id, item.label, state.part === id)).join('') + '</div></div><div class="science-control-group" role="group" aria-label="Forma para observar"><span>Forma ilustrativa</span><div>' + Object.entries(MORPH_EXAMPLES).map(([id, item]) => chip('example', id, item.label, state.example === id)).join('') + '</div></div><div class="science-camera" role="group" aria-label="Cámara 3D"><button type="button" data-sci-action="zoom-in" aria-label="Acercar">＋</button><button type="button" data-sci-action="zoom-out" aria-label="Alejar">−</button><button type="button" data-sci-action="reset">Restablecer vista</button><button type="button" class="science-play" data-sci-action="pause">' + (state.paused ? '▶ Reproducir' : 'Ⅱ Pausar') + '</button></div>';
  return '<label class="science-slider-label" for="science-density">Cantidad ilustrativa <strong data-sci-count>' + CONCENTRATION_COUNTS[state.density - 1] + ' células</strong></label><input id="science-density" type="range" min="1" max="3" step="1" value="' + state.density + '" aria-valuetext="' + CONCENTRATION_COUNTS[state.density - 1] + ' células ilustrativas"><div class="science-range-labels"><span>12</span><span>24</span><span>48</span></div>';
}
function fallbackSvg(state) {
  const pear = state.example === 'pyriform';
  const drop = state.example === 'droplet';
  const coil = state.example === 'coiled';
  return '<svg viewBox="0 0 700 360" role="img" aria-label="Esquema estático de espermatozoide: ' + MORPH_EXAMPLES[state.example].label + '. Parte enfocada: ' + CELL_PARTS[state.part].label + '" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sci-cell"><stop stop-color="#ecedcd"/><stop offset="1" stop-color="#75c8a4"/></linearGradient></defs><rect width="700" height="360" fill="#102c2a"/><circle cx="350" cy="180" r="148" fill="#234840" opacity=".4"/><path d="' + (coil ? 'M270 180 C350 190 450 135 515 175 C585 215 505 300 470 247 C443 208 528 210 570 252' : 'M270 180 C360 200 448 153 560 177 C600 183 615 165 648 180') + '" fill="none" stroke="' + (state.part === 'tail' ? '#f3d585' : '#b5dcc3') + '" stroke-width="9" stroke-linecap="round"/><path d="M242 180 L320 186" stroke="' + (state.part === 'midpiece' ? '#f3d585' : '#8dc7a5') + '" stroke-width="19" stroke-linecap="round"/><path d="' + (pear ? 'M68 180 C68 116 182 100 247 163 C272 188 228 219 160 226 C103 228 68 210 68 180Z' : 'M68 180 C68 130 135 112 205 127 C269 141 279 179 243 208 C196 244 68 228 68 180Z') + '" fill="url(#sci-cell)" stroke="' + (state.part === 'head' ? '#f3d585' : '#9dd1a8') + '" stroke-width="5"/>' + (drop ? '<circle cx="285" cy="202" r="18" fill="#e8bd77"/>' : '') + '</svg>';
}
function detail(state) {
  if (state.tab === 'motility') return '<p class="science-kicker">01 · EL MOVIMIENTO</p><h3>Motilidad</h3><p>Observa cómo cambian el avance y la ondulación. El desplazamiento sigue la orientación de cada cabeza.</p><p class="science-live" aria-live="polite">' + MOTION_MODES[state.movement].detail + '</p><p class="science-fine">Las trayectorias son huellas del modelo; no corresponden a una medición CASA.</p>';
  if (state.tab === 'morphology') return '<p class="science-kicker">02 · LA ESTRUCTURA</p><h3>Morfología</h3><p>Gira y acerca el modelo para conocer sus partes. Cada forma es un ejemplo ilustrativo, no una clasificación de una muestra.</p><p class="science-live" aria-live="polite"><strong>' + MORPH_EXAMPLES[state.example].label + '.</strong> ' + MORPH_EXAMPLES[state.example].detail + ' <strong>' + CELL_PARTS[state.part].label + ':</strong> ' + CELL_PARTS[state.part].detail + '</p><p class="science-fine">Ejemplos documentados en investigación bovina. ' + cite + '</p>';
  return '<p class="science-kicker">03 · CANTIDAD POR VOLUMEN</p><h3>Concentración</h3><p>Compara dos campos del mismo tamaño que representan igual volumen. La referencia de la izquierda siempre contiene 24 células.</p><p class="science-live" aria-live="polite">A la derecha hay ' + CONCENTRATION_COUNTS[state.density - 1] + ' células ilustrativas. La cantidad se representa sin equivalencias con una muestra real.</p><p class="science-fine">Más células en este esquema no indica mejor calidad ni predice fertilidad.</p>';
}
function panel(state) {
  const visual = state.tab === 'morphology' ? '<div class="science-morph" id="science-morph"><div class="science-webgl"></div><div class="science-fallback">' + fallbackSvg(state) + '</div><span class="science-drag-hint">Arrastra para girar · pellizca o usa los botones para acercar</span></div>' : state.tab === 'motility' ? '<canvas class="science-canvas" id="science-motion" role="img" aria-label="Simulación microscópica de 24 espermatozoides; ' + MOTION_MODES[state.movement].label + '"></canvas>' : '<div class="science-fields"><div class="science-field"><span>Referencia · 24</span><canvas id="science-reference" role="img" aria-label="Campo de referencia con 24 células ilustrativas"></canvas></div><div class="science-field"><span>Comparación · <b data-sci-count>' + CONCENTRATION_COUNTS[state.density - 1] + '</b></span><canvas id="science-comparison" role="img" aria-label="Campo de comparación con ' + CONCENTRATION_COUNTS[state.density - 1] + ' células ilustrativas"></canvas></div></div>';
  return '<div class="science-workspace"><div class="science-left"><div class="science-stage">' + visual + '<span class="science-stamp">Simulación educativa · sin escala</span></div><div class="science-controls">' + controls(state) + '</div></div><aside class="science-info">' + detail(state) + '</aside></div>';
}
export function renderScientificExplorer(state = createExplorerState()) {
  const tabs = [['motility','Motilidad'],['morphology','Morfología'],['concentration','Concentración']];
  return '<section class="science-explorer" id="science-explorer" aria-labelledby="science-title"><div class="science-heading"><p class="eyebrow">Laboratorio interactivo</p><h2 id="science-title">Mira más de cerca</h2><p>Explora cómo se representan el movimiento, la forma y la cantidad de células.</p></div><div class="science-tabs" role="tablist" aria-label="Conceptos de evaluación seminal">' + tabs.map(([id,label],i) => '<button type="button" role="tab" id="science-tab-' + id + '" aria-controls="science-panel" aria-selected="' + (state.tab === id) + '" tabindex="' + (state.tab === id ? 0 : -1) + '" data-sci-tab="' + id + '"><span>0' + (i+1) + '</span>' + label + '</button>').join('') + '</div><div role="tabpanel" id="science-panel" aria-labelledby="science-tab-' + state.tab + '" tabindex="0">' + panel(state) + '</div></section>';
}
function setupCanvas(canvas) {
  const box = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
  const width = Math.max(1, box.width), height = Math.max(1, box.height);
  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) { canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr); }
  const ctx = canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0);
  return { ctx, width, height };
}
function drawBackdrop(ctx,w,h) {
  const gradient = ctx.createRadialGradient(w*.52,h*.48,4,w*.52,h*.48,w*.73);
  gradient.addColorStop(0,'#456962');gradient.addColorStop(.6,'#254a45');gradient.addColorStop(1,'#0d2627');
  ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
  for (let i=0;i<36;i++) {ctx.beginPath();ctx.arc(frac(i* .618)*w,frac(i*.754)*h, .5+(i%3)*.4,0,Math.PI*2);ctx.fillStyle='rgba(235,255,220,.13)';ctx.fill();}
}
function drawCell(ctx,x,y,scale,heading,phase,alpha=1) {
  ctx.save();ctx.translate(x,y);ctx.rotate(heading);ctx.scale(scale,scale);ctx.globalAlpha=alpha;
  ctx.lineCap='round';ctx.strokeStyle='#c6efcf';ctx.lineWidth=2.1;ctx.beginPath();ctx.moveTo(-7,0);
  for(let i=1;i<=18;i++){const d=i*3.2;ctx.lineTo(-7-d,Math.sin(i*.62+phase)*(.8+i*.19));}ctx.stroke();
  ctx.strokeStyle='#e4dca4';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-1,0);ctx.lineTo(-9,0);ctx.stroke();
  ctx.fillStyle='#e6f5dc';ctx.beginPath();ctx.ellipse(3,0,8.2,3.8,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(121,191,169,.65)';ctx.beginPath();ctx.ellipse(6,-.5,2.7,2.4,0,0,Math.PI*2);ctx.fill();ctx.restore();
}
function paintMotility(canvas,cells,state,time) {
  const {ctx,width:w,height:h}=setupCanvas(canvas);drawBackdrop(ctx,w,h);
  const scale=Math.max(.72,Math.min(1.15,w/630));
  if(state.trails){for(const cell of cells){ctx.beginPath();cell.trail.forEach(([x,y],i)=>i?ctx.lineTo(x*w,y*h):ctx.moveTo(x*w,y*h));ctx.strokeStyle='rgba(232,212,147,.38)';ctx.lineWidth=1;ctx.stroke();}}
  for(const cell of cells)drawCell(ctx,cell.x*w,cell.y*h,scale,cell.heading,state.movement==='still'?cell.seed:time*11+cell.seed);
  const vignette=ctx.createRadialGradient(w/2,h/2,w*.23,w/2,h/2,w*.75);vignette.addColorStop(0,'rgba(0,0,0,0)');vignette.addColorStop(1,'rgba(0,13,15,.48)');ctx.fillStyle=vignette;ctx.fillRect(0,0,w,h);
}
function paintConcentration(canvas,count) {
  const {ctx,width:w,height:h}=setupCanvas(canvas);drawBackdrop(ctx,w,h);
  const scale=Math.max(.48,Math.min(.85,w/360));
  for(let i=0;i<Math.ceil(count);i++){const x=.12+.76*frac((i+1)*.6180339),y=.13+.74*frac((i+1)*.7548777);drawCell(ctx,x*w,y*h,scale,-.28+frac(i*.317)*.7,i*.41,Math.min(1,count-i));}
}
export function mountScientificExplorer(root,state) {
  if(!root)return {dispose(){}};
  const tabPanel=root.querySelector('#science-panel');
  const cells=createMotileCells(24);
  let currentMode=state.movement, shownCount=CONCENTRATION_COUNTS[state.density-1], time=0, raf=0, last=0, visible=true, disposed=false, morph=null, loadId=0;
  const active=()=>!disposed&&visible&&!document.hidden&&!state.paused;
  function stop(){if(raf){cancelAnimationFrame(raf);raf=0;}last=0;morph?.setActive(false);}
  function loop(now){
    raf=0;if(!active())return;
    const delta=last?Math.min((now-last)/1000,.05)*state.speed:0;last=now;time+=delta;
    if(state.tab==='motility'){advanceMotileCells(cells,state.movement,delta,time);paintMotility(root.querySelector('#science-motion'),cells,state,time);}
    if(state.tab==='concentration'){const target=CONCENTRATION_COUNTS[state.density-1];shownCount+=(target-shownCount)*Math.min(1,delta*9);if(Math.abs(shownCount-target)<.02)shownCount=target;paintConcentration(root.querySelector('#science-reference'),24);paintConcentration(root.querySelector('#science-comparison'),shownCount);}
    if(state.tab==='motility'||(state.tab==='concentration'&&shownCount!==CONCENTRATION_COUNTS[state.density-1]))raf=requestAnimationFrame(loop);
  }
  function start(){if(!active())return;morph?.setActive(state.tab==='morphology');if(!raf&&(state.tab==='motility'||(state.tab==='concentration'&&shownCount!==CONCENTRATION_COUNTS[state.density-1])))raf=requestAnimationFrame(loop);}
  function repaint(){if(state.tab==='motility')paintMotility(root.querySelector('#science-motion'),cells,state,time);if(state.tab==='concentration'){paintConcentration(root.querySelector('#science-reference'),24);paintConcentration(root.querySelector('#science-comparison'),shownCount);}morph?.render();}
  async function loadMorph(){
    const token=++loadId;const host=root.querySelector('.science-webgl');if(!host)return;
    try{const module=await import('./science-3d.js');if(disposed||state.tab!=='morphology'||token!==loadId)return;
      morph=module.mountMorphologyScene(host,state,pose=>{state.pose=pose;});
      if(morph){root.querySelector('.science-morph').classList.add('has-webgl');morph.setActive(active());}
    }catch{root.querySelector('.science-morph')?.classList.add('no-webgl');}
  }
  function updateButtons(action){root.querySelectorAll('[data-sci-action="'+action+'"]').forEach(button=>{const selected=action==='movement'?state.movement===button.dataset.value:action==='speed'?state.speed===Number(button.dataset.value):action==='part'?state.part===button.dataset.value:action==='example'?state.example===button.dataset.value:state.trails;button.setAttribute('aria-pressed',String(selected));});}
  function updateDetail(){root.querySelector('.science-info').innerHTML=detail(state);}
  function onClick(event){
    const tab=event.target.closest('[data-sci-tab]');
    if(tab){setTab(tab.dataset.sciTab);return;}
    const button=event.target.closest('[data-sci-action]');if(!button)return;
    const {sciAction:action,value}=button.dataset;
    if(action==='movement'&&MOTION_MODES[value]){state.movement=value;if(currentMode!==value){cells.forEach(c=>{c.anchorX=c.x;c.anchorY=c.y;c.trail=[];});currentMode=value;}updateButtons(action);root.querySelector('#science-motion').setAttribute('aria-label','Simulación microscópica de 24 espermatozoides; '+MOTION_MODES[value].label);updateDetail();}
    else if(action==='speed'){state.speed=Number(value);updateButtons(action);}
    else if(action==='trails'){state.trails=!state.trails;updateButtons(action);}
    else if(action==='pause'){state.paused=!state.paused;button.textContent=state.paused?'▶ Reproducir':'Ⅱ Pausar';if(state.paused)stop();else start();}
    else if(action==='part'&&CELL_PARTS[value]){state.part=value;updateButtons(action);morph?.setPart(value);root.querySelector('.science-fallback').innerHTML=fallbackSvg(state);updateDetail();}
    else if(action==='example'&&MORPH_EXAMPLES[value]){state.example=value;updateButtons(action);morph?.setExample(value);root.querySelector('.science-fallback').innerHTML=fallbackSvg(state);updateDetail();}
    else if(action==='zoom-in')morph?.zoom(1);
    else if(action==='zoom-out')morph?.zoom(-1);
    else if(action==='reset')morph?.reset();
    repaint();
  }
  function onInput(event){if(event.target.id!=='science-density')return;state.density=Number(event.target.value);const count=CONCENTRATION_COUNTS[state.density-1];event.target.setAttribute('aria-valuetext',count+' células ilustrativas');root.querySelectorAll('[data-sci-count]').forEach(n=>n.textContent=n.tagName==='STRONG'?count+' células':count);root.querySelector('#science-comparison').setAttribute('aria-label','Campo de comparación con '+count+' células ilustrativas');updateDetail();if(!active()){shownCount=count;repaint();}else start();}
  function setTab(tab){if(!['motility','morphology','concentration'].includes(tab)||tab===state.tab)return;stop();loadId++;morph?.dispose();morph=null;state.tab=tab;root.querySelectorAll('[data-sci-tab]').forEach(button=>{const selected=button.dataset.sciTab===tab;button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;});tabPanel.setAttribute('aria-labelledby','science-tab-'+tab);tabPanel.innerHTML=panel(state);if(tab==='morphology')loadMorph();repaint();start();}
  function onKey(event){const tab=event.target.closest('[data-sci-tab]');if(!tab)return;const all=[...root.querySelectorAll('[data-sci-tab]')],i=all.indexOf(tab);let next;if(event.key==='ArrowRight')next=all[(i+1)%all.length];else if(event.key==='ArrowLeft')next=all[(i+all.length-1)%all.length];else if(event.key==='Home')next=all[0];else if(event.key==='End')next=all.at(-1);if(next){event.preventDefault();setTab(next.dataset.sciTab);next.focus();}}
  const resizeObserver=new ResizeObserver(()=>{repaint();morph?.resize();});
  resizeObserver.observe(root);
  const intersectionObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){repaint();start();}else stop();},{threshold:.01});
  intersectionObserver.observe(root);
  const visibility=()=>{if(document.hidden)stop();else{repaint();start();}};
  root.addEventListener('click',onClick);root.addEventListener('input',onInput);root.addEventListener('keydown',onKey);document.addEventListener('visibilitychange',visibility);
  if(state.tab==='morphology')loadMorph();repaint();start();
  return {setTab,dispose(){disposed=true;stop();loadId++;morph?.dispose();resizeObserver.disconnect();intersectionObserver.disconnect();document.removeEventListener('visibilitychange',visibility);root.removeEventListener('click',onClick);root.removeEventListener('input',onInput);root.removeEventListener('keydown',onKey);}};
}
