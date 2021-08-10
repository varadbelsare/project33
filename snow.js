class Snow {
    constructor(x,y){
     var options={
         restitution:1.0
     }
     this.body=Bodies.circle(x,y,20,options)
     World.add(world,this.body)
     this.image=loadImage("snow4.webp")
    }
    display(){
        var pos=this.body.position
        image(this.image,pos.x,pos.y,20,20)
    }
}