
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body{
                    background-color: rgb(124, 138, 125);
                    margin: 0;
                }
                #clock{
                    width: 400px;
                    height: 400px;
                    background-color: white;
                    border: solid 10px black;
                    border-radius: 50%;
                    margin: 100px auto;
                    position: relative;
                }
                #hours{
                    list-style: none;
                    position: absolute;
                    padding: 0;
                    margin-top: 90px;
                }
        
                li{
                    width: 200px;
                    margin-top: 100px;
                    transform-origin: right;
                    position: absolute;
                }
                #hour12{
                    transform: rotate(90deg);
                }
                #hour1{
                    transform: rotate(120deg);
                }
                #hour2{
                    transform: rotate(150deg);
                }
                #hour3{
                    transform: rotate(180deg);
                }
                #hour4{
                    transform: rotate(210deg);
                }
                #hour5{
                    transform: rotate(240deg);
                }
                #hour6{
                    transform: rotate(270deg);
                }
                #hour7{
                    transform: rotate(300deg);
                }
                #hour8{
                    transform: rotate(330deg);
                }
                #hour9{
                    transform: rotate(360deg);
                }
                #hour10{
                    transform: rotate(60deg);
                }
                #hour11{
                    transform: rotate(30deg);
                }
        
                p{
                    margin: 0;
                    width: 20px;
                    display: block;
                    text-align: center;
                }
        
                .hour12{
                    transform: rotate(-90deg);
                }
                .hour1{
                    transform: rotate(-120deg);
                }
                .hour2{
                    transform: rotate(-150deg);
                }
                .hour3{
                    transform: rotate(-180deg);
                }
                .hour4{
                    transform: rotate(-210deg);
                }
                .hour5{
                    transform: rotate(-240deg);
                }
                .hour6{
                    transform: rotate(-270deg);
                }
                .hour7{
                    transform: rotate(-300deg);
                }
                .hour8{
                    transform: rotate(-330deg);
                }
                .hour9{
                    transform: rotate(-360deg);
                }
                .hour10{
                    transform: rotate(-60deg);
                }
                .hour11{
                    transform: rotate(-30deg);
                }
        
                .shizhen,.fenzhen,.miaozhen{
                    position: absolute;
                    width: 400px;
                    height: 400px;
                }
                .sz,.fz,.mz{
                    transform-origin:bottom;
                }
                /* :hover{
                transform: rotate(360deg);
                } */
                .sz{
                    width: 20px;
                    height: 120px;
                    margin-top: 80px;
                    border-radius: 20px;
                    background-color: black;
                    margin-left: 190px;
        
                    animation: run 30s linear infinite;
                }
                .fz{
                    width: 15px;
                    height: 160px;
                    margin-top: 40px;
                    border-radius: 20px;
                    background-color: rgb(80, 80, 80);
                    margin-left: 192.5px;
                    animation: run 22s linear infinite;
                }
                .mz{
                    width: 5px;
                    height: 170px;
                    margin-top: 30px;
                    border-radius: 20px;
                    background-color: rgb(226, 32, 32);
                    margin-left: 197.5px;
        
                    animation: run 10s linear infinite;
                }
        
                .xiaoyuan{
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    margin-top: 185px;
                    background-color: black;
                    border-radius: 50%;
                    margin-left: 185px;
                }
        
                @keyframes run{
                        from{transform: rotate(0deg);}
                        to{transform: rotate(360deg);}
                    }
            </style>
        </head>
            
        <body>
            <div id="clock">
                <ul id="hours">
                    <li id="hour12"><p class="hour12">12</p></li>
                    <li id="hour1"><p class="hour1">1</p></li>
                    <li id="hour2"><p class="hour2">2</p></li>
                    <li id="hour3"><p class="hour3">3</p></li>
                    <li id="hour4"><p class="hour4">4</p></li>
                    <li id="hour5"><p class="hour5">5</p></li>
                    <li id="hour6"><p class="hour6">6</p></li>
                    <li id="hour7"><p class="hour7">7</p></li>
                    <li id="hour8"><p class="hour8">8</p></li>
                    <li id="hour9"><p class="hour9">9</p></li>
                    <li id="hour10"><p class="hour10">10</p></li>
                    <li id="hour11"><p class="hour11">11</p></li>
                </ul>
        
                
                <div class="miaozhen">
                    <div class="mz"></div>
                </div>
        
                <div class="fenzhen">
                    <div class="fz"></div>
                </div>
                
                <div class="shizhen">
                    <div class="sz"></div>
                </div>
        
                <div class="xiaoyuan">
                </div>
                
            </div>
        
            
        </body>
        </html>` }} />
    );
  };
