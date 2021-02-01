class Monster{
    constructor(x,y,widht,height){
        var options = {
            isStatiic:true,
            restitution:0.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,widht,height,options);
        this.widht=widht;
        this.height=height;
        this.image=loadImage("images/Monster-02.png");
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
        
    }
}