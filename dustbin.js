class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
    
    this.bodyb=Bodies.rectangle(x,y,width,height,options);
    this.bodyb.width=width
    this.bodyb.height=height

    World.add(world,this.bodyb);
    
    this.body1=Bodies.rectangle( x-width*2, y-height*2, height, options);
    World.add(world,this.body1);
     
    this.bodyr=Bodies.rectangle( x+width*2 , y- height*2, height, options);
    World.add(world,this.bodyr);
    
    
  }

  display(){
      fill("white");
      rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height);
      rect(this.bodyb.position.x - 50, this.bodyb.position.y ,this.bodyb.height, this.bodyb.width);
      rect(this.bodyb.position.x +50 ,this.bodyb.position.y,this.bodyb.height, this.bodyb.width);

  }
}