let angle = 0;

function preload() {
    // loads an image asynchnorously before running the program
    img = loadImage('./assets/img.jpg');
}

function setup() {
    // create a 3D canvas
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {

    // create background
    background(20);

    camera(0, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0)

    translate(0, 0, mouseX);

    // mouse stuff
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    /* to set the light position, think of the world's coordinate as:
    -width/2,-height/2 -------------- width/2,-height/2
                    |            |
                    |     0,0    |
                    |            |
    -width/2,height/2  -------------width/2,height/2 */

    // movement according to mouse
    // translate(locX, locY);

    // fill object with color
    // fill (0, 0, 0);

    // normalMaterial();

    // stroke object
    // stroke(255, 204, 0);
    // strokeWeight(1);
    noStroke();

    
    // create vector
    let vector = createVector(locX, locY, 300);

    // point light
    // pointLight(0, 0, 255, locX, locY, 350);
    // pointLight(255, 0, 0, locY, locX, 350);
    // directional light
    directionalLight(255, 255, 0, vector);
    
    // do not affect other stuff
    push();

    // rotate object
    rotateZ(angle);
    rotateY(angle);
    rotateX(angle);  

    // ambient stuff
    // ambientLight(0, 0, 255);
    ambientMaterial(255);

    // use an image as a texture
    texture(img);

    // create object
    torus(150, 50, 50, 50);
    
    // do not affect other stuff
    pop();

    translate(0, 200);
    rotateX(HALF_PI);
    ambientMaterial(255);
    plane(1000);

    // rotate object with time
    angle += 0.009;

}