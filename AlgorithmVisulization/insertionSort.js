function InsertionSort(n){
  this.n = n;
  this.numberArray = [];
  this.randomarray = [];
  this.array = [];
  this.next;
  this.indnext = 0;
  
  this.initiate = function(){
    x = 60;
    for (var i = 1; i < this.n+1; i++){
      this.numberArray.push(i*8);
      this.array.push(new Rectangle(x,350,20,i*8));
      
      x = x+25;
    }
    x = 60;
    this.numberArray = shuffle(this.numberArray);
    //arrayCopy(this.array, this.randomarray, [this.n]);
    for (var i =0 ; i<this.n+1;i++){
      this.randomarray.push(new Rectangle(x,350,20, this.numberArray[i]));
      x = x+25;
    }
    
    this.next = this.array[this.indnext].getH();
  }
  
  this.clicked = function(x,y){
    for (var i = 0;i<this.n;i++){
      rec = this.randomarray[i];
      print(rec + " rec " + this.randomarray[i]);
      if (rec.cl(x,y) && (this.next == rec.getH())){
        rec.setColor("green");
        this.updateGreen(i);
        
        this.indnext = this.indnext+1;

        if (this.indnext<this.n){
          this.next = this.array[this.indnext].getH();
        } 
        // print(this.indnext);
        // print(this.next);
 
      } else if (rec.cl(x,y)){
        rec.setColor("red");
      }
    }
  }
  
  this.show = function(){
    line(50,350,350,350);
    
    for (var i = 0; i < this.n; i++){
      this.randomarray[i].display();
    }
  }
  
  this.updateGreen = function(j){
    temp = this.randomarray[j];
    //print(temp);
    for (var i = j; i>this.indnext; i--){
      // SET X AND Y AS WELL AND CHECK THE COLORS
      // print(i);
      // print(this.randomarray[i].getH());
      newX = this.randomarray[i-1].getX();
      //print(newX);
      this.randomarray[i-1].setX(newX+25);
      this.randomarray[i-1].setColor("white");
      this.randomarray[i] = this.randomarray[i-1];
    }
    temp.setX(60+this.indnext*25);
    this.randomarray[this.indnext] = temp;
    
    for (var i = this.indnext+1; i<this.n;i++){
      this.randomarray[i].setColor("white");
    }
    
    // for (var i =0; i<this.n;i++){
    //   print(this.randomarray[i].getH());
    // }
    // print("\n");
  }

  
}