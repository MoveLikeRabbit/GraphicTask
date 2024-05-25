import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';
import './index.css';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812026邹颖作业内容</h1>
      <button
        onClick={() => {
          setTask('clock');
        }}
      >
        第一个作业
      </button>

      <a href='https://github.com/bingmeishi03/second2' target='_blank'>
        第二个作业
        </a>
      <a href='https://github.com/bingmeishi03/third' target='_blank'>
      第三个作业
      </a>
      <a href='https://github.com/bingmeishi03/fourth' target='_blank'>
      第四个作业
      </a>
      <a href='https://github.com/bingmeishi03/fifth' target='_blank'>
      第五个作业
      </a>
     
      
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
