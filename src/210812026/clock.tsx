
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
     
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            .box{
               display: flex;
               justify-content: center;
               align-items: center;
               position: relative;
               margin: 450px auto;
               transform-style: preserve-3d;
               
            }
            .boxmax{
                perspective: 1000px;
            }
            .box:hover{
                animation: move  linear 3s infinite ;
            }
            @keyframes move {
                 0%{
                    transform: rotate3d(0);
                }
                25%{
                    transform: rotate3d(1,1,1,90deg);
                }
                
                50%{
                    transform: rotate3d(1,1,1,180deg);
                }
                75%{
                    transform: rotate3d(1,1,1,270deg);
                }
                100%{
                    transform: rotate3d(1,1,1,360deg);
                }
                
            }
            .boxmini{
                width: 300px;
                height: 300px;
                /* top: 100px;
                left: 700px; */
                background-color: aliceblue;
                border: 1px sienna solid;
                line-height: 300px;
                font-size: 50px;
                
            }
            .box1{
                position: absolute;
                background-color: purple;
                opacity: .3;
               
            } 
            .box2{
                position: absolute;
                /* left: 600px;
                top:100px; */
                background-color: yellow;
                transform: rotateY(-90deg);
                transform-origin: 0 center;
                opacity: .3;
            }
            .box3{
                position: absolute;
                /* left: 0;
                top:100px; */
                background-color: green;
                transform: rotateY(90deg);
                transform-origin:right center ;
                opacity: .3;
            }
            
            .box4{
                position: absolute;
                /* top: 100px;
                left: 300px; */
                background-color: pink;
                transform: translateZ(300px);
                opacity: .3;
            }
            .box5{
                position: absolute;
                /* top:400px;
                left: 300px; */
                background-color: gray;
                transform: rotateX(90deg);
                transform-origin: center top;
                opacity: .3;
            }
            .box6{
                position: absolute;
                /* top: -200px;
                left: 300px; */
                background-color: purple;
                transform: rotateX(-90deg);
                transform-origin: bottom center;
                opacity: .3;
            } 
        
        
        
        
        
        
        
        </style>
        <body>
            <div class="boxmax">
        
            
            <div class="box">
                <div class="box1 boxmini">1</div>
                <div class="box2 boxmini">2</div>
                <div class="box3 boxmini">3</div>
                <div class="box4 boxmini">4</div>
                <div class="box5 boxmini">5</div>
                <div class="box6 boxmini">6</div>
               
            </div>
        </div>
            
        </body>
        </html>` }} />
    );
  };
