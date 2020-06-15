// a is Angle and r is length (l looks like 1 and is weird)
// var is Function Scoped. Don't use var
let r1 = 200;
let r2 = 200;

let m1 = 40;
let m2 = 40;

let a1 = Math.PI / 2;
let a2 = Math.PI;

let a1_v = 0;
let a2_v = 0;

let a1_a = 0;
let a2_a = 0;

let g = 1;

let px2 = 0;
let py2 = 0;

const width = window.innerWidth;
const height = window.innerHeight;

var pg;

function setup() {
  // If somehow nothing shows up on the screen, remove this line
  pixelDensity(1);

  // Setup Canvas
  createCanvas(width, height);

  // For Trail
  pg = createGraphics(width, height);
  pg.background(255);

  pg.translate(width / 2, height / 2);
}

function draw() {
  // Direct Method using Angular Acceleration
  let a1_a =
    (-g * (2 * m1 + m2) * sin(a1) +
      -m2 * g * sin(a1 - 2 * a2) +
      -2 *
        sin(a1 - a2) *
        m2 *
        (a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2))) /
    (r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));

  let a2_a =
    (2 *
      sin(a1 - a2) *
      (a1_v * a1_v * r1 * (m1 + m2) +
        g * (m1 + m2) * cos(a1) +
        a2_v * a2_v * r2 * m2 * cos(a1 - a2))) /
    (r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));

  // Sets Background and strokes
  image(pg, 0, 0);

  // Position of the pendulum on the screen
  translate(width / 2, height / 2);

  // Definitions
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  // Properties for Lines and Ellipses
  stroke(0);
  strokeWeight(2);

  // Draw the pendulums and lines
  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);

  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;

  // Draw dots for Background
  pg.stroke(0);
  if (frameCount > 1) {
    pg.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}
