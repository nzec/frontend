let ax, ay;
let bx, by;
let cx, cy;

let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Assigns random positions to the points
  ax = width / 2 - 10;
  ay = 0 + 10;
  bx = 0 + 10;
  by = height - 10;
  cx = width - 10;
  cy = height - 10;

  x = random(width);
  y = random(width);
  console.log(`Start : (${round(x)},${round(y)})`);

  // Makes Background Black
  background(0);

  // Draws the Points
  stroke(255);
  strokeWeight(8);
  point(ax, ay);
  point(bx, by);
  point(cx, cy);
}

function draw() {
  for (let i = 0; i < 300; i++) {
    // Draws the main point
    strokeWeight(1);
    point(x, y);

    // Generate a random number
    let r = floor(random(3));
    let dist = 0.5;

    // Conditionally move point half way
    // p5.js lerp() docs : https://p5js.org/reference/#/p5/lerp
    switch (r) {
      case 0:
        stroke(255, 255, 0);
        x = lerp(x, ax, dist);
        y = lerp(y, ay, dist);
        break;
      case 1:
        stroke(255, 0, 255);
        x = lerp(x, bx, dist);
        y = lerp(y, by, dist);
        break;
      case 2:
        stroke(0, 255, 255);
        x = lerp(x, cx, dist);
        y = lerp(y, cy, dist);
        break;

      default:
        console.log("this shouldn't have happened");
        break;
    }
  }
}
