const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint
var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4;
var canvas;


let canvasmouse=Mouse.create(canvas.elt)
canvasmouse.pixelRatio=pixelDensity();
let options ={
mouse:canvasmouse,
}
mouseConstraint=MouseConstraint.create(engine,options)
world.add(world,mouseConstraint)
function setup()
{
createCanvas(windowWidth,windowHeight)
engine=Engine.create();
world=engine.world
bob1=new Bob(340,450,50,50,"white")
bob2=new Bob(400,450,50,50,"red")
bob3=new Bob(450,450,50,50,"white")
bob4=new Bob(500,450,50,50,"red")
bob5=new Bob(290,450,50,50,"red")
sling1=new Sling(bob1.body,{x:340,y:200})
sling2=new Sling(bob2.body,{x:400,y:200})
sling3=new Sling(bob3.body,{x:450,y:200})
sling4=new Sling(bob4.body,{x:500,y:200})
sling5=new Sling(bob5.body,{x:290,y:200})
}


function draw()
{
background(0)
Engine.update(engine)
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
fill("red")
textSize(30)
text("Newtons Cradle",windowWidth/2-250,windowHeight/2-100)
}

function mouseDragged()
{
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})


}
