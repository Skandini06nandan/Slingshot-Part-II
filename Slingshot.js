class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 =loadImage("sling.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
      }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,125,20,150,200);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(7);
            stroke('orange')
            line(pointA.x-60, pointA.y, pointB.x-5, pointB.y);
            line(pointB.x +45, pointA.y, pointB.x +15, pointB.y =50);
        pop();
        }

    }
    
}