
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>canvas绘制时钟</title>
            <style>
            * {
                padding: 0;
                margin: 0;
            }        
            html,body {
                height: 100%;
            }           
            body {               
                display: flex;
                justify-content: center;
                align-items: center;
            }           
            .clock-container {
                width: 500px;
                height: 500px;
                background-color: white;
                border-radius: 300px;
            }           
            .clock-container .panel-container {
                height: 440px;
                border: 30px solid rgb(255, 255, 255);
                border-radius: 300px;
                box-shadow: 0 0 20px 0 rgba(7, 7, 7, 0.459) inset;
            
                display: flex;
                align-items: center;
                justify-content: center;
            }           
            .clock-container .panel-container .box {
                position: relative;
                width: 400px;
                height: 400px;
                display: flex;
                align-items: center;
            }            
            .clock-container .panel-container .box .num,.point,.hand {
                position: absolute;
                font-size: 30px;
                line-height: 30px;
                height: 30px;
                font-family: 'Rubik', sans-serif;
                width: 100%;
            }           
            .clock-container .panel-container .box .num span {
                display: inline-block;
                width: 30px;
            }
            .clock-container .panel-container .box .num:nth-child(1){
                transform: rotate(120deg);
            }
            .clock-container .panel-container .box .num:nth-child(2){
                transform: rotate(150deg);
            }
            .clock-container .panel-container .box .num:nth-child(3){
                transform: rotate(180deg);
            }
            .clock-container .panel-container .box .num:nth-child(4){
                transform: rotate(210deg);
            }
            .clock-container .panel-container .box .num:nth-child(5){
                transform: rotate(240deg);
            }
            .clock-container .panel-container .box .num:nth-child(6){
                transform: rotate(270deg);
            }
            .clock-container .panel-container .box .num:nth-child(7){
                transform: rotate(300deg);
            }
            .clock-container .panel-container .box .num:nth-child(8){
                transform: rotate(330deg);
            }
            .clock-container .panel-container .box .num:nth-child(9){
                transform: rotate(360deg);
            }
            .clock-container .panel-container .box .num:nth-child(10){
                transform: rotate(390deg);
            }
            .clock-container .panel-container .box .num:nth-child(11){
                transform: rotate(420deg);
            }
            .clock-container .panel-container .box .num:nth-child(12){
                transform: rotate(450deg);
            }
            .clock-container .panel-container .box .num:nth-child(1) span{
                transform: rotate(-120deg);
            }
            .clock-container .panel-container .box .num:nth-child(2) span{
                transform: rotate(-150deg);
            }
            .clock-container .panel-container .box .num:nth-child(3) span{
                transform: rotate(-180deg);
            }
            .clock-container .panel-container .box .num:nth-child(4) span{
                transform: rotate(-210deg);
            }
            .clock-container .panel-container .box .num:nth-child(5) span{
                transform: rotate(-240deg);
            }
            .clock-container .panel-container .box .num:nth-child(6) span{
                transform: rotate(-270deg);
            }
            .clock-container .panel-container .box .num:nth-child(7) span{
                transform: rotate(-300deg);
            }
            .clock-container .panel-container .box .num:nth-child(8) span{
                transform: rotate(-330deg);
            }
            .clock-container .panel-container .box .num:nth-child(9) span{
                transform: rotate(-360deg);
            }
            .clock-container .panel-container .box .num:nth-child(10) span{
                transform: rotate(-390deg);
            }
            .clock-container .panel-container .box .num:nth-child(11) span{
                transform: rotate(-420deg);
            }
            .clock-container .panel-container .box .num:nth-child(12) span{
                transform: rotate(-450deg);
            }
            
            .clock-container .panel-container .box .point{
                text-align: center;
            }
            
            .clock-container .panel-container .box .point span {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 20px;
                background-color: black;
            }
            .clock-container .panel-container .box .hand{
                display: flex;
                align-items: center;
            }
            .clock-container .panel-container .box .hand span {
                background-color: black;
                display: block;
            }
            
            .clock-container .panel-container .box .hand.second span {
                width: calc(50% - 50px);
                height: 2px;
                border-radius: 4px;
                margin-left: 50px;
            }
            .clock-container .panel-container .box .hand.minute span {
                width: calc(50% - 70px);
                height: 4px;
                border-radius: 4px;
                margin-left: 70px;
            }
            .clock-container .panel-container .box .hand.hour span {
                width: calc(50% - 90px);
                height: 8px;
                border-radius: 4px;
                margin-left: 90px;
            }
            
            .clock-container .panel-container .box .hand.second {
                animation: clock-run 60s linear infinite;
            }
            .clock-container .panel-container .box .hand.minute {
                animation: clock-run 3600s linear infinite;
            }
            .clock-container .panel-container .box .hand.hour {
                animation: clock-run 86400s linear infinite;
            }
            
            @keyframes clock-run {
                0% {
                transform: rotate(0deg);
                }
                100% {
                transform: rotate(360deg);
                }
            }
            </style>
        </head>

        <body>
            <div class="clock-container">
                <div class="panel-container">
                    <div class="box">
                        <div class="num"><span>1</span></div>
                        <div class="num"><span>2</span></div>
                        <div class="num"><span>3</span></div>
                        <div class="num"><span>4</span></div>
                        <div class="num"><span>5</span></div>
                        <div class="num"><span>6</span></div>
                        <div class="num"><span>7</span></div>
                        <div class="num"><span>8</span></div>
                        <div class="num"><span>9</span></div>
                        <div class="num"><span>10</span></div>
                        <div class="num"><span>11</span></div>
                        <div class="num"><span>12</span></div>
                        <div class="point"><span></span></div>
                        <div class="hand second"><span></span></div>
                        <div class="hand minute"><span></span></div>
                        <div class="hand hour"><span></span></div>
                    </div>
                </div>
            </div>
        </body>
        </html>` }} />
    );
  };
