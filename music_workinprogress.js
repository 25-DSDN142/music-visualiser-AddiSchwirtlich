
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true

let Snail = [];
let imageIndex = 0;
let frameDelay = 5;
let frameCounter = 0;




function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //if (firstRun) {
    //rectMode(CENTER);
    //Snail.push(loadImage('Run_Frame1.png'));
    //Snail.push(loadImage('Run_Frame2.png'));
    //Snail.push(loadImage('Run_Frame3.png'));
    //Snail.push(loadImage('Run_Frame4.png'));      
    //Snail.push(loadImage('Run_Frame5.png'));
    //Snail.push(loadImage('Run_Frame6.png'));
    //Snail.push(loadImage('Run_Frame7.png'));
    //Snail.push(loadImage('Run_Frame8.png'));
    //Snail.push(loadImage('Run_Frame9.png'));
    //Snail.push(loadImage('Run_Frame10.png'));
    //Snail.push(loadImage('Run_Frame11.png'));
    //Snail.push(loadImage('Run_Frame12.png'));


    //firstRun = false
  //}


  background(5);
  rectMode(CENTER);

 for (let i = 1; i < 12; i++)  {
      Snail.push(loadImage('Run_Frame' + i + '.png'));
  }



if (Snail.length > 0) {
    image(Snail[imageIndex], width/110, height/140);
  }

  frameCounter++;
  if (frameCounter >= frameDelay) {
    imageIndex++;
    if (imageIndex >= Snail.length) {
      imageIndex = 0;
    }
    frameCounter = 0;
  }

  frameDelay = map(drum, 0, 100, 10, 2);

  //var VocalFrame = int(map(vocal, 0,100, 0,11));

  //console.log(VocalFrame);
  //push();
  //scale(0.5);
  //image(Snail[VocalFrame], width/2, height/2)
  //pop();

   
   
}