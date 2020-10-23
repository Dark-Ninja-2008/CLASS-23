class OPOP {

constructor(x,y,width,height){

    var box_options = {
        restitution:0.1,
        friction:0.1,
        density:0.1
      }
      this.body= Bodies.rectangle(x,y,width,height,box_options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);

}

display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
}