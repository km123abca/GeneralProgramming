function Cell(i,j,w)
	{
	/*
	if(random(1)<0.5)
		this.bee=true;
	else
		this.bee=false;
	*/
	this.bee=false;
	this.revealed=false;
	this.i=i;
	this.j=j;
	this.x=i*w;
	this.y=j*w;
	this.w=w;
	this.neighborCount=0;
	}


Cell.prototype.show=function()
	{
		stroke(0);
		noFill();
		//fill(255);
		rect(this.x,this.y,this.w,this.w);
		//image(img,this.x,this.y,this.w,this.w);
		if(this.revealed)
		{
			if(this.bee)
			{
				fill(127);
				ellipse(this.x+this.w*0.5,this.y+this.w*0.5,this.w*0.5);
			}
			else
			{
				fill(200);
				//noStroke();
				rect(this.x,this.y,this.w,this.w);
				if(this.neighborCount>0)
				{
				textAlign(CENTER);
				fill(0);
				text(this.neighborCount,this.x+this.w*0.5,this.y+this.w*0.5+5);
				}
			}
		}
	}

Cell.prototype.contains=function(x,y)
						{
							return (x>this.x && x<this.x+this.w && y>this.y && y<this.y+this.w);
						};

Cell.prototype.reveal=function()
						{
							this.revealed=true;
							if(this.neighborCount==0)
							{
								this.floodFill();
							}
						};
Cell.prototype.floodFill=function()
							{
								for (var i=-1;i<2;i++)
										for(var j=-1;j<2;j++)
										{
											var xind=this.i+i;
											var yind=this.j+j;
											if(xind>=0 && xind<cols && yind>=0 && yind<rows)
											{
											var neighbor=grid[this.i+i][this.j+j];
											if(!neighbor.bee && !neighbor.revealed) 
												neighbor.reveal(); 
											}
										}
							};
Cell.prototype.countBees=function()
								{
									if(this.bee)
									{
										this.neighborCount=-1;
										return -1;
									}
									var total=0;
									for (var i=-1;i<2;i++)
										for(var j=-1;j<2;j++)
										{
											var xind=this.i+i;
											var yind=this.j+j;
											if(xind>=0 && xind<cols && yind>=0 && yind<rows)
											{
											var neighbor=grid[this.i+i][this.j+j];
											if(neighbor.bee) 
												total+=1;
											}
										}
									this.neighborCount=total;
								};