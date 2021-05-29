var systems;
var setup=()=>
            {
               createCanvas(700,700); 
               angleMode = "radians";
               systems = [];
            }


var Particle = function(position) {
    this.acceleration = new createVector(0, -0.05);
    this.velocity = new createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.timeToLive = 100;
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
    colorMode(HSB);
    noStroke();
    var hue = constrain((100 - this.timeToLive)/2,0,40);
    fill(hue, 255, 255, this.timeToLive);
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

// We start off with an empty systems array


// We fill up the leaves array with positions
var leaves = [];
for (var i = 0; i < 100; i++) {
    //leaves.push(new createVector(random(0, width), random(0, height)));
}

mouseClicked = function() {
    systems.push(new ParticleSystem(new createVector(mouseX, mouseY)));
};
mouseDragged=function(){
    systems.push(new ParticleSystem(new createVector(mouseX, mouseY)));
};

draw = function() {
    colorMode(RGB);
    background(66, 57, 11);
    
    for (var i = 0; i < leaves.length; i++) {
        ellipse( leaves[i].x, leaves[i].y, 30, 30);
        fill(0,0,255);
    }
    for (var i = 0; i < systems.length; i++){
        systems[i].addParticle();
        systems[i].run();
    }
};

