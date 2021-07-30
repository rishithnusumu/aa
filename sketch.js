
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,rightwall,leftwall

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		//isStatic:false,
		restitution:0.85,
		//friction:0,
		//density:1.2,
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(10,20,20,ball_options)
	World.add(world,ball)
	//
	ground=Bodies.rectangle(400,280,800,10)
	World.add(world,ground)

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,800,10);
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(circle,)
	}
}
