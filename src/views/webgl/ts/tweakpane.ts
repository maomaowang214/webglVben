import { Pane } from 'tweakpane';
import * as THREE from 'three';

let scene, renderer, camera;
let pane, PARAMS;

export function initPane(renderer2: any) {
  scene = renderer2.scene;
  renderer = renderer2.renderer;
  camera = renderer2.camera;
  console.log(renderer);

  pane = new Pane({ title: '基础设置' });

  PARAMS = {
    相机: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
    环境光: '#ffffff',
  };

  pane.element.style = 'margin-top: 42px;';

  // 相机参数设置
  setCamera();
  setAmbientLight();

  const point_obj = {
    title: '点光源',
    light: 'PointLight',
  };
  addPointLight(point_obj);

  const d_obj = {
    title: '太阳光',
    light: 'DirectionalLight',
  };
  addPointLight(d_obj);
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
function addPointLight(obj) {
  // 点光源
  const f1 = pane.addFolder({
    title: obj.title,
  });
  const pointBtn = f1.addButton({
    title: '+',
    label: '新增',
  });

  let pCount = 0;
  pointBtn.on('click', () => {
    const pLight = new THREE[obj.light](new THREE.Color('#ffffff'));
    pLight.position.set(0, 0, 0);
    scene.add(pLight);

    const name = 'plight' + pCount;
    PARAMS[name] = { x: pLight.position.x, y: pLight.position.y, z: pLight.position.z };
    const color = 'color' + pCount;
    PARAMS[color] = 0xffffffff;

    f1.addInput(PARAMS, name, {
      x: { min: -100, max: 100, step: 0.01 },
      y: { min: -100, max: 100, step: 0.01 },
      z: { min: -100, max: 100, step: 0.01 },
    }).on('change', (ev) => {
      pLight.position.x = ev.value.x;
      pLight.position.y = ev.value.y;
      pLight.position.z = ev.value.z;
    });

    f1.addInput(PARAMS, color, {
      view: 'color',
      // color: { alpha: true },
    }).on('change', (ev) => {
      console.log(ev);

      pLight.color = new THREE.Color(ev.value);
    });

    pCount++;
  });
}
