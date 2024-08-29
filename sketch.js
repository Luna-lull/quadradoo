function setup() {
  createCanvas(400, 400);
  background("rgb(201,5 ,5)")
}

function draw() {
  fill("black");
  stroke("white");
 if (mouseIsPressed) { rect(mouseX, mouseY, 20, 20);}
}
