var sd;
var mean;
var sdcolor;
var meancolor;

setup=()=>{
	createCanvas(1400,700);
	sd=50;
	mean=0;	
	sdcolor=128;
	meancolor=128;
	background(0);
}
function getColorCode()
{
    var code=floor(randomGaussian()*sdcolor+meancolor);
    if(code < 0) {code=0;}
    if(code > 255) {code=255;}
    return code;
}
draw= function() {
    // background(0);
    stroke(getColorCode(), getColorCode(), getColorCode());
    var xpos=randomGaussian()*sd+mean;
    var ypos=randomGaussian()*sd+mean;
    point(width/2+xpos,height/2+ypos);
};