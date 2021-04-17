
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 ironimg=loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  iron=createSprite(50,500);
  iron.addImage(ironimg)
  iron.scale=0.3;
}

function draw() {
  if(keyDown("w")){
    iron.velocityY=iron.velocityY-0.5;
  }
  if(keyDown("s")){
    iron.velocityY=iron.velocityY+0.5
  }
  if(keyDown("a")){
    iron.velocityX=iron.velocityX-0.5;
  }
  if(keyDown("d")){
    iron.velocityX=iron.velocityX+0.5;
  }
    
    drawSprites();
   
}

