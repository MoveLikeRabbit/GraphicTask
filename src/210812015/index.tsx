import { useState } from 'react';
import './index.css';
import Clock from './clock';


const Cube = () => (
  <div className="scene">
    <div className="cube">
      <div className="front">1</div>
      <div className="back">2</div>
      <div className="right">3</div>
      <div className="left">4</div>
      <div className="top">5</div>
      <div className="bottom">6</div>
    </div>
  </div>
);

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div className="container">
      <div className="sidebar">
        <h1>210812015</h1>
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
        
        <a href='https://github.com/Gululu-lu/Gulululu/tree/master' target='_blank'>
          作业合集（粒子、飞鸟、贴图等）
        </a>
        <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
          游戏场景大作业
        </a>
      </div>
      <div className="content">
        {task === 'clock' && <Clock />}
        {task === 'cube' && <Cube />}
      </div>
    </div>
  );
};
