import { useState } from 'react';
import './index.css';
import Cube from './Cube';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812035 王曼妮的作业内容</h1>

      <button
        style={{ display: 'block', marginBottom: '10px' }}
        onClick={() => {
          setTask('cube');
        }}
      >
        Cube
      </button>
      <a href='./src/210812035/Clock作业/clock.html' target='_blank'>
        clock
      </a>
      
      <br></br>
      <a href='https://github.com/buer1020w/TEST' target='_blank'>
        雪花
      </a>
      <br></br>
      <a href='https://github.com/buer1020w/World' target='_blank'>
        地球
      </a>
      <br></br>
      <a href='https://github.com/buer1020w/Bird' target='_blank'>
        鸟
      </a>
      {task === 'cube' && <Cube />}
    </div>
  );
};
