import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';
import './index.css';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812005——胡高雪作业</h1>
      <button onClick={() => {setTask('clock');}}> 查看canvas钟表</button>
      <button onClick={() => {setTask('cube'); }}>查看canvas cube</button>

      <a href='github地址' target='_blank'>three.js 模型加载作业</a>
      <a href='https://github.com/Hu-Gaoxue/hgx-demo/tree/main/%E5%9C%86%E6%9F%B1' target='_blank'>圆柱</a>
      <a href='https://github.com/Hu-Gaoxue/hgx-demo/tree/main/%E5%BD%A9%E8%89%B2%E4%B8%89%E8%A7%92%E5%BD%A2' target='_blank'>彩色三角</a>
      <a href='https://github.com/Hu-Gaoxue/hgx-demo/tree/main/%E6%97%8B%E8%BD%AC%E5%9C%B0%E7%90%83' target='_blank'>旋转地球</a>
      <a href='https://github.com/Hu-Gaoxue/hgx-demo/tree/main/%E6%97%8B%E8%BD%AC%E7%AB%8B%E6%96%B9%E4%BD%93' target='_blank'>旋转立方体</a>
      <a href=' https://github.com/Hu-Gaoxue/hgx-demo/tree/main/%E9%9B%AA%E8%8A%B1' target='_blank'>雪花</a>
      <a href='https://github.com/Hu-Gaoxue/hgx-demo/tree/main/%E9%A3%9E%E9%B8%9F' target='_blank'>飞鸟</a>
      <a href='https://github.com/Hu-Gaoxue/hgx-demo/blob/main/%E5%BD%A9%E8%89%B2%E7%AB%8B%E6%96%B9%E4%BD%93%20.html' target='_blank'>彩色立方体</a>
      
      

      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};


