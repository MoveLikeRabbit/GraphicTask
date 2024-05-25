import { useState } from 'react';
// import text from './text'
import Text from './text';
export default () => {
  const [task, setTask] = useState<any>(null);
    return (
      <div>
        <h1>210812008作业</h1>
  
        <a href='https://github.com/XiIyouLi/GraphicCube1' target='_blank'>
          canvas 立方体1
        </a>
        <br />
  
        <button
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas立方体
      </button>
        <br />
  
        <a href='https://github.com/XiIyouLi/GraphicBrid' target='_blank'>
          threejs 鸟模型
        </a>
        <br />
  
        <a href='https://github.com/XiIyouLi/GraphicEarth' target='_blank'>
          threejs 地球
        </a>
        <br />
  
        <a href='https://github.com/XiIyouLi/GraphicShanow' target='_blank'>
          threejs 阴影
        </a>
        <br />
  
        <a href='https://github.com/XiIyouLi/GraphicSnow' target='_blank'>
          threejs 雪
        </a>
        <br />
        {task === 'cube' && <Text />}
      </div>
    );
  };
  