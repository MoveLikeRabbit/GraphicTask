export default () => {
    return (
        <div dangerouslySetInnerHTML={{__html:`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            .content{
                perspective:500px;
            }
           .box{
            width:200px;
            height:200px;
            margin:250px auto;
            position:relative;
            transition: 5s;
            transform-style:preserve-3d;
            transform-origin: center center 100px;
           }
            .box div{
            width:200px;
            height:200px;
            background:rgba(252, 188, 216, 0.253);
            font-size:50px;
            position:absolute;
            left:0px;
            top:0px;
            text-align: center;
            line-height: 200px;
           }
           .box div:nth-child(1){
            background:rgb(179, 204, 251,70%);
           }
           .box div:nth-child(2){
            transform:translateZ(-200px) rotateY(180deg);
            background:rgb(186, 232, 186,70%);
           }
           .box div:nth-child(3){
            transform:translateX(-200px) rotateY(-90deg);
            transform-origin:right center;
            background:rgb(196, 196, 237,70%);
           }
           .box div:nth-child(4){
            transform:translateX(200px) rotateY(90deg);
            transform-origin:left center;
            background:rgb(253, 253, 210,70%);
           }
           .box div:nth-child(5){
            transform:translateY(-200px) rotateX(90deg);
            transform-origin:center bottom;
            background:rgb(248, 215, 176,70%);
           }
           .box div:nth-child(6){
            transform:translateY(200px) rotateX(-90deg);
            transform-origin:center top;
            background:rgb(246, 198, 246,70%);
           }
           .box:hover{
            transform:rotateX(-360deg) rotateY(-360deg) rotateZ(-360deg);
           }
        </style>
        <body>
            <div class="content">
                <div class="box">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>   
        </body>
        </html>`}}/>
    );
};