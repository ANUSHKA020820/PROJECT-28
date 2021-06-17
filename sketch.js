const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObject,stoneObject,groundObject;
var mango01,mango02,mango03,mango04,mango05,mango06,mango07,mango08,mango09,mango10,mango11,mango12;
var world,boy;

//Declare launcherObject and launchForce variable here
var launcherObject;
var launchForce = 100;

function preload(){

	boy = loadImage("images/boy.png");
 
  }

function setup(){

	createCanvas(1300,600);
	engine = Engine.create();
	world = engine.world;

	stoneObject = new stone(235,420,30); 

	mango01 = new mango(1100,100,30);
  mango02 = new mango(1170,130,30);
	mango03 = new mango(1010,140,30);
	mango04 = new mango(1000,70,30);
	mango05 = new mango(1100,70,30);
	mango06 = new mango(1000,230,30);
	mango07 = new mango(900,230,40);
	mango08 = new mango(1140,150,40);
	mango09 = new mango(1100,230,40);
	mango10 = new mango(1200,200,40);
	mango11 = new mango(1120,50,40);
	mango12 = new mango(900,160,40);

	treeObject = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);

  //create launcherObject here
  launcherObject = new launcher(stoneObject.body,{x:240,y:440});

	Engine.run(engine);

}

function draw(){

  background(230);
  textSize(25);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!",50,50);
  image(boy,200,360,200,300);
  

  treeObject.display();
  stoneObject.display();

  mango01.display();
  mango02.display();
  mango03.display();
  mango04.display();
  mango05.display();
  mango06.display();
  mango07.display();
  mango08.display();
  mango09.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObject.display();
  groundObject.display();

  //Display launcher object here
  launcherObject.display();

  detectollision(stoneObject,mango01);
  detectollision(stoneObject,mango02);
  detectollision(stoneObject,mango03);
  detectollision(stoneObject,mango04);
  detectollision(stoneObject,mango05);
  detectollision(stoneObject,mango06);
  detectollision(stoneObject,mango07);
  detectollision(stoneObject,mango08);
  detectollision(stoneObject,mango09);
  detectollision(stoneObject,mango10);
  detectollision(stoneObject,mango11);
  detectollision(stoneObject,mango12);

}

//create mouseDragged function here

function mouseDragged(){

    Matter.Body.setPosition(stoneObject.body,{x: mouseX, y: mouseY});

}

//create mouseReleased function here

function mouseReleased(){

	launcherObject.fly();

}

//create keyPressed function here

function keyPressed(){

  if (keyCode === 32){

    Matter.Body.setPosition(stoneObject.body,{x:235,y:420});
    launcherObject.attach(stoneObject.body);

  }
}

  function detectollision(lstone,lmango){

  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r){
  
  	  Matter.Body.setStatic(lmango.body,false);
   
    }
  }