class Paper{
    constructor(x,y){
        
        var options = {
           
            'restititution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 70;
       
        World.add(world,this.body)
    }



    display(){
        var pos = this.body.position;
        fill("grey")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}