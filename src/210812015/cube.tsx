
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rotating 3D Cube</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
        
            .scene {
                width: 200px;
                height: 200px;
                perspective: 600px;
            }
        
            .cube {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
                animation: rotateCube 5s infinite linear;
            }
        
            .cube div {
                position: absolute;
                width: 200px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 48px;
                font-weight: bold;
                color: white;
                border: 2px solid #333;
            }
        
            .front  { transform: translateZ(100px); background: rgba(255, 87, 51, 0.5); }
            .back   { transform: rotateY(180deg) translateZ(100px); background: rgba(51, 193, 255, 0.5); }
            .right  { transform: rotateY(90deg) translateZ(100px); background: rgba(117, 255, 51, 0.5); }
            .left   { transform: rotateY(-90deg) translateZ(100px); background: rgba(255, 51, 168, 0.5); }
            .top    { transform: rotateX(90deg) translateZ(100px); background: rgba(255, 215, 51, 0.5); }
            .bottom { transform: rotateX(-90deg) translateZ(100px); background: rgba(142, 51, 255, 0.5); }
        
            @keyframes rotateCube {
                from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
            }
        </style>
        </head>
        <body>
        <div class="scene">
            <div class="cube">
                <div class="front">1</div>
                <div class="back">2</div>
                <div class="right">3</div>
                <div class="left">4</div>
                <div class="top">5</div>
                <div class="bottom">6</div>
            </div>
        </div>
        </body>
        </html>
        
        
        ` }} />
    );
  };
