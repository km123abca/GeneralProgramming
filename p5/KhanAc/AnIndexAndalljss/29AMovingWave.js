var wave;
var setup=()=>
            {
                 createCanvas(700,700); 
                angleMode = "radians";
                wave = new Wave(200, 175, color(255, 0, 0, 100));

            }

var Wave = function(amplitude, period, color) {
    this.startAngle = 0;
    this.amplitude = amplitude;
    this.period = period;
    this.color = color;
    this.angleVel = (TWO_PI / this.period) * 5;
};

Wave.prototype.update = function() {
    this.startAngle += TWO_PI / this.period;
};

Wave.prototype.draw = function() {
    var startAngle=this.startAngle;
    fill(this.color);
    for(var x=0;x <=width;x+=24)
        {
            var y=height/2+this.amplitude *sin(startAngle);
            ellipse(x,y,24,24);
            startAngle-=this.angleVel;
        }
};





draw = function() {
    background(0);
    //translate(0, height/2);
    wave.update();
    wave.draw();
    //wave2.update();
    //wave2.draw();
};

