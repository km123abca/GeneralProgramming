// Adapted from Dan Shiffman, natureofcode.com


var particleSystem;
var setup=()=>
            {
               createCanvas(700,700); 
               angleMode = "radians";
               particleSystem = new ParticleSystem(new createVector(width/2, 50));
               
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

// Method to display
Particle.prototype.display = function() {
  stroke(0, 0, 0, this.timeToLive);
  strokeWeight(2);
  fill(255, 0, 0, this.timeToLive);
  ellipse(this.position.x, this.position.y, 12, 12);
};

Particle.prototype.isDead = function(){
  if (this.timeToLive < 0.0) {
      return true;
  } else {
      return false;
  }
};

var Confetti = function(position) {
  Particle.call(this, position);
};

Confetti.prototype = Object.create(Particle.prototype);
Confetti.prototype.constructor = Confetti;

Confetti.prototype.display = function(){
  rectMode(CENTER);
  fill(0, 204, 255, this.timeToLive);
  stroke(0, 0, 0, this.timeToLive);
  strokeWeight(2);
  push();
  translate(this.position.x, this.position.y);
  var theta = map(this.position.x, 0, width, 0, TWO_PI * 2);
  rotate(theta);
  rect(0, 0, 12, 12);
  pop();
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  var r = random(1);
  if (r < 0.5) {
    this.particles.push(new Particle(this.origin));
  } else {
    this.particles.push(new Confetti(this.origin));
  }
};

ParticleSystem.prototype.run = function(){
	for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};



draw = function() {
  background(168, 255, 156);
  particleSystem.addParticle();
  particleSystem.run();
};