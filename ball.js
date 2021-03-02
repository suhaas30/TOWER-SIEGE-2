class Ball{

    constructor(x,y,radius){
        var options={
            restitution:0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("polygon.png");
        this.radius = radius;
        World.add(world, this.body);
        
    }

        display(){
            push();
            fill("yellow");
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
    }

    