
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyI;

function preload()
{
  boyI = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 tree = new Tree(500,300);
 tree.debug = true;
 ground = new Ground(400,390,800,20);
 
 mango1 = new Mango(450,200,7);
 mango2 = new Mango(400,190,10);
 mango3 = new Mango(380,120,15);
 mango4 = new Mango(450,100,7);
 mango5 = new Mango(450,140,10);
 mango6 = new Mango(450,50,15);
 mango7 = new Mango(620,160,7);
 mango8 = new Mango(520,100,7);
 mango9 = new Mango(450,160,10);
 mango10 = new Mango(610,120,15);
 mango11= new Mango(550,100,7);
 mango12= new Mango(550,140,10);
 mango13= new Mango(550,50,15);
 mango14= new Mango(580,160,7);
 stone = new Stone (140,190);
 elastic = new Elastic(stone.body, {x:140,y:260})

 //var render = Matter.Render.create({element:document.body, engine:engine, options:{width:800, height:400}});
 //Matter.Render.run(render);

	Engine.run(engine);
  
}


function draw() {

  background(0);
  
 
  tree.display();
  ground.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
   
  mango5.display();
  mango6.display();
   
  mango7.display();
  mango8.display();
   
  mango9.display();
  mango10.display();
   
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  elastic.display();
   
  imageMode(CENTER);
  image(boyI,180,330,150,250);
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
 
  drawSprites();
 
}

function mouseDragged()
{
	Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	elastic.fly();
  
}

function detectCollision(stoneObj, mangoObj){
  var distance = dist(stoneObj.body.position.x, stoneObj.body.position.y, mangoObj.body.position.x, mangoObj.body.position.y);
  if (distance <= stoneObj.body.circleRadius*4 + mangoObj.body.circleRadius*2){
    Body.setStatic(mangoObj.body,false);
  }
}



