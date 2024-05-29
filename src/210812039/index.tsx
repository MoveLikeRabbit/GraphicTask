import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';


export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812039 杨晶</h1>
      <button
        onClick={() => {
          setTask('clock');
        }}
      >
        <a href='./src/210812039/原始clock文件/Time.html' target='_blank'>查看canvas钟表</a>
      </button>

      <button
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas cube
      </button>

      <button
        onClick={() => {
          setTask('cube1');
        }}
      >
      <a href='./src/210812039/原始cube1文件/box盒子（自己设计）.html' target='_blank'>查看cube1 立方体</a>
      </button>
    <div>
    three.js 模型加载作业
    <br />
    <a href='https://github.com/LiuYang1228/-'>地球贴图 需要老师滑动一下鼠标</a>
    <br />
    <a href='https://github.com/LiuYang1228/snow/tree/main/three-demo' target='_blank'>雪花 粒子系统</a>
    <br />
    <a href='https://github.com/LiuYang1228/bird' target='_blank'>鸟</a>
    <br />
    <a href='./src/210812039/point cube/index.html' target='_blank'>点立方体</a>
    <br />
    <a href='https://github.com/LiuYang1228/Guang-yuan' target='_blank'>点光源 阴影</a>
      </div>
      

      <a href='https://github.com/LiuYang1228/Car/tree/main/car' target='_blank'>
        游戏场景大作业(210812037黎萱 210812035王曼妮 210912039杨晶)
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
