let angle = 0;

function setup() {
    // create a 3D canvas
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {

    // create background
    background(0);

    
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
    translate(locX, locY);

    // fill object with color
    // fill (0, 0, 0);

    // normalMaterial();
    
    // rotate object
    rotateZ(angle);
    rotateY(angle);
    rotateX(angle);  
    
    // stroke object
    // stroke(255, 204, 0);
    // strokeWeight(1);
    noStroke();


    // point light
    // pointLight(0, 0, 255, locX, locY, 350);
    // pointLight(255, 0, 0, locY, locX, 350);
    
    // create vector
    let vector = createVector(locX, locY, 300);
    vector.normalize();

    // directional light
    directionalLight(255, 0, 0, vector);

    // ambient stuff
    ambientLight(0, 0, 255);
    ambientMaterial(255);

    // create object
    torus(300, 100, 100, 100);

    // rotate object with time
    angle += 0.009;
}