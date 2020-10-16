class Bob{
    constructor(x,y,radius){
        var options = {
            friction: 0.5,
            density: 0.5,
            restitution: 0.3,
            isStatic: false

        }
        this.body = Bodies.circle(x,y,radius,options)
        this.x = x
        this.y = y
        this.radius = radius
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}