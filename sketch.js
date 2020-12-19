const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var a, sound, polygon, backgroundImg;
var circles=[];
var score = 0;

function preload() {

  //getTime();

polygon_img = loadImage("polygon.png");
//sound = loadSound("Sound.mp3");
}








function setup() {
  createCanvas(800,800);
  stroke(255)
 






  engine = Engine.create();
	world = engine.world;

  //level 4
  stand = new Ground(540,650,350,20);
  block1 = new Box(420,635,40,40);
  block2 = new Box(460,635,40,40);
  block3 = new Box(500,635,40,40);
  block4 = new Box(540,635,40,40);
  block5 = new Box(580,635,40,40);
  block6 = new Box(620,635,40,40);
  block7 = new Box(660,635,40,40);
  // level 3
  block8 = new Box(460,595,40,40);
  block9 = new Box(500,595,40,40);
  block10 = new Box(540,595,40,40);
  block11 = new Box(580,595,40,40);
  block12 = new Box(620,595,40,40);
  //level 2
  block13 = new Box(500,545,40,40);
  block14 = new Box(540,545,40,40);
  block15 = new Box(580,545,40,40);
  //level 1
  block16 = new Box(540,505,40,40);


//polygon body

var options = {

  density:1,
 
}
  polygon = Bodies.circle(100,500,20,options);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:500});

   
//console.log(polygon);

  Engine.run(engine);
}



function draw() {
//if (backgroundImg)
   background("black");  
  
 


// to display Score
textSize(20);
text("Score : "+score,680,40);

 stand.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill("cyan");
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill("yellow");
 block13.display();
 block14.display();
 block15.display();
 fill("white");
 block16.display();
 slingshot.display();

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();

 block13.score();
 block14.score();
 block15.score();

 // polygon image
 imageMode(CENTER);
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 //console.log(polygon.position.x);

 

 drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});

}

function mouseReleased() {
  slingshot.fly();
  

}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(this.polygon,{x:100, y:500});
    slingshot.attach(this.polygon);
   

  }

}


//async function getTime() {
 // var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
  //var responseJSON = await response.json();
  
 // var datetime = responseJSON.datetime;
  //var hour = datetime.slice(11,13);
  //console.log(hour);

  //if(hour >= 6 && hour <= 18) {
  //  bg = "Day.jpg"
  //} else {
 //   bg = "Night.jpg"
 // }

//backgroundImg = loadImage(bg);
////console.log(backgroundImg);


//}
