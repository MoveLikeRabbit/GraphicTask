export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rotating Cube</title>
            <style>
                body,
                html {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    perspective: 1000px;
                }
        
                .cube-container {
                    position: relative; /* 修改为相对定位 */
                    width: 400px; /* 调整大小 */
                    height: 400px; /* 调整大小 */
                    perspective: 1000px;
                }
        
                .cube {
                    width: 100%;
                    height: 100%;
                    position: absolute; /* 修改为绝对定位 */
                    top: 0;
                    left: 0;
                    transform-style: preserve-3d;
                    transition: transform 0.5s ease; 
                }
        
                .face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: hsla(160, 100%, 89%, 0.5);
                    border: 2px solid black;
                    text-align: center;
                    line-height: 400px;
                    font-size: 24px;
                    font-weight: bold;
                }
        
                .front {
                    transform: translateZ(200px);
                }
        
                .back {
                    transform: rotateY(180deg) translateZ(200px);
                }
        
                .right {
                    transform: rotateY(90deg) translateZ(200px);
                }
        
                .left {
                    transform: rotateY(-90deg) translateZ(200px);
                }
        
                .top {
                    transform: rotateX(90deg) translateZ(200px);
                }
        
                .bottom {
                    transform: rotateX(-90deg) translateZ(200px);
                }
        
                .cube-container:hover .cube {
                    animation: rotate 5s linear infinite;
                }
        
                @keyframes rotate {
                    from {
                        transform: rotateY(0deg) rotateX(0deg);
                    }
        
                    to {
                        transform: rotateY(360deg) rotateX(360deg);
                    }
                }
            </style>
        </head>
        
        <body>
            <div class="cube-container">
                <div class="cube" id="cube">
                    <div class="face front">01</div>
                    <div class="face back">02</div>
                    <div class="face right">03</div>
                    <div class="face left">04</div>
                    <div class="face top">05</div>
                    <div class="face bottom">06</div>
                </div>
            </div>
        
        
        
        </body>
        
        </html>` }} />
    );
  };
