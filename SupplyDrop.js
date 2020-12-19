class Supply{
    constructor(x,y,r){
        var options={
            restitution:0.5, 
            isStatic:true
        }

        this.body=Bodies.circle(width/2 , 200 , 5 , options);
	    //this.body.scale=0.2;
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("package.png");
        World.add(world, this.body);
    }
    display(){
        var supplyPos=this.body.position;
        push();
        translate(supplyPos.x,supplyPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r);
        pop();
    }
};