 function Particle(x,y) {
   this.x = x;
   this.y = y;
   this.col = color(0, 0, 0, 200);

   this.display = function() {
    // stroke(255);
     fill(this.col);
     rect(this.x, this.y, 135, 135);
   }

   this.move = function() {

     this.x += random(-1, 1)/91;
     this.y += random(-1, 1)/91;
   }

   this.clicked = function() {
     var d = dist(mouseX, mouseY, this.x, this.y);
     if (d < 12) {
       this.col = color(0, 0, 255, 100);
     }
   }
 }

   //var p = new Particle();