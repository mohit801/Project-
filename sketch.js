astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;
function preload() {
  bg= loadImage("Iss,iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png"); 
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  createEdgeSprite  
  createEdgeSprite();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
  }