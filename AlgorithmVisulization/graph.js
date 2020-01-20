function Graphfxy() {
  onLineX = 0;//variable for keeping ellipseon the line from just mouseY position
  offsetFromBottom = 100;
  offsetFromLeft = 30;
  this.xleft = offsetFromLeft;
  this.xright = width;
  this.ytop = offsetFromLeft;
  this.ybottom = height - offsetFromBottom;
  
  stroke('#45b6fe');
  strokeWeight(5);
  
  line(this.xleft, 0, this.xleft, this.ybottom + offsetFromBottom); //tleft to bleft , part of graph setup
  line(this.xleft - offsetFromLeft, this.ybottom, this.xright, this.ybottom); //bleft to bright, part of graph setup 

  stroke('#000000');
  strokeWeight(2);

  text("Y", this.xleft - 4, this.ybottom + 20); //make resizable
  text("X", this.xleft - 20, this.ybottom + 4); //make resizable
  line(this.xleft, this.ybottom/2, this.xleft + 10, this.ybottom/2);//static 15 marker Y
  line(((this.xright-this.xleft-10)/2), this.ybottom-10, ((this.xright-this.xleft-10)/2), this.ybottom);//static 15 marker X
  text("15", 0.2 * offsetFromLeft, (this.ybottom/2) + 3);//static 15 marker Y
  text("15", ((this.xright-this.xleft-25)/2), (this.ybottom) + 20);//static 15 marker X
  
  strokeWeight(1);
  line(this.xleft, this.ybottom, this.xleft+300, this.ybottom-300); //function on graph
  
  //when triggered, no longer shows
  this.show = function() {
    strokeWeight(1);
    onLineX = ((this.ybottom - mouseY)) + offsetFromLeft; //puts cursor on line only for f(x)=y
    ellipse(onLineX, mouseY, 10, 10); //shows on function
    line(this.xleft - 10, mouseY, this.xleft + 10, mouseY);//dynamic position marker on Y
    text(nf(((this.ybottom - mouseY) / 10),"",1), 2 * offsetFromLeft, mouseY + 3);//dynamic value Y
    line(onLineX, this.ybottom - 10, onLineX, this.ybottom + 10);//dynamic position marker on X
    text(nf((onLineX/10)-3, "", 1), onLineX - 8, this.ybottom - 30);//dynamic value X
  }

}

function getPosx() {
  return onLineX;
}