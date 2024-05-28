import { useState } from "react";
import Cube from "../210812002/cube";
import './index.css';

export default () => {
    const [task,setTask] = useState<any>(null);
    return (
        <div>
            <h1>210812002作业内容</h1>
            <button
            onClick={() => {
                setTask('cube');
            }}
            >
                查看cube方块
            </button>

            <a href='https://github.com/yxx021224/lizi' target='_blank'>
                粒子作业
            </a>
            <a href='https://github.com/yxx021224/mox' target='_blank'>
                three.js 模型加载作业
            </a>
            <a href='https://github.com/yxx021224/yuanzhu' target='_blank'>
                圆柱阴影作业
            </a>
            {task === 'cube' && <Cube />}
        </div>
    )
}