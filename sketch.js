let cor; 
let x; // x
let y; // y




function setup() {
random (0, 255);
  createCanvas(1200, 1024);
background ("white")
cor = color(random(0, 255), random(0, 255), random(0, 255));
x = 200;
y = 200;
}

function draw() {
fill (cor);
                 circle(x, y, 50)

if(mouseX < x) {
x = x - 1;
}
if (mouseX > x) {
x = x + 1;
}

if(mouseY < y) {
y = y -1;
}
if(mouseY > y) {
y = y + 1
}

if(mouseIsPressed) {

cor = color(random(0, 255), random(0, 255), random(0, 255),
random(0, 100));
}




}
