var mover,movers,attractor;

var setup=()=>
          {
            createCanvas(1200,600);            
            angleMode = "radians";
            mover = new Mover(10, 200, 200);
            attractor = new Attractor();
            movers = [];
            for (var i = 0; i < 20; i++) {
                        movers.push(new Mover(random(0.1, 2), random(width), random(height)));
                                        }
                   
          }



var Attractor = function() {
    this.position = new createVector(width/2, height/2);
    this.mass = 20;
    this.G = 1;
};

Attractor.prototype.calculateAttraction = function(m) {
    var force = p5.Vector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};

Attractor.prototype.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
};

var Mover = function(m, x, y) {
    this.position = new createVector(x, y);
    this.mass = m;
    
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
    
    this.velocity = new createVector(random(-1, 1), random(-1, 1));
    this.acceleration = new createVector(0, 0);
};

Mover.prototype.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};

Mover.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    
    this.aAcceleration = this.acceleration.x / 10.0;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;
    
    this.acceleration.mult(0);
};

Mover.prototype.display = function () {
    stroke(0, 0, 0);
    fill(175, 175, 175, 200);
    rectMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    rect(0, 0, this.mass*16, this.mass*16);
    pop();
};



// draw = function() {
//     background(255, 255, 255);
 
// };



draw = function() {
    background(44, 222, 98);
       mover.update();
    mover.display();
    attractor.display();
    
    for (var i = 0; i < movers.length; i++) {
        var force = attractor.calculateAttraction(movers[i]);
        movers[i].applyForce(force);
        
        movers[i].update();
        movers[i].display();
    }
};