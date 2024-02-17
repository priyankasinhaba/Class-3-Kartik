var GameOn
var rocket
var playbutton,
aboutbutton,
asteroid,
asteroid2,
asteroid3;
var Gamestate = "1";
var score=0;

function preload(){
GameOn = loadImage("assets/Game On.gif");
asteroid = loadImage("assets/asteroid.png")
asteroid2 = loadImage("assets/Asteroid2.webp")
asteroid3 = loadImage("assets/Asteroid3.jpg")
spacebg = loadImage("assets/spaceimg.jpg")
rocketImg = loadImage("assets/rocket.jpg")
laserImg = loadImage("assets/laser.png")
ufo1Img=loadImage("assets/asteroid.png");
  ufo4Img=loadImage("assets/Asteroid2.webp");
  ufo3Img=loadImage("assets/Asteroid3.jpg");
  ufo2Img=loadImage("assets/Asteroid4.webp");
}

function setup(){

createCanvas(500,500);
playbutton = createImg("assets/play.png");
aboutbutton = createImg("assets/about.png");
playbutton.position(400,400);
playbutton.size(70,70)
playbutton.hide();
aboutbutton.position(30,30);
aboutbutton.size(50,50)
aboutbutton.hide();
score=0;
  obstacleGroup=new Group();
  laserGroup=new Group();
}

// gamestate 1 is splash screen, 2 is hold, 3 is play, 4 is about, 
function draw(){
if(Gamestate === "1"){
background(GameOn);
playbutton.show();
aboutbutton.show();
score.visible=false;
}
playbutton.mousePressed(()=>{

playbutton.hide();
aboutbutton.hide();
Gamestate="2";

})

aboutbutton.mousePressed(()=>{

    playbutton.hide();
    aboutbutton.hide();
    Gamestate="4";
    
    })
if (Gamestate==="4"){
aboutgame();
}
if (Gamestate==="2"){
    bg=createSprite(100,100,900,600);
    bg.addImage(spacebg)
    rocket=createSprite(200,400)
    rocket.addImage(rocketImg);
    rocket.scale = 0.1
    Gamestate="3";
}
if(Gamestate==="3"){
    rocket.visible=true;
    bg.velocityY=5;
    if(bg.y>1000){
        bg.y=height/2
    }

if(keyDown("LEFT_ARROW")){
if(rocket.x>25){
    rocket.x=rocket.x-10
}
}
if(keyDown("RIGHT_ARROW")){
    if(rocket.x<450){
        rocket.x=rocket.x+10
    }
    }
    if(keyDown("space")){
       spawnlaser();
       rocket.x=laser.x
        }

    }
   
     
     
drawSprites()



}
function aboutgame(){

swal({
title:"How To Play",
text:"control the rocket , hit the alien spaceships and survive the asteroids .",
textAllign:"center",
confirmButtonText:"Let's Play ",
confirmButtonColor:"red",

},
   function ()  {
        Gamestate = "1"
    }
)
}
