import { useState } from 'react';
import './index.css';

const Clock = () => (
  <div className="scene">
    {/* 钟表的内容 */}
    <h2>Clock Component</h2>
  </div>
);

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
        
        <a href='github地址' target='_blank'>
          three.js 模型加载作业
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
