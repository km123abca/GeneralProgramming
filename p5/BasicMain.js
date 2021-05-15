let ex;
function setup()
	{
		createCanvas(400,400);
		ex=new MovingCircle(width/2,height/2);

	}

let MovingCircle=function (posx,posy)
	{
		this.posx=posx;
		this.posy=posy;
		this.velx=2;
		this.vely=6;
		/*
		this.move=()=>
			{
				this.posx+=this.velx;
				this.posy+=this.vely;	
				if(this.posx > width || this.posx < 0) 
					{
						this.posx-=this.velx; 	
						this.velx*=-1;	
					}
				
				if(this.posy > height || this.posy < 0) 
					{
						this.posy-=this.vely; 	
						this.vely*=-1;	
					}	
			}

		this.show=()=>
						{
							fill(155);
							ellipse(this.posx,this.posy,50,50);
						}
						*/
	}

MovingCircle.prototype.move=function()
						{
							this.posx+=this.velx;
							this.posy+=this.vely;	
							if(this.posx > width || this.posx < 0) 
								{
									this.posx-=this.velx; 	
									this.velx*=-1;	
								}
							
							if(this.posy > height || this.posy < 0) 
								{
									this.posy-=this.vely; 	
									this.vely*=-1;	
								}				

						}
MovingCircle.prototype.show=function()
						{
							fill(155);
							ellipse(this.posx,this.posy,50,50);
						}



function draw()
	{
		background(0,0,0);// if this is not called then screen will not be redrawn each time
		
		ex.move();
		ex.show();
	}

