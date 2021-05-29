
var ps;

var setup=()=>
            {
               createCanvas(700,700); 
               ps = new ParticleSystem(new createVector(width/2, 50));

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

var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
};



var draw = function() {
  background(204, 90, 204);
  ps.run();
  ps.addParticle();
};

