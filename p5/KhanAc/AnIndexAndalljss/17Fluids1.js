var movers;
var liquid;

// Restart all the Mover objects randomly
var resetMovers = function() {
    movers=[];
    for (var i = 0; i < 9; i++) {
        movers.push(new Mover(random(0.5, 3), 20+i*width/9, 0));
    }
};

// Not working???
var mousePressed = function() {
    resetMovers();
};
 var setup=()=>
          {
            createCanvas(1200,600);
            movers = [];
            resetMovers();
            liquid = new Liquid(0, height/2, width, height/2, 0.1);                   
          }
var Liquid = function(x, y, w, h, c) 
        {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        };
  

Liquid.prototype.contains = function(m) 
    {
    var p = m.position;
    return p.x > this.x && p.x < this.x + this.w &&
           p.y > this.y && p.y < this.y + this.h;
    };
  

Liquid.prototype.calculateDrag = function(m) 
                                    {
                                    // Magnitude is coefficient * speed squared
                                    var speed = m.velocity.mag();
                                    var dragMagnitude = this.c * speed * speed;
                                    
                                    // Direction is inverse of velocity
                                    var dragForce = m.velocity.copy();
                                    dragForce.mult(-1);
                                    
                                    // Scale according to magnitude
                                    // dragForce.setMag(dragMagnitude);
                                    dragForce.normalize();
                                    dragForce.mult(dragMagnitude);
                                    return dragForce;
                                    };
  
Liquid.prototype.display = function() 
                                {
                                    noStroke();
                                    fill(28, 120, 186);
                                    rect(this.x, this.y, this.w, this.h);
                                };

var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
};
  
Mover.prototype.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.display = function() {
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(123, 217, 176);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

Mover.prototype.checkEdges = function() {
    if (this.position.x > width) {
        this.position.x = width;
        this.velocity.x *= -1;
    } else if (this.position.x < 0) {
        this.velocity.x *= -1;
        this.position.x = 0;
    }
    if (this.position.y > height) {
        this.velocity.y *= -1;
        this.position.y = height;
    }
};



var draw = function() {
    background(219, 253, 255);
  
    // Draw water
    liquid.display();

    for (var i = 0; i < movers.length; i++) {
    
        // Is the Mover in the liquid?
        if (liquid.contains(movers[i])) {
            // Calculate drag force
            var dragForce = liquid.calculateDrag(movers[i]);
            // Apply drag force to Mover
            movers[i].applyForce(dragForce);
        }
        
        // Gravity is scaled by mass here!
        var gravity = new createVector(0, 0.1*movers[i].mass);
        // Apply gravity
        movers[i].applyForce(gravity);
        
        // Update and display
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
  
    fill(0, 0, 0);
    text("click mouse to reset",10,30);
};





