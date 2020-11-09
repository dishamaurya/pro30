const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polyimg,polygon;

function preload(){
  polyimg = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(400,390,800,10);

 stand1 = new Ground(390,250,200,10);
 stand2 = new Ground(650,150,150,10);

 block1= new Box(640,110,30,40);
 block2 = new Box(670,110,30,40);
 block3= new Box(700,110,30,40);

 block4= new Box(650,70,30,40);
 block5 = new Box(680,70,30,40);
 block7 = new Box(610,110,30,40);
 block6= new Box(660,30,30,40);

 block8 = new Box(330,235,30,40);
 block9 = new Box(360,235,30,40);
 block10 = new Box(390,235,30,40);
 block11 = new Box(420,235,30,40);
 block12= new Box(450,235,30,40);

  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15= new Box(420,195,30,40);

  block16 = new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon, {x:100, y:200});
}

function draw() {
  background(0); 
  Engine.update(engine);

   ground.display();
   stand1.display();
   stand2.display();
   
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();

   
   block1.display();
   block2.display();
   block3.display();

   block4.display();
   block5.display();
   block6.display();
   block7.display();

     imageMode(CENTER);
    image(polyimg, polygon.position.x, polygon.position.y, 40, 40);

   slingshot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

