import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import model from "./demo/sprite.js";

let camera, scene, renderer, stats, gui;

function init(){
    scene = new THREE.Scene();

    //添加物体
    scene.add(model)
    //相机
    camera = new THREE.PerspectiveCamera(
        90,  // 视野角度
        window.innerWidth / window.innerHeight,  //长宽比
        0.1,  //近截面
        1000,  //远截面
    );
    camera.position.set(50,50,50);
    camera.lookAt(0,0,0);

    //光源
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(30, 30, 30);
    pointLight.decay = 0;  //设置光源不随距离衰减
    scene.add(pointLight);

    renderer = new THREE.WebGLRenderer({antialias:true,});
    renderer.setClearColor('rgb(242,151,199)',1.0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.render(scene,camera);
    document.body.appendChild(renderer.domElement);
    window.onresize = onWindowResize;


}
var  mouseY = 0;


document.addEventListener('mousemove', function(event) {
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

function animate(){
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    model.rotation.y = mouseY * Math.PI * 0.5;
    stats.update();
}


function onWindowResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

//视图辅助
function initHelper(){
    //坐标轴辅助线
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);
    //轨道控制器
    const constrols = new OrbitControls(camera,renderer.domElement);
    constrols.addEventListener('change',() => {
        renderer.render(scene,camera);
    })

    const gridHelper = new THREE.GridHelper(1000,100,0x000000,0x0000ff);
    scene.add(gridHelper);
    stats = new Stats();
    document.body.appendChild(stats.domElement);
}

init();
animate();