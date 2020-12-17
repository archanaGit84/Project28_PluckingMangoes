class Elastic {
    constructor(body1, point){
        var options = {bodyA: body1,
        pointB: point,
        length: 10,
        stiffness: 0.03,
        damping: 0}

        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);
    }

    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA){
            push();
            strokeWeight(4);
            //stroke("red");
            line(this.elastic.bodyA.position.x,this.elastic.bodyA.position.y, this.elastic.pointB.x, this.elastic.pointB.y);
            pop();
        }
        
    }

}