const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function preload(){
    
}

function setup(){
    createCanvas(1100,800);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(120,400,70);

    sling = new SlingShot(ball.body,{x:120,y:390});

    

    ground1 = new Ground(350,600,300,15);
    ground2 = new Ground(850,350,300,15);

    //level 1
    block1 = new Block(240,550,50,50);
    block2 = new Block(290,550,50,50);
    block3 = new Block(340,550,50,50);
    block4 = new Block(390,550,50,50);
    block5 = new Block(440,550,50,50);
    //level 2
    block6 = new Block(290,500,50,50);
    block7 = new Block(340,500,50,50);
    block8 = new Block(390,500,50,50);
    //level 3
    block9 = new Block(340,450,50,50);

    //level 1
    block10 = new Block(740,300,50,50);
    block11 = new Block(790,300,50,50);
    block12 = new Block(840,300,50,50);
    block13 = new Block(890,300,50,50);
    block14 = new Block(940,300,50,50);
    //level 2
    block15 = new Block(790,250,50,50);
    block16 = new Block(840,250,50,50);
    block17 = new Block(890,250,50,50);
    //level 3
    block18 = new Block(840,200,50,50);
     

}

function draw(){
    background("brown");
    Engine.update(engine);
    

    
    fill("cyan");
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("pink")
    block6.display();
    block7.display();
    block8.display();
    fill("yellow");
    block9.display();
    fill("cyan");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    fill("pink");
    block15.display();
    block16.display();
    block17.display();
    fill("yellow");
    block18.display();

    ball.display();

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(ball.body);
        Matter.Body.setPosition(ball.body, {x:120, y:400});
    }
}






