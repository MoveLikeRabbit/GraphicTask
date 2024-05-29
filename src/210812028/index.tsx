import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';
import './index.css';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812028 李梦茹的作业内容</h1>
      <div className="vertical-layout">
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
        <a href='https://github.com/210812028lmr/lmrdemo1' target='_blank'>
          three.js投影  
        </a>
        <a href='https://github.com/Duyize0112/lmr-birds' target='_blank'>
          three.js鸟的动画
        </a>
        <a href='https://github.com/ZZhang0301/3DScene' target='_blank'>
          游戏场景大作业
        </a>
      </div>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
