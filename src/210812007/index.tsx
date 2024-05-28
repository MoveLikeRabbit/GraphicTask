import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812007 屈卉的作业内容</h1>
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
      <a href='https://github.com/xqsxmn/qh' target='_blank'>
        three.js 实现cube
      </a>
      <a href='https://github.com/xqsxmn/qhh' target='_blank'>
        three.js 带贴图的地球仪
      </a>
      <a href='https://github.com/xqsxmn/qhhh' target='_blank'>
        three.js 雪花粒子效果
      </a>
      <a href='https://github.com/xqsxmn/qhhhh' target='_blank'>
        three.js 模型动画
      </a>
      <a href='https://github.com/xqsxmn/qmdzy' target='_blank'>
        游戏场景大作业
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
