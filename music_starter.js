
// vocal, drum, bass, and other are volumes ranging from 0 to 100


let Run = []; // array for holding running animation
let imageIndex = 0;
let frameDelay = 25; // frame delay of running animation
let frameCounter = 0;

let firstRun = true; // used for run animation

let palette = [   // colour palette for background colours
  [20,20,54],
  [16,35,48],
  [31,25,54],
  [250,0,0],
  [26,20,69]
];
let eyeWidth = 100; // white center part of ellipse shapes
let eyeHeight = 100; // white center part of ellipse shapes

let irisWidth = 100;
let irisHeight = 100;

let bgImage;
let bgLoaded = false;

let ellipseVocal = 100; // used for map of sizing of ellipse
let ellipseBass = 100; // used for map of bass for ellipse
let ellipseDrum = 100; // used for map of drum of ellipse


let b = 30; //  used for map of blue
let r = 30; //  used for map of red

let b2 = 30; // used for drum map of blue
let r2 = 30; // used for drum map of red

let red = 0;
let t = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {


if (drum > 50) {  // adjust threshold 0–100
    let c = random(palette);
    background(c[0], c[1], c[2]); //  uses my colours from palette
  } else {
    background(20,14,74); // default dark background
  }

  fill(153,196,247,200); // light blue
  noStroke();
  rect(0,540,700,400);

  fill(83, 120, 201,200); // blue
  rect(0,350,700,280);

  fill(48, 51, 140,200); // navy
  rect(0,150,700,290);

  fill(31,23,97,200); // dark blue
  rect(0,0,700,250);

  fill(red,0,0,t); // red
  rect(0,0,1400,800);

  red = map(drum,50,100,0,250); //  both maps used to make background more red the higher the drum value
  t = map(drum, 50,100,0,200);

  stroke(r2,0,b2);
  strokeWeight(5);
  noFill();
  ellipse(275,200,ellipseBass,ellipseBass);
  ellipse(275,200,ellipseBass-30,ellipseBass-30);
  ellipse(275,200,ellipseBass-60,ellipseBass-60) // large ellipse

  stroke(r,0,b);
  ellipse(275,200,ellipseVocal,ellipseVocal);
  ellipse(275,200,ellipseVocal-30,ellipseVocal-30);
  ellipse(275,200,ellipseVocal-60,ellipseVocal-60); // medium ellipse

  stroke(255);
  ellipse(275,200,ellipseDrum,ellipseDrum);
  ellipse(275,200,ellipseDrum-30,ellipseDrum-30);
  ellipse(275,200,ellipseDrum-60,ellipseDrum-60);// small ellipse

  fill(255);
  noStroke();
  ellipse(275,200,eyeWidth,eyeHeight); // size of eye

  fill(r2,0,b2);
  ellipse(275,200,irisWidth,irisHeight); // size of iris


  ellipseVocal = map(vocal, 0, 100, 30, 220);
  ellipseBass = map(bass, 0, 100, 30, 210);
  ellipseDrum = map(drum, 0, 100, 30, 330);

  eyeWidth = map(vocal, 0, 100, 5, 20);
  eyeHeight = map(vocal, 0, 100, 7, 90);

  irisWidth = map(bass, 0, 100, 2, 10);
  irisHeight = map(bass, 0, 100, 9, 70);

  b = map(other, 0, 100, 0, 250); // map for blue colour of medium ellipse
  r = map(other, 100, 0, 0, 250); // map for red colour of medium ellipse

  b2 = map(drum, 100, 0, 0, 250);
  r2 = map(drum, 0, 100, 0 , 250);

  if (!bgLoaded) {
    bgImage = loadImage('Background.png');
    bgLoaded = true;
  }

  if (bgImage) {
    image(bgImage, 0, 0, width, height);
  }


if (firstRun) { // loop run of running animation
 for (let i = 1; i < 12; i++)  {
      Run.push(loadImage('run/Run_Frame' + i + '.png'));
  }
  firstRun = false; // used to not crash from loading too many images :)

}

if (Run.length > 0) {
    image(Run[imageIndex], width/110, height/140); // width and height can be used to move run animation
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

}





