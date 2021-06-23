// variables
var jaxon, jaxon_running, jaxon_colided
var road_animation

function preload(){
  
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");

  road_animation = loadImage("path.png");

}

function setup(){
  
  createCanvas(400,400);
  
  //create sprites here
  road = createSprite(200, 200);
  road.addImage("moving", road_animation);
  road.velocityY = 2
  road.scale = 1.2

  jaxon = createSprite(200, 330, 50, 50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.1;

  // boundaries
  boundary1 = createSprite(15, 200, 35, 400);
  boundary1.visible = false;

  boundary2 = createSprite(390, 200, 35, 400);
  boundary2.visible = false;
 
  // There seems to be a glitch of some sort, when you move jaxon into the boundary, he disappears. I'm not sure how to fix it, I dont know why it's happening either.

}

function draw() {
  
  background(0);

  //making jaxon follow the mouse
  jaxon.x = mouseX;

  // infinite road condition
  if(road.y > 400 ){

    road.y = height/2;

  }

  // colliding with the boundaries
  jaxon.collide(boundary1);
  jaxon.collide(boundary2);

  drawSprites();

}
