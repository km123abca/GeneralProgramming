

var angle;
var angleVel;
var setup=()=>
          {
            createCanvas(700,700); 
          	angle = 0;
			angleVel = 0.1;
            angleMode = "radians";        
          }

draw=()=>
	{
		background(255, 255, 255);
		stroke(0, 0, 0);
		strokeWeight(2);
		noFill();

		beginShape();
		for (var x = 0; x <= width; x += 5) {
		    // Here's an example of using the map function instead of an amplitude variable
		    var y = map(sin(angle), -1, 1, 0, height);
		    // Within beginShape and endShape, you use vertex to set the points of your shape
		    vertex(x, y);
		    angle += angleVel;
		}
		angle=0;
		endShape();
	}
