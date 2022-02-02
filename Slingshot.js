class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            A: bodyA,
            B: pointB,
            stffness: 1.2,
            length: 250
        }
        this.pointB = B;
        this.rope = Constraint.create(options);
        World.add(world, this.body);
    }

    attacx(body){
        this.slingshot.bodyA = body;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48, 22, 8);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop()
        }
    }
}