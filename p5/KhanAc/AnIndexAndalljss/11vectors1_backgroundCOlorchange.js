mouseMoved = function() {
    
    
    
    var mouse = new createVector(mouseX, mouseY);
    var mappedLen=map(mouse.mag(),0,dist(0,0,width,height),0,16**6-1);
    // background(mappedLen,mappedLen,mappedLen);
    background(ex(mappedLen,1),ex(mappedLen,2),ex(mappedLen,3));
    fill(255, 0, 0);
    text(mouse.mag(),mouse.x,mouse.y);
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
};
var setup=()=>{
	createCanvas(1200,600);

}
var ex=(x,n)=>{
	x1=parseInt(x/16**4);	
	x2=x-x1*16**4;
	x2=parseInt(x/16**2);
	x3=x1-x2*16**2;
	if(n==1) return x1;
	if(n==2) return x2;
	return x3;
}