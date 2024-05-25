export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <canvas id="canvas"></canvas>
            <script>
                canvas = document.getElementById('canvas')
                canvas.width = '800'
                canvas.height = '600'
                var cxt = canvas.getContext('2d')
                    //渲染时钟
                function renderClock() {
                    cxt.clearRect(0, 0, 800, 600)
                    cxt.save()
                    cxt.translate(400, 300)
                    cxt.rotate(-2 * Math.PI / 4)
                    cxt.save()
                        //绘制表盘
                    cxt.beginPath()
                    cxt.arc(0, 0, 200, 0, 2 * Math.PI)
                    cxt.strokestyle = 'blue'
                    cxt.lineWidth = 10
                    cxt.stroke()
                    cxt.closePath()
                        //绘制秒针刻度
                    for (var j = 0; j < 60; j++) {
                        cxt.rotate(Math.PI / 30)
                        cxt.beginPath();
                        cxt.moveTo(180, 0)
                        cxt.lineTo(190, 0)
                        cxt.lineWidth = 2
                            // cxt.strokeStyle = 'orangered'
                        cxt.stroke()
                        cxt.closePath()
                    }
                    cxt.restore()
                    cxt.save()
                        //绘制表盘
                    for (var i = 0; i < 12; i++) {
                        cxt.rotate(Math.PI / 6)
                        cxt.beginPath();
                        cxt.moveTo(180, 0)
                        cxt.lineTo(200, 0)
                        cxt.lineWidth = 10
                            // cxt.strokeStyle = 'darkgrey'
                        cxt.stroke()
                        cxt.closePath()
                    }
                    cxt.restore()
                    cxt.save()
        
                    // 获取时间
                    var time = new Date()
                    var hour = time.getHours()
                    var min = time.getMinutes()
                    var sec = time.getSeconds()
                        // 如果时间大于12，减去12
                    hour = hour > 12 ? hour - 12 : hour
                        //绘制秒针
                    cxt.beginPath()
                        //根据秒针的时间进行旋转
                    cxt.rotate(2 * Math.PI / 60 * sec)
                    cxt.moveTo(-30, 0)
                    cxt.lineTo(170, 0)
                    cxt.lineWidth = 2;
                    cxt.strokeStyle = 'pink'
                    cxt.stroke()
                    cxt.closePath()
                        //恢复再保留
                    cxt.restore()
                    cxt.save()
        
        
                    //绘制分针
                    cxt.beginPath()
                        //根据分针的时间进行旋转
                    cxt.rotate(2 * Math.PI / 60 * min + 2 * Math.PI / 3600 * sec)
                    cxt.moveTo(-20, 0)
                    cxt.lineTo(150, 0)
                    cxt.lineWidth = 4;
                    cxt.strokeStyle = 'darkblue'
                    cxt.stroke()
                    cxt.closePath()
                    cxt.restore()
                    cxt.save()
        
                    //绘制时针
                    cxt.beginPath()
                        //根据时针的时间进行旋转
                    cxt.rotate(2 * Math.PI / 12 * hour + 2 * Math.PI / 60 / 12 * min + 2 * Math.PI / 12 / 60 / 60 * sec)
                    cxt.moveTo(-10, 0)
                    cxt.lineTo(120, 0)
                    cxt.lineWidth = 6;
                    cxt.strokeStyle = 'deepskyblue'
                    cxt.stroke()
                    cxt.closePath()
                        // cxt.restore()
                        // cxt.save()
        
                    //中间小圆点
                    cxt.beginPath()
                    cxt.arc(0, 0, 10, 0, 2 * Math.PI)
                    cxt.fillStyle = 'black'
                    cxt.fill()
                    cxt.closePath()
        
                    cxt.restore()
                    cxt.restore()
        
                }
                setInterval(function() {
                    renderClock()
                }, 1000)
            </script>
        </body>
        
        </html>` }} />
    );
  };
