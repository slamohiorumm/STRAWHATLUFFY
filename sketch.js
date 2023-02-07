var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)) {
    box.x = box.x + 5;
  }
  if (keyDown(LEFT_ARROW)) {
    box.x = box.x - 5;
  }
  if (keyDown(UP_ARROW)) {
    box.y = box.y - 5;
  }
  if (keyDown(DOWN_ARROW)) {
    box.y = box.y + 5;
  }
  drawSprites();
}




