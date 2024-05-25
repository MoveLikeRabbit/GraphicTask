export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cube</title>
            <style>
            .bigbox{
                perspective: 1000px;   
            }
            .box{
                margin: 0 auto;
                margin-top: 200px;
                width: 200px;
                height: 200px;
                background: red;
                position: relative;
                transition: all 5s  ease;
                transform-style: preserve-3d; 
                transform-origin: center center 100px;
        
            }
            .box:hover{
                transform: rotateX(360deg)rotateY(360deg)rotateZ(360deg);
            }
            .box div{
                width: 200px;
                height: 200px;
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 50px;
                text-align: center;
                line-height: 200px;
            }
            /* top */
            .box div:nth-child(1){
                top: -200px;
                background: rgba(255, 0, 0, 0.5);
                transform-origin: bottom;
                transform: rotateX(-90deg)
            }
            /* bottom */
            .box div:nth-child(2){
                top: 200px;
                background: rgba(0, 255, 0, 0.5);
                transform-origin: top;
                transform: rotateX(90deg)
            }
            /* right */
            .box div:nth-child(3){
                right: -200px;
                background: rgba(0, 0, 255, 0.5);
                transform-origin: left;
                transform: rotateY(-90deg)
            }
            /* left */
            .box div:nth-child(4){
                left: -200px;
                background: rgba(255, 255, 0, 0.5);
                transform-origin: right;
                transform: rotateY(90deg)
            }
            /* font */
            .box div:nth-child(5){
                background: rgba(255, 0, 255, 0.5);
                transform: translate3d(0, 0, 200px);
            }
            /* behind */
            .box div:nth-child(6){
                background: rgba(0, 255, 555, 0.5);
                transform: translate3d(0, 0, 0);
            }
            h3{
                text-align: center;
            }
            </style>
        
            <body>
                <h3>将鼠标移入盒子看3D效果</h3>
                <div class="bigbox">
                    <div class="box">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                        <div>04</div>
                        <div>05</div>
                        <div>06</div>
                    </div>
                </div>
            </body>
        </html>` }} />
    );
  };
