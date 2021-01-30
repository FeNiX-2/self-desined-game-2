
var Phoenix,Phoenix_running
var coin,coinImage, omen, omenImage
var FoodGroup, omenGroup
var score;
var survivalTime=0;
var ground;
var obstaceeeeeee;
var PLAY;
var END;
var gameState=PLAY;
var chances;
var score=0;
var sound_wav
function preload(){
  
  
  Phoenix_running =loadImage("image/phoenix.png");
  chances_he=loadImage("image/chances.png")
  coinImage = loadImage("image/coin.png");
  obstaceImage = loadImage("image/omen.png");
  backgrounds_image= loadImage("image/background.jpg")
  sound_wav=loadSound("image/SOUND.wav")
 
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  
  background2=createSprite(width/2,height/2);
  background2.addImage("backgrounds_image",backgrounds_image)
  background2.scale=2
  Phoenix = createSprite(80,315,10,10);
  Phoenix.addAnimation("Phoenix",Phoenix_running);
  Phoenix.scale = 0.2;
  ground = createSprite(width/2,height-10,width,20);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  score = 0;
  survialTime = 0;
  FoodGroup = createGroup();
  omenGroup = createGroup();
}


function draw() {
  
  background("yellow")
  stroke("balck");
  textSize(20);
  fill("black");
  text("score"+score,300,100)
  Phoenix.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+ survivalTime,100,50);
  Phoenix.collide(ground);
  
  if(gameState ===PLAY){
    if(FoodGroup.isTouching(Phoenix)) {
      FoodGroup.destroyEach();
      sound_wav.play();
      score = score+1;
    }
     if (ground.x<800){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& Phoenix.y >= 300) {
        Phoenix.velocityY = -11;
    }
    Phoenix.velocityY=Phoenix.velocityY+0.4 
    
    if(keyDown("right")){
      Phoenix.x+=5
    }
    if(keyDown("left")){
      Phoenix.x-=5
    }
    if(Phoenix.isTouching(omenGroup)){
        
         gameState = END;
      
    }
    
  }

  if(gameState ===END){
    if(Phoenix.isTouching(omenGroup)){
   stroke("red");
    fill("red");
       textSize(30);
  text("Game Over", 110, 200);
   
   stroke("black");
    fill("black");
       textSize(30);
  text("Phoenix is dead", 100, 240); 
    Phoenix.velocityY=0;
    omen.velocityX=0;
    coin.visible=false;
    omen.visible=0;
  }   
  }
  
  
 food();
  omens();
  drawSprites();
  FoodGroup.lifetime=100;
omens.lifetime=100;
}

function food() {
  if (frameCount % 80 === 0) {
    coin = createSprite(300,170, 50, 50 )
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.1;
    coin.velocityX =-4;           
    coin.lifetime = 220;
    
    
    
    FoodGroup.add(coin);
  }
  
}
function omens(){
  if (frameCount%200 === 0){
    omen=createSprite(400,330,20,20);
    omen.addImage("obs",obstaceImage);
    omen.velocityX=-6;
  omen.scale=0.1;
    omenGroup.add(omen);
  }
  }



