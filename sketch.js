const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    // level two
    block8 =new block (330,235,30,40);
    block9 =new block (360,235,30,40);
    block10 =new block (390,235,30,40);
    block11 =new block (420,235,30,40);

    // level three

    block13 =new block (360,195,30,40);
    block14 =new block (390,195,30,40);
    block15 =new block (420,195,30,40);

    // top

    block16 =new block (390,155,30,40);


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    backgroundColour="black"
    slingshot.Visible=false;
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    
  
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        polygon.trajectory=[] 
        Matter.Body.setPosition(polygon.body,{x:200,y:50})
       slingshot.attach(polygon.body);
    }
}

