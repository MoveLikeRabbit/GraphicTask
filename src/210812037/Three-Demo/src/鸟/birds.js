import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function setupModel(data) {
    const model = data.scene.children[0];
    const clip = data.animations[0];
    // 播放器: 传入动画所属的对象
    const mixer = new THREE.AnimationMixer(model);
    // 返回所传入的剪辑参数的AnimationAction, 根对象参数可选，默认值为混合器的默认根对象。第一个参数可以是动画剪辑(AnimationClip)对象或者动画剪辑的名称。
    const action = mixer.clipAction(clip);
    action.play();
    model.tick = (delta) => mixer.update(delta);
    return model;
}

const loader = new GLTFLoader();

const loadBirds = async () => {
  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('./src/assets/models/Parrot.glb'),
    loader.loadAsync('./src/assets/models/Flamingo.glb'),
    loader.loadAsync('./src/assets/models/Stork.glb'),
  ]);

  const parrot = setupModel(parrotData);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(-70, 90, 0);
  const stork = setupModel(storkData);
  stork.position.set(70, 50, 30);

  return [stork, flamingo, parrot];
};

export default loadBirds;