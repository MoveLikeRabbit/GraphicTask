import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div style={{margin:'20px'}}>
      <h1>210812020</h1>
      <button
        style={{ display: 'block', marginBottom: '10px' }}
        onClick={() => {
          setTask('clock');
        }}
      >
        查看canvas钟表
      </button>

      <button
        style={{ display: 'block', marginBottom: '10px' }}
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas cube
      </button>
      <a
        href='https://github.com/pyfpyfpyfw/pyf-demo'
        target='_blank'
        style={{ display: 'block', marginBottom: '10px' }}
      >
        投影
      </a>
      <a
        href='https://github.com/pyfpyfpyfw/birds'
        target='_blank'
        style={{ display: 'block', marginBottom: '10px' }}
      >
        bird模型
      </a>
      
      <a
        href='https://github.com/ZZhang0301/3DScene'
        target='_blank'
        style={{ display: 'block', marginBottom: '10px' }}
      >
        游戏场景大作业
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
