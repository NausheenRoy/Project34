const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimg;

function preload() {
//preload the images here
backgroundimg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(200,500,800,5);
  superhero = new Superhero(400,300,100,100);
  

  monster = new Monster(380,200,100,20);
Engine.run(engine);
}

function draw() {
  background(backgroundimg)

  superhero.display();
  ground.display();

 
  stroke(15);
  fill("red");

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}



