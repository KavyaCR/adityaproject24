var paperObject,ground;
var boxleftSprite, boxBase, boxrightSprite; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	ground = createSprite(400,600,1000,15);
	ground.shapeColor = "yellow";

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	
	paperObject = new Paper(100,485,10);
	
	boxleftSprite= new Dustbin(560, 558, 15,70 , {isStatic:true});
	boxBase= new Dustbin(615, 585, 100,15 , {isStatic:true});
	boxrightSprite= new Dustbin(665 , 558, 15,70 , {isStatic:true});
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	//boxBase.collide(ground);
	//paperSprite.collide(ground);
	paperObject.display();
	ground.display();
	boxleftSprite.display();
	boxBase.display();
	boxrightSprite.display();
}

function keyDowning(){
	if(keydown("up")){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y: -85});
	}
}



