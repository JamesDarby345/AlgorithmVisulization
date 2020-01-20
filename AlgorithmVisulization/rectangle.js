function Rectangle(x,y,w,h){
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.color = color("white");

  this.getX = function(){
    return this.x;
  }
  this.getY = function(){
    return this.y;
  }
  this.getH = function(){
    return this.h;
  }
  this.getW = function(){
    return this.w;
  }
  
  this.setColor = function(col){
    this.color = col;
  }
  
  this.setX = function(x){
    this.x = x;
  }
  
  this.clicked = function(){
    
  }
  
  this.display = function(){
    fill(this.color);
    rect(this.x,this.y, this.w, -(this.h));
  }
  
  this.cl = function(xm,ym){
    if (xm > this.x && xm<(this.x+this.w) && ym < this.y && (ym+this.h) > this.y){
      return true;
    } else { 
      return false;
    }
  }
  
  this.equals = function(rec){
    return this.h == rec.getH;
  }
  
  this.print = function(){
    return "h "+this.h;
  }
  
  
}