import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import loadBirds from './birds';
import { Clock } from 'three';
import { PerspectiveCamera } from 'three';
import { DirectionalLight, HemisphereLight } from 'three';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

let camera, scene, renderer, stats, controls, settings = {};
const clock=new Clock();
let birds = [];  // 用于存储加载的鸟模型
async function init() {
  // 场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color('skyblue');

  // 加载鸟模型并添加到场景中
  birds = await loadBirds();
  scene.add(...birds);

  // 相机
  camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(100, 0, 300);

  // 环境光
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 5);
  scene.add(ambientLight);

  // 方向光
  const mainLight = new DirectionalLight('white', 4);
  mainLight.position.set(10, 10, 10);
  scene.add(mainLight);

  // 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 调整窗口大小事件监听
  window.addEventListener('resize', onWindowResize);

  // 初始化辅助工具
  initHelper();
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  const delta = clock.getDelta();
  birds.forEach(birds => birds.tick(delta));
  stats.update();
}

// 窗口调整大小处理函数
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 初始化辅助工具
function initHelper() {
  // 辅助坐标轴
  // const axesHelper = new THREE.AxesHelper(50);
  // scene.add(axesHelper);

  // 轨道控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', () => {
    renderer.render(scene, camera);
  });

  // 创建Stats对象
  stats = new Stats();
  document.body.appendChild(stats.domElement);
}

// 初始化并启动动画
init();
// 启动动画循环
animate();