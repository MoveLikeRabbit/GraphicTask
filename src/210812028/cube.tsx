
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
        <html>
        <head>
            <title>Hello</title>
            <style>
                *{
                    margin: 0;
                    padding: 0;
                }
                .parent{
                    position: relative;
                    height: 400px;
                    width:80%;
                    margin-left: 10%;
                    transform-style: preserve-3d;
                    animation: test1 8s ease infinite;
                }
                .box{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-top: -100px;
                    margin-left: -100px;
                    width:200px;
                    height: 200px;
                    color: #FFFFFF;
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 200px;
                    text-align: center;
                    opacity: 0.8;
                }
                .box1{
                    background: #0023FF;
                    transform: rotateY(90deg) translateZ(-100px);
                }
                .box2{
                    background: #944AFF;
                    transform: rotateY(90deg) translateZ(100px);
                }
                .box3{
                    background: #FF4363;
                    transform: rotateX(90deg) translateZ(-100px);
                }
                .box4{
                    background: #FED800;
                    transform: rotateX(90deg) translateZ(100px);
                }
                .box5{
                    background: #00FEF6;
                    transform: translateZ(-100px);
                }
                .box6{
                    background: #00DF0E;
                    transform: translateZ(100px);
                }
                @keyframes test1 {
                    0%{
                        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                    }
                    100%{
                        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
                    }
                }
            </style>
        </head>
        <body>
        <div class="parent animation" id="css3d">
            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
        </div>
        </body>
        </html>` }} />
    );
  };
