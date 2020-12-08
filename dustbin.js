class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
    
    this.bodyb=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.bodyb);

    this.body1=Bodies.rectangle((x-(width2)),(y-(height*2)),height,options);
    World.add(world,this.body1);
     
    this.bodyr=Bodies.rectangle((x*(width2)),(y-(height*2),height,options));
    World.add(world,this.bodyr);
    this.bodyb.width=width
    this.bodyb.height=height
    
  }

  display(){
      fill("white");
      rect(this.bodyb.position.x,this.body.position.y,this.bodyb.width.x,this.bodyb.width.y);
      rect(this.bodyb.position.x,(this.bodyb.width/2),this.bodyb.position.y);
      rect(this.body.position.x,(this.body.width/2),(this.bodyb.position.y));

  }
}