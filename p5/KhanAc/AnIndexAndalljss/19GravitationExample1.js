
var mover,attractor;
var setup=()=>
          {
            createCanvas(1200,600);            
            mover = new Mover();
            attractor = new Attractor();
                   
          }
var Attractor = function() 
    {
    this.position = new createVector(width/2, height/2);
    this.mass = 20;
    this.G = 1;
    this.dragOffset = new createVector(0, 0);
    this.dragging = false;
    this.rollover = false;
    };

Attractor.prototype.calculateAttraction = function(mover) 
    {
    // Calculate direction of force
    var force = p5.Vector.sub(this.position, mover.position);
    // Distance between objects       
    var distance = force.mag();
    // Limiting the distance to eliminate "extreme" results
    // for very close or very far objects                            
    distance = constrain(distance, 5, 25);
    // Normalize vector                    
    force.normalize();
    // Calculate gravitional force magnitude  
    var strength = (this.G * this.mass * mover.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
    };

// Method to display
Attractor.prototype.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
        fill(50, 50, 50);
    } else if (this.rollover) {
        fill(100, 100, 100);
    } else {
        fill(175, 175, 175, 200);
    }
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
};

// The methods below are for mouse interaction
  
Attractor.prototype.handleHover = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
        this.rollover = true;
    } else {
        this.rollover = false;
    }
};

Attractor.prototype.handlePress = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
        console.log("setting dragging to true");
        this.dragging = true;
        this.dragOffset.x = this.position.x - mx;
        this.dragOffset.y = this.position.y - my;
    }
};

Attractor.prototype.handleDrag = function(mx, my) {
    console.log("should we be dragging?" + this.dragging);
    if (this.dragging) {
        this.position.x = mx + this.dragOffset.x;
        this.position.y = my + this.dragOffset.y;
    }
};

Attractor.prototype.stopDragging = function() {
    console.log("setting dragging to false");
    this.dragging = false;
};


var Mover = function() {
    this.position = new createVector(400, 50);
    this.velocity = new createVector(1, 0);
    this.acceleration = new createVector(0, 0);
    this.mass = 1;
};
  
Mover.prototype.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255, 127);
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
  background(50, 50, 50);

  var force = attractor.calculateAttraction(mover);
  mover.applyForce(force);
  mover.update();
 
  attractor.display();
  mover.display();
};


var mouseMoved = function() {
    attractor.handleHover(mouseX, mouseY);
};

var mousePressed = function() {
    attractor.handlePress(mouseX, mouseY);
};

var mouseDragged = function() {
    attractor.handleHover(mouseX, mouseY);
    attractor.handleDrag(mouseX, mouseY);
};

var mouseReleased = function() {
    attractor.stopDragging();
};


