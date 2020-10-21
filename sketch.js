var fixedrect, movingrect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(90, 150, 50, 30);
  rect1.velocityY = 4;
  rect2 = createSprite(90, 400, 30, 50);
  rect2.velocityY = -4;
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "red"; 
  movingrect = createSprite(500, 400, 70, 50);
  movingrect.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  
    bounceOff(rect1, rect2);
    if(isTouching(fixedrect, movingrect)){

        fixedrect.shapeColor = "green";
        movingrect.shapeColor = "green"
    }
    else{
        fixedrect.shapeColor = "red";
        movingrect.shapeColor = "red";
    }

  movingrect.x = mouseX;
  movingrect.y = mouseY; 
  drawSprites();
}
