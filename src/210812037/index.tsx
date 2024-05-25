import { useState } from 'react';
import Clock from './clock37';
import Cube from './cube37';
import './index.css';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812037 黎萱的作业内容</h1>
      <button
        onClick={() => {
          setTask('clock');
        }}
      >
        查看canvas钟表
      </button>
      <br />
      <button
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas cube
      </button>
      <br />
      <div id='box'>
        <h3>three.js 模型加载作业</h3>
        <div id='work'>
          <a href="https://github.com/100122222222/map" target='_blank'>地图</a>
          <br />
          <a href="https://github.com/100122222222/birds" target='_blank'>鹦鹉</a>
          <br />
          <a href="https://github.com/100122222222/shadow" target='_blank'>阴影</a>
          <br />
          <a href="https://github.com/100122222222/cube" target='_blank'>CUBE</a>
        </div>
      </div>
      <br />
      <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
        游戏场景大作业
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
