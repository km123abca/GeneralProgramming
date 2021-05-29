var upWard;
var m;
var setup=()=>
          {
            createCanvas(1200,600);
            m = new Balloon(); 
            upWard=new createVector(0,-0.1);            
          }
var Balloon = function() {
    this.mass = 1;
    this.height = 100;
    this.width = 70;
    this.position = new createVector(width/2, height-this.height/2-10);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
};
  
Balloon.prototype.applyForce = function(force) {    
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Balloon.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Balloon.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
    line(this.position.x, this.position.y, this.position.x, this.position.y + this.height*2);
    ellipse(this.position.x, this.position.y, this.width, this.height);
};

Balloon.prototype.checkEdges = function() {
    if(this.position.y <= this.height/2)
        {
            this.velocity.y*=-1;
        }
        /*
    if(this.position.x > width-this.width/2 || this.position.x < this.width/2)
        {
        upWard.x*=-1;
        this.velocity.x=(this.position.x > width-this.width/2?-0.1:0.1);
        }*/

};




draw = function() {
    background(224, 224, 224);
    m.applyForce(upWard);
    m.update();
    m.display();
    m.checkEdges();
};

