
var zOff;
var setup=()=>{
	createCanvas(1400,700);   
	zOff=0.0;     
    background(0);
}

var draw=()=>{
var xoff = 0.0;
for (var x = 0; x < 1400; x++) {
    var yoff = 0.0;
    for (var y = 0; y < 700; y++) {
        var bright = map(noise(xoff, yoff,zOff), 0, 1, 0, 255);
        stroke(bright, bright, bright);
        point(x, y);
        yoff += 0.01;
    }
    xoff += 0.01;
}
 zOff+=0.01;
}





