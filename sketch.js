var yoff = 0;

function setup() {
  createCanvas(1200, 1200);
}

function draw(){
  background(0);
  translate(width/2,height/2);

  var r = 1000000;
  stroke(300);
  fill(255, 50);
  strokeWeight(1);
  rotate(PI/2);

  var da = PI/100;
  var dx = 0.1;

  var xoff = 0;
  beginShape();
  for(var a = -PI/2; a <= PI/2; a+= da){
    var n = noise(xoff, yoff);
    var r = sin(2*a) * map(n, 0, 1, 50, 300);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += dx;
    //point(x,y);
    vertex(x,y);
    r--;
  }

  for(var a = PI/2; a <= 3*PI/2; a+= da){
    var n = noise(xoff, yoff);
    var r = sin(2*a) * map(n, 0, 1, 50, 300);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff -= dx;
    //point(x,y);
    vertex(x,y);
    r--;
  }
  endShape();
  yoff += 0.1;
}