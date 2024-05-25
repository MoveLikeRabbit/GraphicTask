import *as THREE from 'three';
import { color } from 'three/examples/jsm/nodes/Nodes.js';

// 创建Points几何体
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -10,-10,10,//v0
    10,-10,10, //v1
    10,10,10,  //v2
    -10,10,10  //v3
]);
const sphere = new THREE.SphereGeometry(50)
const cube = new THREE.BoxGeometry(100,100,100,10,10,10)
console.log('sphere-->',sphere)
console.log('cube-->',cube)

geometry.setAttribute('position', cube.getAttribute('position'));

// 创建Points材质
const pointsMaterial = new THREE.PointsMaterial({ 
        color:0xffffff,
        size:1,
        transparent:true
});

// 创建Points粒子系统
const points = new THREE.Points(geometry, pointsMaterial);

export default points