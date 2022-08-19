import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { ResourceTracker } from './Resource.js';

const gltf_url = '/static/3d/scene001.gltf';
let scene, renderer, camera;
let resMgr, track;

export function loadGltf(renderer2: any) {
  scene = renderer2.scene;
  renderer = renderer2.renderer;
  camera = renderer2.camera;
  const gltfloader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/resource/draco3dgltf/');
  gltfloader.setDRACOLoader(dracoLoader);

  gltfloader.load(gltf_url, (gltf) => {
    resMgr = new ResourceTracker();
    track = resMgr.track.bind(resMgr);
    const root = track(gltf.scene);
    scene.add(root);

    // compute the box that contains all the stuff
    // from root and below
    const box = new THREE.Box3().setFromObject(root);

    const boxSize = box.getSize(new THREE.Vector3()).length();
    const boxCenter = box.getCenter(new THREE.Vector3());

    // set the camera to frame the box
    frameArea(boxSize * 1.1, boxSize, boxCenter, camera);
  });
}

function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
  const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
  const halfFovY = THREE.Math.degToRad(camera.fov * 0.5);
  const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
  // compute a unit vector that points in the direction the camera is now
  // in the xz plane from the center of the box
  const direction = new THREE.Vector3()
    .subVectors(camera.position, boxCenter)
    .multiply(new THREE.Vector3(1, 0, 1))
    .normalize();

  // move the camera to a position distance units way from the center
  // in whatever direction the camera was from the center already
  camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

  // pick some near and far values for the frustum that
  // will contain the box.
  camera.near = boxSize / 100;
  camera.far = boxSize * 100;

  camera.updateProjectionMatrix();

  // point the camera to look at the center of the box
  camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
}

// 离开页面
export function onUnDispose() {
  resMgr.dispose();
  console.log('内存清理', renderer.info); // 查看memery字段即可
}
