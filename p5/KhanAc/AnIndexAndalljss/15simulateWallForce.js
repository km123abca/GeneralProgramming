var balls;
var wind,gravity;
var setup=()=>
          {
            createCanvas(1200,600);

            balls=[];
            for (var i = 0; i < 20; i++) 
                {
                    balls.push(new Ball(random(0.1, 5), 0, 0));
                }  
            wind = new createVector(0.01, 0);
            gravity = new createVector(0, 0.1);         
          }
var Ball = function(m, x, y) {
    this.mass = m;
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    this.width=this.mass*16;
    this.height=this.mass*16;
    this.color = color(random(255), random(255), random(255), 127);
};

Ball.prototype.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};

Ball.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Ball.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

Ball.prototype.calculateWallForce = function() {
    var xforce=0;
    var yforce=0;
    var mag=6   ;
    if (this.position.x > width-this.width/2) {
        xforce=-mag;
    } else if (this.position.x-this.width/2 < 0) {
        xforce=mag;
    }

    if (this.position.y > height-this.height/2) {
        yforce=-mag;
    } else if (this.position.y-this.height/2 < 0) {
        yforce=mag;
    }
    return new createVector(xforce,yforce);
    
};







draw = function() {
    background(0);

    for (var i = 0; i < balls.length; i++) {
        balls[i].applyForce(wind);
        balls[i].applyForce(gravity);
        balls[i].applyForce(balls[i].calculateWallForce());
        balls[i].update();
        balls[i].display();
    }
};