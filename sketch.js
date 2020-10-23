
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score, survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(400, 400)

//create the monkey
monkey = createSprite(80, 315, 20, 20)
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;

bananaGroup = createGroup();
obstacleGroup = createGroup();

//create the ground
ground = createSprite(400, 350, 900, 10);
if (ground.x === 0) {
ground.velocityX = -4; 
}
ground.x = ground.width /2;
}


function draw() {
background('lightGreen')
text('score: ' + score, 200, 20);     
  
bananas();
obstacles();
  
monkey.velocityY = monkey.velocityY + 1.3;
  
bananaGroup.setLifetimeEach(-10);
obstacleGroup.setLifetimeEach(-10)
  
if (keyDown('space')) {
  monkey.velocityY = -10;
}
  
if (monkey.y < 0) {
  monkey.y = 315; 
}
  
if (monkey.isTouching(obstacleGroup)) {
  monkey.velocityX = 0;
  monkey.velocityY = 0;
  obstacleGroup.destroyEach();
  bananaGroup.destroyEach();
  obstacleGroup.velocityX = 0;
  bananaGroup.velocityX = 0;
}

monkey.collide(ground);

drawSprites();
}

function bananas() {
if (frameCount % 200 === 0) {
  banana = createSprite(random(410, 400), 
  random(100, 250), 20, 20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -6;
  
  bananaGroup.add(banana);
}
}

function obstacles() {
if (frameCount % 300 === 0) {
  obstacle = createSprite(410, 330, 20, 20);
  obstacle.addImage(obstaceImage)
  obstacle.scale = 0.2;
  obstacle.velocityX = -6;
  
  obstacleGroup.add(obstacle);
}
}



