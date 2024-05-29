import { useState } from 'react';
import Box from './3DBox';
import Cube from './cube';

export default () => {
    const [task, setTask] = useState<any>(null);
    return (
        <div>
            <h1>210812023 刘若彤作业</h1>
            <button
                onClick={() => {
                    setTask('Box');
                }}
            >
                查看3DBox
            </button>

            <br></br>

            <button
                onClick={() => {
                    setTask('cube');
                }}
            >
                查看canvas cube
            </button>
            <br></br>
            <a href='https://github.com/AkariiiCBI/Bird ' target='_blank'>
                鸟飞行模型
            </a >
                <br></br>
            <a href='https://github.com/AkariiiCBI/shadow-Snowflake-cube ' target='_blank'>
                阴影、方块、雪花
            </a >
            <br></br>
            <a href='https://github.com/lingxiaojust/HomeWork0525' target='_blank'>
            游戏场景大作业
            </a>
            {task === 'Box' && <Box />}
            {task === 'cube' && <Cube />}
        </div>
    );
};
