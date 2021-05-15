
var angle;
var slider;
function setup()
	{
		createCanvas(400,400);
		angle=PI/4;
		slider=createSlider(0,TWO_PI,PI/4,0.01);
	}


function draw()
	{
		angle=slider.value();
		background(51);
		var len=100;
		stroke(250);
		translate(200,height);
		branch(100);
	}


function branch(len)
	{
		
		line(0,0,0,-len);
		translate(0,-len);
		if(len>4)
		{
			push();
			rotate(angle);		
			branch(len*0.67);
			pop();
			push();
			rotate(-angle);
			branch(len*0.67);
			pop();
		}
	    
	    //line(0,0,0,-len);

	}