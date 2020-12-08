class Paper{
    constructor(x,y,radius){
        var otptions ={
            isStatic:false,
            restituion :0.2,
            friction:0.3,
            density:1.0
        }
        this.radius=radius
        this.body=body.circle(x,y,radius,options);
        world.add(world,this.body);
    }

    display(){
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}

