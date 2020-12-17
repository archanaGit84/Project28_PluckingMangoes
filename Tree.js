class Tree
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
        this.body=Bodies.rectangle(x, y, 30,150 , options);
        this.image=loadImage("images/tree.png")
 		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
            imageMode(CENTER);
            image(this.image,0,0-100,300,400);
			pop()
			
	}

}