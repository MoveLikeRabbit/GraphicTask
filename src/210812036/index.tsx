import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';
import './index.css';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812036 曹羽洁</h1>
      <button
        onClick={() => {
          setTask('clock');
        }}
      >
        查看canvas钟表
      </button>


      <a href='https://github.com/bathbee/pingshizuoye/tree/master' target='_blank'>
        其他平时作业three.js
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
