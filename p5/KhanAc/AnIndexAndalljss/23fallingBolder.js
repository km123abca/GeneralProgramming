var boulder;
function preload() {
  // myImage = loadImage('./images/thing.jpg');
}
var setup=()=>
          {
            createCanvas(700,700);            
            angleMode = "radians";
            boulder = new Boulder(6, 10, 10);       
          }


var Boulder = function(m, x, y) {
    this.position = new createVector(x, y);
    this.mass = m;
    this.width = this.mass * 10;
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
    
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
};

Boulder.prototype.applyForce = function(force) {
    if (force instanceof p5.Vector) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
};

Boulder.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    
    this.aAcceleration=this.acceleration.mag();
    this.aVelocity+=this.aAcceleration;
    this.aVelocity=constrain(this.aVelocity,0,0.1);
    this.angle+=this.aVelocity;
    
    this.acceleration.mult(0);
};

Boulder.prototype.display = function () {
    push();
    translate(this.position.x, this.position.y);
    // image(myImage, this.width*0.25, this.width*0.3, 45, 55);
    rotate(this.angle);
    this.drawShape();
    pop();
};

Boulder.prototype.drawShape = function() {
    ellipseMode(CENTER);
    fill(82, 82, 82);
    ellipse(0, 0, this.width, this.width);
    noStroke();
    var from = color(102, 102, 102, 40);
    var to = color(148, 148, 148, 40);
    var gradientBars = 20;
    for (var i = 0; i < gradientBars; i++) {
        var interA = lerpColor(from, to, i*1/gradientBars);
        var sWidth = (gradientBars-i)*this.width/gradientBars;
        fill(interA);
        ellipse(i, 0, sWidth, sWidth);
    }
    var from = color(102, 102, 102, 40);
    var to = color(94, 94, 94, 40);
    var gradientBars = 20;
    for (var i = 0; i < gradientBars; i++) {
        var interA = lerpColor(from, to, i*1/gradientBars);
        var sWidth = (gradientBars-i)*this.width/gradientBars;
        fill(interA);
        ellipse(-i, 0, sWidth, sWidth);
    }
};



draw = function() {
    background(215, 245, 245);
    
    // draw mountain
    fill(181, 181, 181);
    stroke(150, 150, 150);
    triangle(0, 40, width-40, height, 0, height);
    boulder.applyForce(new createVector(0.1,0.1));
    if(mouseIsPressed)
        {
            boulder.applyForce(new createVector(-0.5,-0.5)); 
        }
    // draw boulder
    boulder.update();
    boulder.display();
};

