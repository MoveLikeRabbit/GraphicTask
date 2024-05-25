import *as THREE from 'three';

// 创建Sprite材质
const textureLoader = new THREE.TextureLoader();
const spriteTexture = textureLoader.load('src/assets/snowflake1.png');

const material = new THREE.SpriteMaterial({
    color: 0xffffff,
    map: spriteTexture
})
const sprite = new THREE.Sprite(material)

sprite.scale.set(10,10)
sprite.position.set(20,20,20)

export default sprite