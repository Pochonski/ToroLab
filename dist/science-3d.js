import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';

export function mountMorphologyScene(host, state, onPose = () => {}) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); }
  catch { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  const aspect = host.clientWidth / Math.max(1, host.clientHeight);
  const defaultDistance = Math.max(11.5, Math.min(19, 16.5 / Math.max(.8, aspect)));
  camera.position.set(0, 1.4, defaultDistance);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = .07;
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.minPolarAngle = .35;
  controls.maxPolarAngle = Math.PI - .35;
  controls.target.set(0, 0, 0);
  const ambient = new THREE.HemisphereLight(0xe6f7ed, 0x183c37, 2.1);
  const key = new THREE.DirectionalLight(0xffeed4, 3.6); key.position.set(-3, 4, 6);
  const rim = new THREE.DirectionalLight(0x52dcb6, 2.1); rim.position.set(4, -2, -4);
  scene.add(ambient, key, rim);
  const mat = (color, roughness=.36) => new THREE.MeshPhysicalMaterial({ color, metalness: .1, roughness, clearcoat: .5, clearcoatRoughness: .28, transparent:true, opacity:1, side:THREE.DoubleSide });
  const headMat = mat(0xd8ead0), headAccent = mat(0x8fcbb0), middleMat = mat(0xd6bc83), tailMat = mat(0xb6e0c8), dropMat = mat(0xe9b575);
  function mesh(geometry, material, group, part) { const m = new THREE.Mesh(geometry, material.clone()); m.userData.part=part; group.add(m); return m; }
  function curve(points, radius, material, group, part) { return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))), 90, radius, 8, false), material, group, part); }
  function model(example) {
    const group = new THREE.Group();
    const head = mesh(new THREE.SphereGeometry(1, 48, 32), headMat, group, 'head');
    head.scale.set(example==='pyriform'?.95:1.17,.62,.3);head.position.set(-2.23,0,0);
    if(example==='pyriform'){const tip=mesh(new THREE.SphereGeometry(1,32,20),headMat,group,'head');tip.scale.set(.45,.34,.23);tip.position.set(-1.18,0,0);}
    const cap=mesh(new THREE.SphereGeometry(1,40,24),headAccent,group,'head');cap.scale.set(.42,.55,.315);cap.position.set(-3.05,0,0);
    const neck=mesh(new THREE.CylinderGeometry(.12,.16,.35,20),middleMat,group,'midpiece');neck.rotation.z=Math.PI/2;neck.position.set(-.98,0,0);
    const mid=mesh(new THREE.CylinderGeometry(.14,.11,1.12,24,18),middleMat,group,'midpiece');mid.rotation.z=Math.PI/2;mid.position.set(-.31,0,0);
    for(let i=0;i<11;i++){const t=i/10, ring=mesh(new THREE.TorusGeometry(.145-t*.035,.025,7,28),headAccent,group,'midpiece');ring.rotation.y=Math.PI/2;ring.position.set(-.82+t*1.05,0,0);}
    if(example==='droplet'){const droplet=mesh(new THREE.SphereGeometry(.31,28,20),dropMat,group,'midpiece');droplet.scale.set(.82,.9,.8);droplet.position.set(-.83,-.3,.12);}
    const points=[];
    if(example==='coiled'){for(let i=0;i<=32;i++){const t=i/32;points.push([.24+t*2.5,Math.sin(t*2.4*Math.PI)*(.18+t*.36),Math.cos(t*2.4*Math.PI)*(.12+t*.22)]);}for(let i=0;i<=24;i++){const t=i/24;points.push([2.74+t*.75,Math.sin(t*2*Math.PI)*(.44-t*.24),.22*Math.cos(t*2*Math.PI)]);}}
    else for(let i=0;i<=60;i++){const t=i/60;points.push([.24+t*4.25,Math.sin(t*5.5*Math.PI)*(.04+t*.19),Math.cos(t*4*Math.PI)*t*.06]);}
    curve(points,.045,tailMat,group,'tail');
    return group;
  }
  let current=model(state.example);scene.add(current);
  let previous=null, fadeStart=0, running=false, raf=0, disposed=false, focusTarget=new THREE.Vector3();
  function disposeGroup(group){group.traverse(obj=>{if(obj.isMesh){obj.geometry.dispose();obj.material.dispose();}});scene.remove(group);}
  const focusPositions={head:new THREE.Vector3(-2.2,0,0),midpiece:new THREE.Vector3(-.45,0,0),tail:new THREE.Vector3(2.35,0,0)};
  function setOpacity(group, value){group.traverse(obj=>{if(obj.isMesh)obj.material.opacity=value;});}
  function setHighlight(){
    for(const group of [current,previous].filter(Boolean))group.traverse(obj=>{if(!obj.isMesh)return;const selected=obj.userData.part===state.part;obj.material.emissive=new THREE.Color(selected?0x476238:0x000000);obj.material.emissiveIntensity=selected?.38:0;});
  }
  function resize(){const rect=host.getBoundingClientRect();if(rect.width<1||rect.height<1)return;camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();renderer.setSize(rect.width,rect.height,false);render();}
  function render(){if(disposed)return;controls.update();renderer.render(scene,camera);}
  function frame(now){raf=0;if(!running||disposed)return;
    controls.target.lerp(focusTarget,.075);controls.update();
    if(previous){const opacity=Math.min(1,(now-fadeStart)/380);setOpacity(current,opacity);setOpacity(previous,1-opacity);if(opacity>=1){disposeGroup(previous);previous=null;}}
    renderer.render(scene,camera);raf=requestAnimationFrame(frame);
  }
  function setActive(value){running=!!value;if(!running){if(raf)cancelAnimationFrame(raf);raf=0;if(previous){disposeGroup(previous);previous=null;setOpacity(current,1);}render();}else if(!raf)raf=requestAnimationFrame(frame);}
  function setPart(part){focusTarget.copy(focusPositions[part]||focusPositions.head);setHighlight();if(!running) {controls.target.copy(focusTarget);render();}}
  function setExample(example){if(previous){disposeGroup(previous);previous=null;}previous=current;current=model(example);scene.add(current);setHighlight();if(running){setOpacity(current,0);fadeStart=performance.now();}else{disposeGroup(previous);previous=null;render();}}
  function zoom(direction){const factor=direction>0?.78:1.28;camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);camera.position.clampLength(controls.minDistance,controls.maxDistance);controls.update();render();}
  function reset(){camera.position.set(0,1.4,defaultDistance);controls.target.set(0,0,0);focusTarget.set(0,0,0);controls.update();render();}
  function dispose(){
    disposed=true;running=false;if(raf)cancelAnimationFrame(raf);
    onPose({camera:camera.position.toArray(),target:controls.target.toArray()});
    controls.dispose();
    for(const group of [current,previous].filter(Boolean))disposeGroup(group);
    for(const material of [headMat,headAccent,middleMat,tailMat,dropMat])material.dispose();
    renderer.dispose();renderer.domElement.remove();
  }
  controls.addEventListener('change',()=>{if(!running&&!disposed)renderer.render(scene,camera);});
  setHighlight();resize();
  if(state.pose?.camera&&state.pose?.target){camera.position.fromArray(state.pose.camera);controls.target.fromArray(state.pose.target);focusTarget.copy(controls.target);}
  else focusTarget.set(0,0,0);
  render();
  return {setActive,setPart,setExample,zoom,reset,resize,render,dispose};
}
