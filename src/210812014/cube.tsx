
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                @keyframes spin{
            0%{
                transform: rotateY(0)rotateX(0deg)rotateZ(0deg);
            }
        
            20%{
                transform: rotateY(360deg)rotateX(0deg)rotateZ(0deg);
            }
            40%{
                transform: rotateY(0deg)rotateX(0deg)rotateZ(0deg);
            }
            60%{
                transform: rotateY(0deg)rotateX(360deg)rotateZ(0deg);
            }
            80%{
                transform: rotateY(0deg)rotateX(0deg)rotateZ(0deg);
            }
            100%{
                transform: rotateY(0deg)rotateX(0deg)rotateZ(360deg);
            }
        }
        
        .content{
            width:200px;
            height:200px;
            padding-top: 100px;
            perspective: 800px;
            perspective-origin: 50% 50%;
            margin: 0 auto;
            padding:200px;
        
        }
        .box{
            transform-style: preserve-3d;
            transform: rotateX(45deg);
            width:100%;
            height:100%;
            position: relative;
            align-items: center;
            font-size: 50px;
            color:rgb(44, 44, 44);
            text-align:center;
            animation: spin 10s linear infinite;
        }
        .face{
            width:100%;
            height:100%;
            opacity: 0.5;
            position: absolute;
        }
        .front{
        background-color:rgb(255, 255, 133);
        transform:  translateZ(100px);
        }
        
        .back{
            background-color: rgb(241, 149, 149);
            transform: translateZ(-100px) rotateY(180deg);
        }
        .left{
            background-color: rgb(150, 231, 227);
            transform: rotateY(-90deg) translateZ(100px);
        }
            
        .right{
            background-color: rgb(170, 236, 171);
            transform: rotateY(90deg) translateZ(100px);
        }
        .top{
            background-color:rgb(159, 164, 238);
            transform: rotateX(90deg) translateZ(100px) ;
        }
            
        .bottom{
            background-color:rgb(159, 243, 159);
            transform: rotateX(-90deg) translateZ(100px) ;
        }
            </style>
        </head>
        <body>
            <div class="content">
            <div class="box">
                <div class="face top"><p>1</p></div>
                <div class="face bottom"><p>2</p></div>
                <div class="face left"><p>3</p></div>
                <div class="face right"><p>4</p></div>
                <div class="face front"><p>5</p></div>
                <div class="face back"><p>6</p></div>
            </div>
        </div>
        </body>
        </html>` }} />
    );
  };
