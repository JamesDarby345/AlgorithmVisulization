function pic(object){
  
  this.display= function(){
    var temp=60;
    for(let j=0; j<object.length; j++){
      fill("white");
      rect(temp,300, 20, -object[j]);
      temp+=40;
      
    }
  }
  
}
function rectan(object){
  this.display=function(){
    let c = color(255, 204, 0);
    fill(c);
    rect(object[0],object[1],object[2],object[3]);
  }
}
function message(str){
  this.display = function(){
    fill(0,102,253);
  textSize(32);
  text(str,200, 350);
  }
}



