class Log {
  constructor(x,y,height,width){
    var options ={
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, 280, 20, options);
    this.width = 280;
    this.height = 20;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill('orange');
    rect(0, 0, this.width, this.height);
    pop();
  }
}