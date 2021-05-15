// Adapted from Dan Shiffman, natureofcode.com
let randomCounts=[],rectWidth;
function setup()
	{
		createCanvas(400,400);
		for (var i = 0; i < 20; i++) 
			{
    		randomCounts[i] = 0;
			}
		rectWidth = floor(width/randomCounts.length);		
		// background(0);
	}


draw = function() 
	{
  		background(0); 
  		var index = floor(random(randomCounts.length));
  		randomCounts[index]++;  
  		for (var i = 0; i < randomCounts.length; i++) 
  			{
    		fill(173, 173, 173);
    		rect(i*rectWidth,height-randomCounts[i],rectWidth-1,randomCounts[i]);
    		fill(0, 0, 0);
    		text(i, i*rectWidth+3, height-10);
  			}
  	}
