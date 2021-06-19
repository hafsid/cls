var fixedRect, movingRect;

var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  //fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

 fixedRect.velocityY = 5;
 movingRect.velocityY = -5


  // object1 = createSprite(100,100,50,50);
  // object2 = createSprite(200,100,50,50);
  // object3 = createSprite(300,100,50,50);
  // object4 = createSprite(400,100,50,50);

  // object1.shapeColor = "yellow";
  // object2.shapeColor = "purple";
  // object3.shapeColor = "white";
  // object4.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(touching(movingRect,object2)){
  //   movingRect.shapeColor = "red";
  //   object2.shapeColor = "pink";
  // }
  // else{
  //    movingRect.shapeColor = "green";
  //    object2.shapeColor = "purple";
  // }
  

  drawSprites();
}

function touching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
      && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
    return true;
  }
  else {
   return false;
  }
}


