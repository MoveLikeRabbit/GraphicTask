import *as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
//import model from './demo/cube.js';
// import model from './地图/sphere.js';
// import model from './demo/sprite.js';
//import model from './demo/points.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

let camera ,scene ,renderer, stats, gui, settings;

function init(params){
  //场景
  scene = new THREE.Scene();
  //将立方体添加到场景中
  scene.add(model);
  //相机
  camera=new THREE.PerspectiveCamera(
    90,//视野角度
    window.innerWidth/window.innerHeight,//长宽比
    0.1,//近截面（near）
    1000 // 远截面（far）
  );
  camera.position.set(50,50,50)
  camera.lookAt(0,0,0)

  //点光源
  // const pointLight=new THREE.PointLight(0xffffff, 1.0)
  // pointLight.position.set(20,20,20)
  // //pointLight.intensity = 1.0;//光照强度
  // pointLight.decay = 0.0;//设置光源不随距离衰减
  // scene.add(pointLight)

  //环境光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  // 平行光
  // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  // directionalLight.position.set(10, 20, 30); //设置平行光的位置
  // scene.add(directionalLight);

  //渲染器
  renderer=new THREE.WebGLRenderer({antialias: true});
  // 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene,camera)
  document.body.appendChild(renderer.domElement)

  //window.addEventListener('resize',onWindowsResize)
  window.onresize=onWindowsResize
  initHelper()
  initGUI(ambientLight)
}

function animate(params){
  //浏览器刷新时渲染循环
  renderer.render(scene,camera)
  model.rotation.x += 0.01;
  model.rotation.y += 0.01;
  model.rotateX(0.01)
  model.rotateY(0.01)
  requestAnimationFrame(animate)
  stats.update();
}

function onWindowsResize(params){
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
}

function initHelper(params){
  // 辅助坐标轴
  const axesHelper=new THREE.AxesHelper(50)
  scene.add(axesHelper)

  // 设置相机控件轨道控制器OrbitControls
  const controls=new OrbitControls(camera,renderer.domElement)
  controls.addEventListener('change',()=>{
    renderer.render(scene,camera)
  })

  const gridHelper=new THREE.GridHelper(300, 25, 0x004444, 0x004444)
  scene.add(gridHelper)

  // // 点光源辅助观察
  // const pointLightHelpler = new THREE.PointLightHelper(pointLight);
  // scene.add(pointLightHelpler);

  // // 平行光辅助观察
  // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 20, 0xff0000);
  // scene.add(directionalLightHelper);

  //创建Stats对象
  const stats = new Stats();
  //stats.domElement:web页面上输出计算结果,一个div元素，
  document.body.appendChild(stats.domElement);
}

function initGUI(ambientLight){
  const gui=new GUI()
  const obj={
    x:1,
    intensity:1
  }
  gui.add(obj,'x',-10,10).name('x的值')
  gui.add(ambientLight,'intensity',0,2).name('环境光强度')
  console.log('gui-->',gui)

  // 分组、嵌套
  const modelFolder=gui.addFolder()
  modelFolder.addColor(model.material,'color').name('color')
  // 布尔值设置单选框
  modelFolder.add(model.material, 'transparent').name('是否透明');
  // 下拉菜单、单选框
  modelFolder.add(model.position, 'x', [0, 1, 2, 4,8]);
  modelFolder.add(model.position, 'x', {
    min: -10,
    max: 10,
  });

}

init()
animate()