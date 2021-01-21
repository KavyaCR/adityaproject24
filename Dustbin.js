class Dustbin{
    constructor(){
       // boxleftSprite=createSprite(560, 558, 15,70);
       // boxleftSprite.shapeColor=color(255,0,0);
    
        boxLeftBody = Bodies.rectangle(x,y,width,height,options );
        World.add(world, boxLeftBody);
    
       /* boxBase=createSprite(615, 585, 100,15);
        boxBase.shapeColor=color(255,0,0);*/
    
        boxBottomBody = Bodies.rectangle(x,y,width,height,options );
        World.add(world, boxBottomBody);
    
        /*boxrightSprite=createSprite(665 , 558, 15,70);
        boxrightSprite.shapeColor=color(255,0,0);*/
    
        boxRightBody = Bodies.rectangle(x,y,width,height,options);
        World.add(world, boxRightBody);
    
    }

    display(){
        push();
        translate(pp.x,pp.y);
        rectMode(CENTER);
        pop()
        
    }

}