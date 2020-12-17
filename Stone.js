class Stone{
    constructor(x,y){
       
        this.body = Bodies.circle(x,y,10,{isStatic:false, restitution:0, friction:1, density:1.2});
        this.image = loadImage("images/stone.png");
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40,40);
        pop();
    }
}