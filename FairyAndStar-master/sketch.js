var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star1,star2,star3,star4;
var  starBody1,starBody2, starBody3, starBody4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);
	
	//fairyVoice.play();

	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star1 = createSprite(650,30);
	star1.addImage(starImg);
	star1.scale = 0.1;

	// star2 = createSprite(600,30);
	// star2.addImage(starImg);
	// star2.scale = 0.2;

	// star3 = createSprite(570,45);
	// star3.addImage(starImg);
	// star3.scale = 0.2;

	// star4 = createSprite(550,20);
	// star4.addImage(starImg);
	// star4.scale = 0.2;


	myengine = Engine.create();
	myworld = myengine.world;

	starBody1 = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});

	World.add(myworld, starBody1);
	
	Engine.run(myengine);

}


function draw() {
  background(bgImg);

  star1.x= starBody1.position.x 		//sprite=body
  star1.y= starBody1.position.y 

   //star2.x= starBody2.position.x 
   //star2.y= starBody2.position.y 

   
  //console.log(star.y);

  if(star1.y > 470 && starBody1.position.y > 470 ){
  	Matter.Body.setStatic(starBody1,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody1,false); 
	}
}


