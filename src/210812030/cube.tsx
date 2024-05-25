
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            @keyframes run {
                    0% {
                        transform: rotateY(0);
                    }
        
                    100% {
                        transform: rotateY(360deg);
                    }
                }
        
            #bigbox{
                perspective: 600px; /* 设置透视属性 */
            }    
            #box{
                transform-style: preserve-3d;
                margin: 0 auto;
                margin-top: 200px;
                width: 200px;
                height: 200px;
                text-align: center;
                line-height: 100px;
                position: relative;
                transition: all 5s  ease;
                transform-origin: center center 0px;
            }
            #box:hover{
                transform: rotateX(-360deg)rotateY(-360deg)rotateZ(-360deg);
            }
            #box1{
                background-color: red;
                opacity: 0.5;
                width: 200px;
                height: 200px;
                position: absolute;
            }
            #box2{
                background-color: rgb(50, 114, 170);
                opacity: 0.5;
                width: 200px;
                height: 200px;
                position: absolute;
                transform-origin:right;
                transform:rotateY(-90deg) ;
        
            }
            #box3{
                background-color: rgb(62, 191, 83);
                opacity: 0.5;
                width: 200px;
                height: 200px;
                position: absolute;
                transform-origin:left;
                transform:rotateY(90deg);
            }
            #box4{
                background-color: rgb(255, 242, 0);
                opacity: 0.5;
                width: 200px;
                height: 200px;
                position: absolute;
                transform-origin:bottom;
                transform:rotateX(90deg);
            }
            #box5{
                background-color: rgb(235, 113, 48);
                opacity: 0.5;
                width: 200px;
                height: 200px;
                position: absolute;
                transform-origin:Top;
                transform:rotateX(-90deg) ;
            }
            #box6{
                background-color: rgb(217, 0, 255);
                opacity: 0.5;
                width: 200px;
                height: 200px;
                position: absolute;
                transform: translate3d(0, 0, -200px);
            }
        </style>
        
        <body>
            <div id="bigbox">
                <div id="box">
                    <div id="box1">01</div>
                    <div id="box2">02</div>
                    <div id="box3">03</div>
                    <div id="box4">04</div>
                    <div id="box5">05</div>
                    <div id="box6">06</div>
                </div>
            </div>
            
        </body>
        </html>` }} />
    );
  };
