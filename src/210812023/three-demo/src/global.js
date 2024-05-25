import *as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import model from './earth.js';

import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

let camera, scene, renderer, stats, gui, settings;

function init(params) {
    //场景
    scene = new THREE.Scene();
    //将立方体添加到场景中
    scene.add(model);
    //相机
    camera = new THREE.PerspectiveCamera(
        90,//视野角度
        window.innerWidth / window.innerHeight,//长宽比
        0.1,//近截面（near）
        1000 // 远截面（far）
    );
    camera.position.set(50, 50, 50)
    camera.lookAt(0, 0, 0)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);


    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement)

    window.onresize = onWindowsResize
    initHelper()
    initGUI(ambientLight)
}

function animate(params) {
    renderer.render(scene, camera)
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;
    model.rotateX(0.01)
    model.rotateY(0.01)
    requestAnimationFrame(animate)
    stats.update();
}

function onWindowsResize(params) {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    
    camera.updateProjectionMatrix();
}

function initHelper(params) {
    
    const axesHelper = new THREE.AxesHelper(50)
    scene.add(axesHelper)

    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => {
        renderer.render(scene, camera)
    })

    const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444)
    scene.add(gridHelper)

    const stats = new Stats();
    document.body.appendChild(stats.domElement);
}

function initGUI(ambientLight) {
    const gui = new GUI()
    const obj = {
        x: 1,
        intensity: 1
    }
    gui.add(obj, 'x', -10, 10).name('x的值')
    gui.add(ambientLight, 'intensity', 0, 2).name('环境光强度')
    console.log('gui-->', gui)

    const modelFolder = gui.addFolder()
    modelFolder.addColor(model.material, 'color').name('color')
    modelFolder.add(model.material, 'transparent').name('是否透明');
    modelFolder.add(model.position, 'x', [0, 1, 2, 4, 8]);
    modelFolder.add(model.position, 'x', {
        min: -10,
        max: 10,
    });

}

init()
animate()