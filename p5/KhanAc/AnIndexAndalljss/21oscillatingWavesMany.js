// Adapted from Dan Shiffman, natureofcode.com

var startAngle;
var angleVel;
var amplitude;
var setup=()=>
          {
            createCanvas(700,700); 
            angleMode = "radians";

            startAngle = 0;
            angleVel = 0.23;
            amplitude = 200;
          }

var draw = function() {
  background(0);
  
  // In order to move the wave, we start at a different angle each time
  startAngle += 0.015;
  var angle = startAngle;
  
  for (var x = 0; x <= width; x += 24) {
    // Calculate the y location according to amplitude and sine of the angle.
    var y = amplitude * sin(angle);
   
    // Draw a circle at the x, y location
    stroke(0, 0, 0);
    fill(255, 0, 0, 50);
    strokeWeight(2);
    ellipse(x, y+height/2, 48, 48);
    // ellipse(width/2,height/2,50,50);
    // Increment the angle according to angular velocity
    angle += angleVel;
  }
};

