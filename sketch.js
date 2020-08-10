//Adjust dimensions here

//let circleRadius = [10, 11.68, 12.36, 13.04, 13.72, 14.4, 15.08, 15.76, 16.44, 17.12, 17.8, 18.48];
let circleRadius = [1, 1.68, 2.36, 3.04, 3.72, 4.4, 5.08, 5.76, 6.44, 7.12, 7.8, 8.48];
var rectX = 200;
var rectY = 125;
var rectWidth = 220;
var rectHeight = 248;


function RandomCircle() {
  var centerX = random(-rectWidth / 2, rectWidth / 2);
  var centerY = random(-rectHeight / 2, rectHeight / 2);
  var radius = random(circleRadius);
  var Circle = {
    x: centerX,
    y: centerY,
    radius: radius
  };

  return Circle;
}

function chooseCircle() {

  var circles = [];
  while (circles.length < 135) {
    var circle = RandomCircle();
    let conditionInside = (abs(circle.x) + circle.radius <= 0.5 * rectWidth) && (abs(circle.y) + circle.radius <= 0.5 * rectHeight);
    if (conditionInside) {
      var overlapping = false;
      for (let j = 0; j < circles.length; j++) {
        var prevCircles = circles[j];
        var distance = dist(circle.x, circle.y, prevCircles.x, prevCircles.y);

        if (distance < (circle.radius + prevCircles.radius)) {
          overlapping = true;
        }

      }
      if (!overlapping) {
        circles.push(circle);
      }
    }
  }

  return circles;
}

function maxCircle(circles) {

  let maxy = circles[0];

  for (let i = 0; i < circles.length; i++) {
    if (circles[i].radius > maxy.radius) {
      maxy = circles[i];
    }
  }
  return maxy;
}


function setup() {
  createCanvas(1000, 800);
  translate(rectX, rectY);
  noStroke();
  fill(250, 265, 100, 100);
  rect(0, 0, rectWidth, rectHeight);

  translate(rectWidth / 2, rectHeight / 2);

  let reqCircles = chooseCircle();
  let maxPoint = maxCircle(reqCircles);

  for (let i = 0; i < reqCircles.length; i++) {
    noStroke();
    fill(125, 200, 120, 150);
    ellipse(reqCircles[i].x, reqCircles[i].y, 2 * reqCircles[i].radius, 2 * reqCircles[i].radius);
  }
  console.log(reqCircles);
  console.log(maxPoint);
  stroke(0);
  strokeWeight(2);

  point(maxPoint.x, maxPoint.y);


}

function draw() {



}