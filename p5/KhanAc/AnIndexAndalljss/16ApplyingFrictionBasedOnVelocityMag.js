
var movers;
var setup=()=>
          {
            createCanvas(1200,600);
            movers = [];
            for (var i = 0; i < 20; i++) 
              {
              movers.push(new Mover(random(0.1, 5), 0, 0));
              }
                   
          }

var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
};
  
Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(255, 255, 255, 127);
  ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

Mover.prototype.checkEdges = function() {
  if (this.position.x > width) {
    this.position.x = width;
    this.velocity.x *= -1;
  } else if (this.position.x < 0) {
    this.velocity.x *= -1;
    this.position.x = 0;
  }
  if (this.position.y > height) {
    this.velocity.y *= -1;
    this.position.y = height;
  }
};





var draw = function() {
  background(50, 50, 50);
  
  for (var i = 0; i < movers.length; i++) {
    var wind = new createVector(0.01, 0);
    var gravity = new createVector(0, 0.1*movers[i].mass);
    
    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = movers[i].velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
};