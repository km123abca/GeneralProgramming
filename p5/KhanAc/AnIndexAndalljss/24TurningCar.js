angleMode = "radians";

var car;
var setup=()=>
          {
            createCanvas(700,700);            
            car = new Car();   
          }
var Car = function() {
    this.position = new createVector(width/2, height/2);
    this.velocity = new createVector(3, 0);
    this.acceleration = new createVector(0, 0);
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
};

Car.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Car.prototype.applyForce = function(force) {
    this.acceleration.add(force);
};

Car.prototype.turnLeft = function() {
   var fv=this.velocity.copy();
   fv.rotate(-HALF_PI);
   this.applyForce(fv.mult(0.2));
   console.log("applying left force "+fv.x+","+fv.y);
};

Car.prototype.turnRight = function() {
    var fv=this.velocity.copy();
   fv.rotate(HALF_PI);
   this.applyForce(fv.mult(0.2));
   console.log("applying right force");
    
};

Car.prototype.display = function () {
    // Step 3:
    var angle = this.velocity.heading();
    
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(127, 127, 127);
    push();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    // Step 3:
    rotate(angle);
    // draw the car
    fill(255, 0, 0);
    rect(0, 0, 70, 30);
    rect(0, 0, 29, 30);
    fill(79, 79, 79);
    ellipse(-15, -18, 20, 8);
    ellipse(-15, 18, 20, 8);
    ellipse(15, 18, 20, 8);
    ellipse(15, -18, 20, 8);
    rect(21, 0, 11, 26);
    pop();
};

Car.prototype.checkEdges = function () {
    if (this.position.x > width) {
        this.position.x = 0;
    } else if (this.position.x < 0) {
        this.position.x = width;
    }
    
    if (this.position.y > height) {
        this.position.y = 0;
    } else if (this.position.y < 0) {
        this.position.y = height;
    }
};



keyPressed=function(){
    
  if(keyCode===37){
    car.turnLeft();
  }  else if(keyCode===39){
      car.turnRight();
  }
};

draw = function() {
    background(102, 209, 104);
    
    car.update();
    car.checkEdges();
    car.display();
    
};