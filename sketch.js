var fixedRect, movingRect, gameobj;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj = createSprite(100,200,80,30);
  gameobj.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameobj)){
    movingRect.shapeColor = "red";
    gameobj.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameobj.shapeColor = "green";
  }
 
  drawSprites();
}

