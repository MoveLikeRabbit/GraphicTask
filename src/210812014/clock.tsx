
export default () => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                #canvas-container {
                    text-align: center;
                    background: red;
                }
            </style>
        </head>
        <body>
            <div id="canvas-container">
            <canvas id="clock" width="500" height="500">
            </canvas>
        </div>   
        </body>
         <script>
        const canvas = document.getElementById("clock");
        const ctx = canvas.getContext("2d");
        const radius = canvas.width / 2;

        function drawClock() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(radius, radius, radius * 0.9, 0, 2 * Math.PI);
            ctx.fillStyle = 'black';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(radius, radius, radius * 0.1, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();

            // ctx.strokeStyle = 'blue';

            ctx.beginPath();
            ctx.arc(radius, radius, radius * 0.91, 0, 2 * Math.PI);
            ctx.lineWidth = 8;
            ctx.strokeStyle = 'blue';
            ctx.stroke();

            drawNumbers();
            drawTime();
        }

        function drawNumbers() {
            ctx.font = radius * 0.16 + 'px Arial';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            for (let i = 1; i <= 12; i++) {
                //数字
                const angle = (i - 3) * (Math.PI * 2) / 12;
                const x = radius + radius * 0.73 * Math.cos(angle);
                const y = radius + radius * 0.73 * Math.sin(angle);
                ctx.fillText(i, x, y);
                //大刻度
                ctx.beginPath();
                const startX = radius + radius * 0.8 * Math.cos(angle);
                const startY = radius + radius * 0.8 * Math.sin(angle);
                const endX = radius + radius * 0.9 * Math.cos(angle);
                const endY = radius + radius * 0.9 * Math.sin(angle);
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 3;
                ctx.stroke();
            }

            //小刻度
            for (let i = 0; i < 60; i++) {
                const angle = i * (Math.PI * 2) / 60;
                const startMinuteX = radius + radius * 0.8 * Math.cos(angle);
                const startMinuteY = radius + radius * 0.8 * Math.sin(angle);
                const endMinuteX = radius + radius * 0.85 * Math.cos(angle);
                const endMinuteY = radius + radius * 0.85 * Math.sin(angle);
                ctx.beginPath();
                ctx.moveTo(startMinuteX, startMinuteY);
                ctx.lineTo(endMinuteX, endMinuteY);
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
        //
        function drawTime() {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();

            //时针旋转
            const hourAngle = (hour % 12 + minute / 60) * 360 / 12;
            drawHand(hourAngle, radius * 0.45, radius * 0.07);

            //分针旋转
            const minuteAngle = (minute + second / 60) * 360 / 60;
            drawHand(minuteAngle, radius * 0.6, radius * 0.05);

            //秒针旋转
            const secondAngle = second * 360 / 60;
            drawHand(secondAngle, radius * 0.8, radius * 0.03);
        }

        function drawHand(angle, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.moveTo(radius, radius);
            const x = radius + length * Math.cos(angle * Math.PI / 180 - Math.PI / 2);
            const y = radius + length * Math.sin(angle * Math.PI / 180 - Math.PI / 2);
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        setInterval(drawClock, 1000);
    </script>
        </html>` }} />
    );
};
