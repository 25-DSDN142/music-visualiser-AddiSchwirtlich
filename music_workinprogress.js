
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let Run = [];
let imageIndex = 0;
let frameDelay = 25; // frame delay of running animation
let frameCounter = 0;

let firstRun = true;


let palette = [   // colour palette for background colours
  [20,20,54],
  [16,35,48],
  [31,25,54],
  [31,132,250],
  [26,20,69]
];

let ellipseVocal = 100; // used for map of sizing of ellipse
let ellipseBass = 100; // used for map of bass for ellipse

let b = 30; //  used for map of blue
let r = 30; //  used for map of red

let b2 = 30; // used for drum map of blue
let r2 = 30; // used for drum map of red

function draw_one_frame(words, vocal, drum, bass, other, counter) {


if (drum > 50) {  // adjust threshold 0–100
    let c = random(palette);
    background(c[0], c[1], c[2]);
  } else {
    background(0,0,69); // default dark background
  }


  rectMode(CENTER);

if (firstRun) { // loop run of running animation
 for (let i = 1; i < 12; i++)  {
      Run.push(loadImage('run/Run_Frame' + i + '.png'));
  }
  firstRun = false;

}
  noStroke();
  fill(r2,0,b2);
  ellipse(250,400,ellipseBass,ellipseBass);

  fill(r,0,b);
  ellipse(250,400,ellipseVocal,ellipseVocal);

  fill(255);
  ellipse(250,400,50,50);

  ellipseVocal = map(vocal, 0, 100, 80, 150);
  ellipseBass = map(bass, 0, 100, 150, 210);

  b = map(other, 0, 100, 0, 250);
  r = map(other, 100, 0, 0, 250);

  b2 = map(drum, 100, 0, 0, 250);
  r2 = map(drum, 0, 100, 0 , 250);

if (Run.length > 0) {
    image(Run[imageIndex], width/110, height/140);
  }

  frameCounter++;
  if (frameCounter >= frameDelay) {
    imageIndex++;
    if (imageIndex >= Run.length) {
      imageIndex = 0;
    }
    frameCounter = 0;
  }

  frameDelay = map(bass, 0, 100, 10, 2);  // changes how fast or slow run animation is based off of drum

  //ellipse(250,300,100,100);
  
   
}