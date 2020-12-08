
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	dustbin =new Dustbin(720,690,100,10);
	paper=new paper(100,600,10);
	ground=bodies.rectangle(width/2,700,width ,10,
		{
			isStatic:true
		});
 
		world.add(world,ground);
	
  
}


function draw() {
	background("black");
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  paper.display();


  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		matter.Body.applyforce(paper.body,paper.body.position,
			{
			x:85,
			y:-85
		});
		}
	}

