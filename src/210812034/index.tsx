import { useState } from 'react';
import Cube from './cube';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812034 钟雨雨</h1>
     
      <button
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas cube
      </button>
      <br/>
      <a href='https://github.com/zyy1234546/2' target='_blank'>
        three.js 实现cube
      </a>
      <br/>
      <a href='https://github.com/zyy1234546/3' target='_blank'>
        带贴图的地球仪
      </a>
      <br/>
      <a href='https://github.com/zyy1234546/4' target='_blank'>
        雪花粒子效果
      </a>
      <br/>
      <a href='https://github.com/zyy1234546/5' target='_blank'>
       模型动画
      </a>
      <br/>
      <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
        游戏场景大作业
      </a>
      {task === 'cube' && <Cube />}
    </div>
  );
};
