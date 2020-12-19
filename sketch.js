var helicopterIMG, helicopterSprite, packageSprite,packageIMG,wall1Object,wall2Object,wall3Object;
var packageBody,ground,engine,world,bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
    
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	if(keyCode === "LEFT_ARROW"){
		helicopterSprite.x=helicopterSprite.x+3;
	}

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1Object = new Mark2(320,505,20,130);
  	 wall2Object = new Mark2(460,505,20,130);
  	 wall3Object = new Mark1(390,580,140,20);

	packageSprite=new Supply(width/2, 80, 10);

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageSprite,false);
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.display();
  //packageSprite.x=packageBody.x;
  //packageSprite.y=packageBody.y;
  wall1Object.display();
  wall2Object.display();
  wall3Object.display();
  Engine.run(engine);
  Engine.update(engine);
  drawSprites();
}
 
