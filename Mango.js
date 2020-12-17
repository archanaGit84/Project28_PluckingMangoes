class Mango {
    constructor(x,y,r){

        var options = {isStatic:true,
                        restitution:0,
                        density:1.2}
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/mango.png");

        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0, this.body.circleRadius*2, this.body.circleRadius*2);
        pop();
    }
}