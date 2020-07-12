const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dustbin;
var ground;
var dustbinObj;

function preload(){
  dustbinObj = loadImage("Sprites/dustbingreen.png");
}

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(920,344,20,105);
  dustbin2 = new Dustbin(960,380,80,20);
	dustbin3 = new Dustbin(990,344,20,105);	

  paperObject = new Paper(250,200);

  dustbinObj = createSprite(950,344,10,10);
  

}


function draw() {
  rectMode(CENTER);
  background(255,220,20);
  Engine.update(engine)
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  paperObject.display();
  

  
 
  
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:18,y:-18});

  }
}