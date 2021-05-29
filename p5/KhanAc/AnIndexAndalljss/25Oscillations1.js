// Adapted from Dan Shiffman, natureofcode.com

angleMode = "radians";
var period,amplitude;
var setup=()=>
          {
            createCanvas(700,700);  
            period = 120;     // length of one period in frames
			amplitude = 100;  // in pixels               
          }



    
draw = function() {
    background(0);
    stroke(255, 0, 0);
	strokeWeight(2);
	fill(0,255,255);
    
    // Calculating horizontal location according to
    //  formula for simple harmonic motion
    var x = amplitude * sin(TWO_PI * frameCount / period);
    push();
    translate(width/2, height/2);
    line(0, 0, x, 0);
    ellipse(x, 0, 48, 48);
    pop();
};