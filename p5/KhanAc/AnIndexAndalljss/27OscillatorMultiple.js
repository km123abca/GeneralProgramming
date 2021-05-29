// Adapted from Dan Shiffman, natureofcode.com

var oscillators;
var setup=()=>
          {
            createCanvas(700,700); 
            angleMode = "radians"; 
            oscillators = [];
            for (var i = 0; i < 10; i++) 
              {
                oscillators.push(new Oscillator());
              }
                     
          }

var Oscillator = function() {
  this.angle = new createVector();
  this.velocity = new createVector(random(-0.05, 0.05), random(-0.05, 0.05));
  this.amplitude = new createVector(random(20, width/2), random(20, height/2));
};

Oscillator.prototype.oscillate = function() {
  this.angle.add(this.velocity);
};

Oscillator.prototype.display = function() {
  var x = sin(this.angle.x) * this.amplitude.x;
  var y = sin(this.angle.y) * this.amplitude.y;

  push();
  translate(width/2, height/2);
  stroke(0, 0, 0);
  strokeWeight(2);
  fill(127, 127, 127, 127);
  line(0, 0, x, y);
  ellipse(x, y, 32, 32);
  pop();
};



var draw = function() {
  background(255, 255, 255);
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
};