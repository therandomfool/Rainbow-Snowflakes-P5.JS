let colors = ['#a41e35','#2f287e'];

let sW, h, v, rows, columns;

let myFont;
function preload() {
  myFont = loadFont('assets/ProductSans-Bold.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function colorSet() { 
    let newColor;

    let flip = random(1.5);
      if (flip<1) {
        colorMode(HSB);
        fill(random(10,250),random(55,185),random(30,180)); //reds
      } else {
        newColor = (colors[Math.floor(random(colors.length))]);
        fill(newColor);
      }
  

  
}

function draw() {
  background('#cbf6ff'); // blue
  frameRate(1.5);
  h = width/24;
  rows = 4;  
  columns = 6;
  textFont(myFont);
  for (let i = .5; i < columns; i++) {
    for (let j = .5; j < rows; j++) {
      let flip = random(3);
      if (flip<1) {
        snowflake3(width * i/columns,height* j/rows);
      } else if (flip<2){
        snowflake2(width * i/columns,height* j/rows);
      } else {
        snowflake(width * i/columns,height* j/rows);
      }
  
    }
  }    
}

function mousePressed(){

}

function snowflake (x,y) {
  colorSet();
  let spokes = Math.floor(random (3,30));

  push();
  translate(x,y);
  noStroke();
  rotate(random(0,PI/3));
  for (let i = 0; i <TWO_PI; i+=PI/spokes) {
  push();
    rotate(-i);
    textSize(h);
    textAlign(CENTER,CENTER);
    text('¡', 0, h);
  pop();
  }
  pop();
}


function snowflake2 (x,y) {
  colorSet();
  let spokes = Math.floor(random (3,30));
  
  push();
  translate(x,y);
  noStroke();
  rotate(random(0,PI/3));
  for (let i = 0; i <TWO_PI; i+=PI/spokes) {
  push();
    rotate(-i);
    textSize(h);
    textAlign(CENTER,CENTER);
    text('!', 0, h);
  pop();
  }
  pop();
}


function snowflake3 (x,y) {
  colorSet();
  let spokes = Math.floor(random (3,30));
  spokes = spokes/2;
    
  push();
  translate(x,y);
  noStroke();
  rotate(random(0,PI/3));
  for (let i = 0; i <TWO_PI; i+=PI/spokes) {
  push();
    rotate(-i);
    textSize(h);
    textAlign(CENTER,CENTER);
    text('!', 0, h);
    push();
    rotate((PI/spokes)/2);
    text('¡', 0, h);
    pop();
  pop();
  }
  pop();
}




// if enter is pressed, download a jpg file
function keyPressed() {
  if (keyCode == 13) {
	saveCanvas('winter', 'jpg');
  } else {
  }
}


// function windowResized() {
//   let wW = windowWidth;
//   let hH = windowHeight;
//   resizeCanvas(wW, hH);
// }