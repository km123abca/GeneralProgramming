// Adapted from Dan Shiffman, natureofcode.com

// var generator; works only in processing

function setup()
	{
		createCanvas(400,400);
		// generator = new Random(1);
		background(0);
	}

var draw = function() {
    
    // var num = generator.nextGaussian();
    var standardDeviation = 60;
    var mean = 200;
    
    // Multiply by the standard deviation and add the mean.
    // var x = standardDeviation * num + mean;
    var x=randomGaussian(mean,standardDeviation);
    
    noStroke();
    fill(214, 159, 214, 10);
    ellipse(x, 200, 16, 16);
};