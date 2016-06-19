var particleList = [];

function setup() {
  var myCanvas = createCanvas(800, 800);
  myCanvas.parent('p5container');
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++){
     particleList.push(new Particle(i*125,j*125));
    }
 
    

  }
}

function mousePressed() {
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].clicked();
  }
}

function draw() {
   background(256);
     randomSeed(0);
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }

}