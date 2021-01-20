class Bob {

constructor(x,y,width,height,color)

{
var options={

restitution:1,
friction:0,
frictionAir:0.0,
slop:1,
inertia:Infinity
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.color=color;
}

display()
{
var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
fill(this.color);
ellipse(0,0,this.width,this.height)
pop();

}

}