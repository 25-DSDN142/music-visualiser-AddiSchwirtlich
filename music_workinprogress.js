
// vocal, drum, bass, and other are volumes ranging from 0 to 100


let Run = [];
let imageIndex = 0;
let frameDelay = 25;
let frameCounter = 0;

let firstRun = true;

let palette = [
  [20,20,54],
  [16,35,48],
  [31,25,54],
  [18,57,163],
  [26,20,69]
];

function draw_one_frame(words, vocal, drum, bass, other, counter) {

  //background(0,0,100);
  
if (drum > 50) {  // adjust threshold (0–100)
    let c = random(palette);
    background(c[0], c[1], c[2]);
  } else {
    background(0,0,69); // default dark background
  }

























//section 2 of music visualizer
  //background(0,0,100);
  rectMode(CENTER);

if (firstRun) {
 for (let i = 1; i < 12; i++)  {
      Run.push(loadImage('run/Run_Frame' + i + '.png'));
  }
  firstRun = false;

}

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

  frameDelay = map(bass, 0, 100, 10, 2);
   
}