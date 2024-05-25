
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
        <!DOCTYPE html>  
<html lang="en">  
<head>  
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<title>Hoverable 3D Rotating Cube</title>  
<style>  
body, html {  
    height: 100%;  
    margin: 0;  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    background-color: #f0f0f0; /* Optional background color */  
  }  
  .scene {  
    perspective: 1000px;  
    perspective-origin: 50% 100px;  
    width: 200px;  
    height: 200px;  
    margin: 50px;  
  }  
    
  .cube {  
    position: relative;  
    width: 100%;  
    height: 100%;  
    transform-style: preserve-3d;  
    transition: transform 1s;  
  }  
    
  .face {  
    position: absolute;  
    width: 200px;  
    height: 200px;  
    border: 1px solid #000;  
    box-sizing: border-box;  
    color: white;  
    font-size: 3em;  
    text-align: center;  
    line-height: 200px;  
    user-select: none;  
    opacity: 0.7; /* Semitransparent */  
  }  
    
  /* Faces with different colors */  
  .front { background: rgba(255, 0, 0, 0.5); transform: translateZ(100px); }  
  .back { background: rgba(0, 255, 0, 0.5); transform: rotateY(180deg) translateZ(100px); }  
  .left { background: rgba(0, 0, 255, 0.5); transform: rotateY(-90deg) translateZ(100px); }  
  .right { background: rgba(255, 255, 0, 0.5); transform: rotateY(90deg) translateZ(100px); }  
  .top { background: rgba(0, 255, 255, 0.5); transform: rotateX(90deg) translateZ(100px); }  
  .bottom { background: rgba(255, 0, 255, 0.5); transform: rotateX(-90deg) translateZ(100px); }  
    
  /* Rotate the cube on hover */  
  .scene:hover .cube {  
    transform: rotateX(360deg) rotateY(360deg);  
  }  
</style>  
</head>  
<body>  
  
<div class="scene">  
  <div class="cube">  
    <div class="face front">1</div>  
    <div class="face back">2</div>  
    <div class="face left">3</div>  
    <div class="face right">4</div>  
    <div class="face top">5</div>  
    <div class="face bottom">6</div>  
  </div>  
</div>  
  
</body>  
</html>
        
        
        
        ` }} />
    );
  };