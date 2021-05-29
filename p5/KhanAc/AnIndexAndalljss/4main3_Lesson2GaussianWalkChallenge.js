// var generator;
// var generator=new Random(1);
var standardDeviation;
var mean;
var w;
function setup()
    {
        createCanvas(1200,600);
        standardDeviation=2;
        mean=0;
        w = new Walker();
        background(0);
    }

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};
Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(255, 0, 0,100);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    // var xStepSize = generator.nextGaussian()*standardDeviation+mean;
    // var yStepSize = generator.nextGaussian()*standardDeviation+mean;
    var xStepSize=randomGaussian(mean,standardDeviation);
    var yStepSize=randomGaussian(mean,standardDeviation);
  
    this.x += xStepSize;
    this.y += yStepSize;
};



draw = function() {
    w.walk();
    w.display();
};
