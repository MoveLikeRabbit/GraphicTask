import { useState } from 'react';
import 3DBox from './3DBox';
import Clock from './clock';
import Cube from './cube';

export default () => {
    const [task, setTask] = useState<any>(null);
    return (
        <div>
            <h1>210812023 刘若彤平时作业</h1>
            <button
                onClick={() => {
                    setTask('3DBox');
                }}
            >
                查看3DBox
            </button>
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
            
                three.js 实现cube
            <a href="./210812023/three-demo/global.html"></a>
                three.js 带贴图的地球仪
            
            
                three.js 雪花粒子效果
            
            
                three.js 模型动画
            
            
                游戏场景大作业
            {task === '3DBox' && <3DBox />}
            {task === 'clock' && <Clock />}
            {task === 'cube' && <Cube />}
        </div>
    );
};
