
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
  [181, 13, 13],
  [26,20,69]
];

let ellipseVocal = 100; // used for map of sizing of ellipse
let ellipseBass = 100; // used for map of bass for ellipse
let ellipseDrum = 100; // used for map of drum of ellipse

let eyeWidth = 100; // 
let eyeHeight = 100; //

let irisWidth = 100;
let irisHeight = 100;

let b = 30; //  used for map of blue
let r = 30; //  used for map of red

let b2 = 30; // used for drum map of blue
let r2 = 30; // used for drum map of red




function draw_one_frame(words, vocal, drum, bass, other, counter) {


if (drum > 50) {  // adjust threshold 0–100
    let c = random(palette);
    background(c[0], c[1], c[2]); //  uses my colours from palette
  } else {
    background(0,0,69); // default dark background
  }


if (firstRun) { // loop run of running animation
 for (let i = 1; i < 12; i++)  {
      Run.push(loadImage('run/Run_Frame' + i + '.png'));
  }
  firstRun = false; // used to not crash from loading too many images :)

}
  stroke(r2,0,b2);
  strokeWeight(5);
  noFill();
  ellipse(250,200,ellipseBass,ellipseBass);
  ellipse(250,200,ellipseBass-30,ellipseBass-30);
  ellipse(250,200,ellipseBass-60,ellipseBass-60) // large ellipse

  stroke(r,0,b);
  ellipse(250,200,ellipseVocal,ellipseVocal);
  ellipse(250,200,ellipseVocal-30,ellipseVocal-30);
  ellipse(250,200,ellipseVocal-60,ellipseVocal-60); // medium ellipse

  stroke(255);
  ellipse(250,200,ellipseDrum,ellipseDrum);
  ellipse(250,200,ellipseDrum-30,ellipseDrum-30);
  ellipse(250,200,ellipseDrum-60,ellipseDrum-60);// small ellipse

  fill(255);
  noStroke();
  ellipse(250,200,eyeWidth,eyeHeight); // size of eye

  fill(r2,0,b2);
  ellipse(250,200,irisWidth,irisHeight); // size of iris


  ellipseVocal = map(vocal, 0, 100, 30, 220);
  ellipseBass = map(bass, 0, 100, 30, 210);
  ellipseDrum = map(drum, 0, 100, 30, 330);

  eyeWidth = map(vocal, 0, 100, 5, 20);
  eyeHeight = map(vocal, 0, 100, 10, 90);

  irisWidth = map(bass, 0, 100, 2, 10);
  irisHeight = map(bass, 0, 100, 9, 70);

  b = map(other, 0, 100, 0, 250); // map for blue colour of medium ellipse
  r = map(other, 100, 0, 0, 250); // map for red colour of medium ellipse

  b2 = map(drum, 100, 0, 0, 250);
  r2 = map(drum, 0, 100, 0 , 250);


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





