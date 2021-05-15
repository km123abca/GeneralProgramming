

function make2DArray(cols,rows)
	{
		var arr=new Array(cols);
		for (var i=0;i<arr.length;i++)
		{
			arr[i]=new Array(rows);
		}
		return arr;
	}




var grid;
var cols=20;
var rows=20;
var w=30;
var totalBees=10;


function setup()
	{
		createCanvas(401,401);
		cols=floor(width/w);
		rows=floor(height/w);
		grid=make2DArray(rows,cols);
		for (var i=0;i<cols;i++)
		{
			for (var j=0;j<rows;j++)
			{
				grid[i][j]=new Cell(i,j,w);

			}
		}

		var options=[];
		for (var i=0;i<rows;i++)
			for(var j=0;j<cols;j++)
			{
				options.push([i,j]);
			}


		for (var n=0;n<totalBees;n++)
		{
			//var xind=floor(random(rows));
			//var yind=floor(random(cols));
			//grid[xind][yind].bee=true;

			var index=floor(random(options.length));
			var choice=options[index];
			var i=choice[0];
			var j=choice[1];
			options.splice(index,1);
			grid[i][j].bee=true;

		}

		for (var i=0;i<cols;i++)
		{
			for (var j=0;j<rows;j++)
			{
				grid[i][j].countBees();

			}
		}
	}


function mousePressed()
	{
		
		for (i=0;i<cols;i++)
			for (j=0;j<rows;j++)
			{
				if(grid[i][j].contains(mouseX,mouseY))
				{
					grid[i][j].reveal();	
				}
			}

	}

function draw()
	{
		background(255);
		for (i=0;i<cols;i++)
			for (j=0;j<rows;j++)
			{
				grid[i][j].show();
			}

	}