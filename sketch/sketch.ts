//global vars  and types
let numberOfShapesControl: p5.Element;

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("launch - Setup initialized - P5 is running");

  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER).noFill().frameRate(30);
  // NUMBER OF SHAPES SLIDER
  numberOfShapesControl = createSlider(1, 30, 15, 1).position(10, 10).style("width", "100px");
}

// p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {

  // CLEAR BACKGROUND
  background(0);

  // center of screen
  translate(width / 2, height / 2);

  const numberOfShapes = <number>numberOfShapesControl.value();
  const colours = ColorHelper.getColorsArray(numberOfShapes);


  // consistent speed regardless of frame rate
  const speed = (frameCount / (numberOfShapes * 30)) * 2;

  // draw all shapes
  for (var i = 0;i < numberOfShapes;i++) {
    push();
    const lineWidth = 10;
    const spin = speed * (numberOfShapes - i);
    const numberOfSides = 3 + i;
    const width = 40 * i;
    strokeWeight(lineWidth);
    stroke(colours[i]);
    rotate(spin);
    PolygonHelper.draw(numberOfSides, width)
    pop();
  }
}