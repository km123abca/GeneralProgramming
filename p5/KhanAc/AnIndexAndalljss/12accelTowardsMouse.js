
var movers;
var setup=()=>
          {
            createCanvas(1200,600);
            movers = [];
            for (var i = 0; i < 20; i++) 
              {
              movers[i] = new Mover(); 
              }
          }

var Mover = function() {
  this.position = new createVector(random(width), random(height));
  this.velocity = new createVector(0, 0);
  this.acceleration = new createVector(0, 0);
};

Mover.prototype.update = function() {
    var mouse = new createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse,this.position);
    var maxVec=new createVector(width,height);    
    var closeness=1-dir.mag()/maxVec.mag();
    dir=p5.Vector.normalize(dir);
    dir=dir.mult(closeness*0.2);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(255,0,0);
  ellipse(this.position.x, this.position.y, 10, 10);
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};



draw = function() {
    background(0);
    for (var i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].display(); 
    }
};

