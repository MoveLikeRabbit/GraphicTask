
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>3Dbox</title>
        <style>
             .container {
                perspective: 500px;  
                margin: 50px; 
            }
            .box {
                margin: 0 auto;
                margin-top: 200px;
                width: 200px;
                height: 200px;
                background: orchid;
                position: relative;
                transition: all 5s  ease;
                transform-style: preserve-3d; 
                transform-origin: center center 100px;
    
            }
            .box:hover {
                transform: rotateX(360deg)rotateY(360deg)rotateZ(360deg);
            }
            .box div{
                width: 200px;
                height: 200px;
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 30px;
                text-align: center;
                line-height: 200px;
            }
             /* top */
            .top{
                top: -200px;
                background: rgba(248, 130, 130, 0.5);
                transform-origin: bottom;
                transform: rotateX(-90deg)
            }
            /* bottom */
            .bottom{
                top: 200px;
                background: rgba(142, 250, 142, 0.5);
                transform-origin: top;
                transform: rotateX(90deg)
            }
            /* right */
            .right{
                right: -200px;
                background: rgba(148, 148, 246, 0.5);
                transform-origin: left;
                transform: rotateY(-90deg)
            }
            /* left */
            .left{
                right: 200px;
                background: rgba(248, 248, 144, 0.5);
                transform-origin: right;
                transform: rotateY(90deg)
            }
            /* front */
            .front{
                background: rgba(248, 167, 248, 0.5);
                transform: translate3d(0, 0, 200px);
            }
            /* behind */
            .behind{
                background: rgba(0, 255, 555, 0.5);
                transform: translate3d(0, 0, 0);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="box">
                <div class="top">1</div>  
                <div class="bottom">2</div>           
                <div class="right">3</div>
                <div class="left">4</div>  
                <div class="front">5</div>          
                <div class="behind">6</div>                 
            </div>
        </div>
    </body>
    </html>` }} />
    );
  };
