// Adapted from Dan Shiffman, natureofcode.com
var w;
function setup()
	{
		createCanvas(400,400);
		w = new Walker();
		background(0,0,0);
		
	}
var Walker = function() 
	{
    this.x = width/2;
    this.y = height/2;
	};

Walker.prototype.display = function() 
	{

    stroke(255, 0, 0);
    fill(255, 204, 100);
    point(this.x, this.y);    
	};


Walker.prototype.walk = function() 
	{
	    var choice = floor(random(4));
	    if (choice === 0) 
	    	{
	        this.x++;
	    	} 
	    else if (choice === 1) 
	    	{
	        this.x--;
	    	} 
	    else if (choice === 2) 
	    	{
	        this.y++;
	    	} 
	    else 
	    	{
	        this.y--;
	    	} 
	};



draw = function() 
	{
    w.walk();
    w.display();
	};
