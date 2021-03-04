var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  
  if (frameCount % 100 == 0) {
	var rand = Math.round(random(1,6))
	var star = createSprite(random(800,0),random(0,300));
	var starImg;
	star.velocityY = 5;
	star.scale = 0.2
	
	starImg = loadImage("images/star.png");
	star.addImage(starImg);

	if (fairy.isTouching(star)){
		star.velocity = 0
	  }
	 
	      
	  if (fairy.isTouching(star)) {

	  }
	  
	
  }

  keyPressed();

  drawSprites();

}

function keyPressed() {
   
	if (keyWentDown("right")){
		fairy.velocityX = 4
	}
  
	if (keyWentDown("left")){
	  fairy.velocityX = -4
	}
  
	if (keyWentDown("space")){
	  fairy.velocityX = 0;
	}


  
}
