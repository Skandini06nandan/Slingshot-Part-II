const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var shooter1, slingShot;


function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,height,1000,20);
    

    box1 = new Box(700,160,30,30);
    box2 = new Box(910,160,30,30);
    box3 = new Box(730,160,30,30);
    box4 = new Box(880,160,30,30);
    box5 = new Box(820,160,30,30);
    box6 =new  Box(730,100,30,30);
    box7 =new  Box(760,100,30,30);
    box8 =new  Box(790,100,30,30);
    box9 =new Box(850,100,30,30);
    box10 =new Box(880,100,30,30);
    box11 =new Box(850,100,30,30);
    box12 =new  Box(820,10,30,30);
    box13 =new  Box(790,100,30,30);
    box14 =new Box (760,100,30,30);

    box15 =new Box(760,100,30,30);
    box16 =new  Box(790,100,30,30);
    box17 =new  Box(820,100,30,30);
    box18 =new  Box(850,100,30,30);

    box19 =new  Box(790,100,30,30);
    box20 =new Box(820,100,30,30);

box21=new Box(500,250,30,30);
box22 =new Box(530,250,30,30);
box23 =new Box(560,250,30,30);

box24 =new Box(530,280,30,30);
box25 =new Box(530,250,30,30);
 

    log1 =  new Log(810,200,350, PI/2);
    log2 =new Log2(540,300,100,PI/2);

    shooter1 = new shooter(160,50);

    slingshot = new SlingShot(shooter1.body,{x:200, y:50});
}

function draw(){
    background(120,280,270);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();


    box3.display();
    box4.display();
    box6.display();

    log1.display();
    log2.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();


    shooter1.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(shooter1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}