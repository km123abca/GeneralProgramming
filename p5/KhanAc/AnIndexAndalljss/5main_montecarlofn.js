// Adapted from Dan Shiffman, natureofcode.com

// A function that will generate random numbers, but prefer higher numbers. Named after the Monte Carlo Method

var monteCarlo = function() {
    
    // We do this “forever” until we find a qualifying random value.
    while (true) {
        // Pick a random value.
        var r1 = random(1);
        // Assign a probability.
        var probability = r1;
        // Pick a second random value.
        var r2 = random(1);
        // Does it qualify? If so, we’re done!
        if (r2 < probability) {
            return r1;
        }
    }
};



var setup=()=>
    {
        createCanvas(1200,600);
        background(0);
          for (var i = 0; i < 10; i++) 
            {
            var num = monteCarlo();
            showOnScreen(num,30,i*25+300);
            var radius = num*30;
            ellipse(num*380, 50, radius, radius);
            }  
    }
var showOnScreen=(strr,x,y)=>
    {
        textSize(26);
        fill(0, 102, 153);
        text(strr, x,y);
    }
var draw=()=>
    {
      // Generate 10 random numbers and size ellipses based on them
  
    }