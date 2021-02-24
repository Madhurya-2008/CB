class Cons{

constructor(body1,body2){

var options=
{
 bodyA: body1,
 bodyB: body2,
 length: 50,
 stifness: 0.5  
}

this.chain = Matter.Constraint.create(options);
World.add(world,this.chain);
}

 createLine(){

    var A = this.chain.bodyA.position
    var B = this.chain.bodyB.position

    line (A.x,A.y,B.x,B.y);
}



}

