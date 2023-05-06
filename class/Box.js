class Brick {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h,);
    
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    rectMode(CENTER);
    fill("brown");
    stroke("black")
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
}