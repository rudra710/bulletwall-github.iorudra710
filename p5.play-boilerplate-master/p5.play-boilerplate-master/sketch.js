var thickness,wall;
var bullet,speed,weight;

function setup() {
createCanvas(1300,400);

thickness=random(22,23);
speed=random(100,200);
weight=random(30,52)

  bullet = createSprite(100, 200, 20, 5);
  bullet.shapeColor="blue";

  wall = createSprite(900,200,thickness,height/2);
 

  bullet.velocityX = speed;
}
  
function draw() {
  background("black");
  
  
   if(hasCollied(bullet,wall)){
     bullet.velocityX = 0;

     var damage = 12.43 * weight * speed * speed/(thickness *thickness *thickness);

     if(damage>10){
      wall.shapeColor=color(255,0,0);
      }
     
      if(damage<10){
      wall.shapeColor=color(0,255,0);
      }
    }
 function hasCollied(bullet,wall){
     bulletRightEdge=bullet.x + bullet.width;
     wallLeftEdge=wall.x;
     if(bulletRightEdge>=wallLeftEdge){
     return true; }
     return false;
    }
  drawSprites();
  }