class Dustbin{
    constructor(x,y){
       // boxleftSprite=createSprite(560, 558, 15,70);
       // boxleftSprite.shapeColor=color(255,0,0);
       this.x= x;
       this.y= y;
       this.dustbinWidth=200;
       this.dustbinHeight=100;
       this.wallThickness=20;
       this.angle=0;	

        this.boxLeftBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true} );
        World.add(world,this.boxLeftBody);
    
       /* boxBase=createSprite(615, 585, 100,15);
        boxBase.shapeColor=color(255,0,0);*/
    
        this. boxBottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true} );
        World.add(world, this.boxBottomBody);
    
        /*boxrightSprite=createSprite(665 , 558, 15,70);
        boxrightSprite.shapeColor=color(255,0,0);*/
    
        this.boxRightBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true});
        World.add(world, this.boxRightBody);
    
    }

    display(){
        var pp=this.boxLeftBody.position;
			var pp=this.boxBottomBody.position;
			var pp=this.boxRightBody.position;
        push();
        translate(pp.x,pp.y);
        rectMode(CENTER);
        pop()
        
    }

}
