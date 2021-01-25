var movingRect, fixedRect;




function setup() {
  //creates a background
  createCanvas(800,400);
  
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  
  
  fixedRect = createSprite(400,200,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}

function draw() {
  //clears screen and gives color
  background("blue");  
  //makes the sprites appear on canvas
movingRect.x = mouseX;
movingRect.y = mouseY;

if (movingRect.x - fixedRect.x <fixedRect.width/2+ movingRect.width/2
   && fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2 
   && movingRect.y - fixedRect.y <fixedRect.height/2+ movingRect.height/2
   && fixedRect.y - movingRect.y <fixedRect.height/2+ movingRect.height/2){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}
else{
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "green"
}

  drawSprites();
}