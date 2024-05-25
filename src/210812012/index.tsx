import { useState } from 'react';



export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812012 华聪瑞的作业内容</h1>
      <a href='./src/210812012/three-demo/index.html' target='_blank'>
        粒子加载作业
      </a>
<br />
      <a href='https://github.com/lingxiaojust/-hcr' target='_blank'>
        three.js模型加载作业
      </a>
      {/* <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
        游戏场景大作业
      </a> */}
    </div>
  );
};
