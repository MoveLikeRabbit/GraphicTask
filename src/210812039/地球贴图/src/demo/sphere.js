import * as THREE from "three";

const geometry=new THREE.SphereGeometry(
    10,
    32,
    24,
    0,
    Math.PI*2,
    0,
    Math.PI*2
);
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象
const texture = texLoader.load('./src/assets/earth.jpg');
const textureCube = new THREE.CubeTextureLoader().setPath('./环境贴图/环境贴图0/').load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.jpg']);
const material = new THREE.MeshLambertMaterial({
// 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture,
    //map表示材质的颜色贴图属性
});
new THREE.MeshStandardMaterial({
    metalness: 1.0,roughness: 0.5,
    envMap: textureCube, //设置pbr材质环境贴图
})   
//const geometry=new THREE.BoxGeometry(10,10,10);
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
