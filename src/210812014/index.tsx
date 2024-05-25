import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812014 杜鸣宇的作业内容</h1>
      <button
        onClick={() => {
          setTask('clock');
        }}
      >
        查看canvas钟表
      </button>

      <button
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas cube
      </button>
      <br></br>
      <a href='https://github.com/Duyize0112/earth' target='_blank'>
         地球仪作业
      </a>
      <br></br>
      <a href='https://github.com/Duyize0112/particle' target='_blank'>
        粒子作业
      </a>
      <br></br>
      <a href='https://github.com/Duyize0112/birds' target='_blank'>
       飞鸟模型+阴影投射作业
      </a>
      <br></br>
      <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
        游戏场景大作业
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
