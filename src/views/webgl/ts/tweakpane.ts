import { Pane } from 'tweakpane';
import * as THREE from 'three';

let scene, renderer, camera;
let pane, PARAMS;

export function initPane(renderer2: any) {
  scene = renderer2.scene;
  renderer = renderer2.renderer;
  camera = renderer2.camera;

  pane = new Pane({ title: '基础设置' });

  PARAMS = {
    相机: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
    环境光: '#ffffff',
  };

  pane.element.style = 'margin-top: 42px;';

  // 相机参数设置
  setCamera();
  setAmbientLight();
  addPointLight();
}

// 相机参数设置
function setCamera() {
  pane
    .addInput(PARAMS, '相机', {
      x: { min: -100, max: 100 },
      y: { min: -100, max: 100 },
      z: { min: -100, max: 100 },
    })
    .on('change', (ev) => {
      camera.position.x = ev.value.x;
      camera.position.y = ev.value.y;
      camera.position.z = ev.value.z;
    });
}

// 环境灯设置
function setAmbientLight() {
  pane.addInput(PARAMS, '环境光').on('change', (ev) => {
    scene.children.forEach((element) => {
      if (element instanceof THREE.AmbientLight) {
        element.color = new THREE.Color(ev.value);
      }
    });
  });
}

// 添加点光源
function addPointLight() {
  const f1 = pane.addFolder({
    title: '点光源',
  });
  const pointBtn = f1.addButton({
    title: '+',
    label: '新增',
  });

  pointBtn.on('click', () => {
    const pLight = new THREE.PointLight(new THREE.Color('#ffffff'));
    pLight.position.set(0, 0, 0);
    scene.add(pLight);
    console.log('scene', scene);
  });
}
