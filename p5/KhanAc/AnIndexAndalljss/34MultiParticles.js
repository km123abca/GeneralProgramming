

var particles;
var setup=()=>
            {
               createCanvas(700,700); 
               particles = [];

            }
var Particle = function(position) {
  this.acceleration = new createVector(0, 0.05);
  this.velocity = new createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.timeToLive = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.timeToLive -= 2;
};

Particle.prototype.display = function() {
  stroke(255, 255, 255, this.timeToLive);
  strokeWeight(2);
  fill(210, 210, 255, this.timeToLive);
  ellipse(this.position.x, this.position.y, 12, 12);
};

Particle.prototype.isDead = function() {
  if (this.timeToLive < 0) {
      return true;
  } else {
      return false;
  }
};



draw = function() {
  background(133, 173, 242);
  particles.push(new Particle(new createVector(width/2, 50)));

  for (var i = particles.length-1; i >= 0; i--) {
    var p = particles[i];
    p.run();
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
};


