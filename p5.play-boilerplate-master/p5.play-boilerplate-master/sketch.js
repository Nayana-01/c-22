const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas, engine, world, ground;

function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_option = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,10,ground_option);
  World.add(world, ground);


  var option = {
    restitution: 1
  }
  ball = Bodies.circle(200, 100, 15, option )
World.add(world, ball);

 
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  rectMode(CENTER);
  fill ("green");
  rect(ground.position.x, ground.position.y, 400,10);

ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 15, 15)

  
  
}