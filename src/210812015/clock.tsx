import React, { useEffect } from 'react';

const Clock = () => {
  useEffect(() => {
    const canvas = document.getElementById('clockCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2; // 获取 Canvas 中心点的 x 坐标
    const centerY = canvas.height / 2; // 获取 Canvas 中心点的 y 坐标
    const radius = 150; // 设置钟表的半径为 150 像素

    // 定义一个函数来绘制钟表
    function drawClock() {
      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 绘制钟表的外圆
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#333'; // 设置描边颜色为黑色
      ctx.lineWidth = 8; // 设置描边宽度为 8 像素
      ctx.stroke(); // 绘制描边

      // 在钟表上绘制小时刻度
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * 2 * Math.PI; // 计算每个小时刻度所对应的角度
        const x = centerX + radius * Math.cos(angle); // 计算小时刻度的 x 坐标
        const y = centerY + radius * Math.sin(angle); // 计算小时刻度的 y 坐标
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = '#333'; // 设置填充颜色为黑色
        ctx.fill(); // 绘制填充
      }

      // 获取当前时间
      const now = new Date();
      const hours = now.getHours() % 12; // 获取当前小时数（12 小时制）
      const minutes = now.getMinutes(); // 获取当前分钟数
      const seconds = now.getSeconds(); // 获取当前秒数

      // 绘制时针
      const hourAngle = ((hours + minutes / 60) / 12) * 2 * Math.PI; // 计算时针的旋转角度
      drawHand(hourAngle, radius * 0.5, 10); // 调用绘制指针的函数绘制时针

      // 绘制分针
      const minuteAngle = (minutes / 60) * 2 * Math.PI; // 计算分针的旋转角度
      drawHand(minuteAngle, radius * 0.8, 5); // 调用绘制指针的函数绘制分针

      // 绘制秒针
      const secondAngle = (seconds / 60) * 2 * Math.PI; // 计算秒针的旋转角度
      drawHand(secondAngle, radius * 0.9, 2); // 调用绘制指针的函数绘制秒针
    }

    // 定义一个函数来绘制钟表的指针
    function drawHand(angle, length, width) {
      const handX = centerX + length * Math.cos(angle - Math.PI / 2); // 计算指针终点的 x 坐标
      const handY = centerY + length * Math.sin(angle - Math.PI / 2); // 计算指针终点的 y 坐标
      ctx.beginPath();
      ctx.moveTo(centerX, centerY); // 将画笔移动到钟表的中心点
      ctx.lineTo(handX, handY); // 绘制指针
      ctx.strokeStyle = '#333'; // 设置指针的颜色为黑色
      ctx.lineWidth = width; // 设置指针的宽度
      ctx.stroke(); // 绘制描边
    }

    // 首次调用绘制钟表的函数
    drawClock();

    // 每隔一秒钟调用一次绘制钟表的函数，实现钟表的实时更新
    const intervalId = setInterval(drawClock, 1000);

    // 在组件卸载时清除定时器
    return () => clearInterval(intervalId);
  }, []); // 空依赖数组表示只在组件挂载和卸载时执行

  return <canvas id="clockCanvas" width="400" height="400"></canvas>;
};

export default Clock;
