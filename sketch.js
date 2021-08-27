var aladdin;
var ground;

function setup(){
  createCanvas(800,400);
  ground = createSprite(50,380,800,20);
  ground.x=ground.width/2;
  ground.velocityX=-4;

  aladdin = createSprite(100,370,10,10);
}
function draw(){
  background(220);
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  drawSprites();
}
