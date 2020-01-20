let lines = [10];
for (i = 0; i < 10; i++) {
  lines[i] = 0;
}

function setup() {
  cnv = createCanvas(400, 400);
  mousy = false;
  k = 0;
  g = new Graphfxy();
  xPos = 0;
  yPos = 0;
  triggered = false;
  binary = true;
  start = -1;
  end = -1;
  values[300];
  j = 0;
  for (i = 0; i < 301; i++) {
    values[i] = j;
    j = j + 1;
  }
  offsetFromBottom = 100;
  offsetFromLeft = 30;
  xleft = offsetFromLeft;
  xright = width;
  ytop = offsetFromLeft;
  ybottom = height - offsetFromBottom;
  ended = false;
  currentMode = 0;
  button = createButton('Cycle modes');
  button.mousePressed(changeMode);
  cnv.mousePressed(mousyF);
  t = new InsertionSort(10);
  t.initiate();
  rec = [0,1,2,3];
  arr = [144, 30, 44, 25, 98, 80, 62];
  bool = false;
  i = 0;
  strr = "Sorting...";
}

function draw() {
  background(350);
  if (currentMode == 0) {
    fill("yellow");
    strokeWeight(4);
    stroke(51);
    circle(195, 310, 85);
    fill('#000000');
    strokeWeight(1);
    textSize(30);
    stroke('#000000');
    fill(color(0, 0, 0));
    text("Hit cycle mode to cycle \nthrough the modes \nlearning how a binary \nsearch, insertion sort \nand bubble sort work \nvia a demo.", 50, 50);
    textSize(50);
    text(": \)", 175, 325);
  } else if (currentMode == 1) {
    fill('#ff0000');
    textSize(20);
    stroke('#ff0000');
    text('Binary Search', xleft + 20, ybottom + 80);
    fill('#000000');
    textSize(12);
    stroke('#000000');
    Graphfxy();
    if (!triggered) {
      g.show();
      stroke('#000000');
      strokeWeight(1);
      text('Click to set the point for the binary search to find.', xleft + 20, ybottom + 50);
    }
    if (mousy && !triggered) {
      print("bigMouseIsPressed");
      xPos = getPosx();
      yPos = mouseY;
      triggered = true;
      print(xPos + " " + yPos);
      value = (xPos / 10) - 3;
    }

    if (triggered) {
      stroke('#45b6fe');
      fill('#ffffff');
      ellipse(xPos, yPos, 10, 10);
      fill('#000000');
      line(xPos, yPos + 5, xPos, height);
      line(xPos - 5, yPos, 0, yPos);

      stroke('#000000');
      strokeWeight(1);

      text(nf((xPos / 10) - 3, "", 1), xPos + 20, yPos + 5);
      text(nf(30 - (yPos / 10), "", 1), xPos - 10, yPos - 20);
      lines[k] = getMid() + 30;
      k++;
      drawLine();
      text('Press the right arrow to iterate through the binary search', xleft + 20, ybottom + 50);

    }
    if (triggered && binary) {
      binary = false;
      binarySearch(value);
    } else if (triggered && !binary) {
      if (recursiveFunction(values, value * 10, start, end)) {
        print("Element Found");
        ended = true;
      }
    }
    if (ended) {
      fill('#ff0000');
      stroke('#ff0000');
      textSize(20);
      text("Element Found", xleft + 200, ybottom + 80);
      fill('#000000');
      textSize(12);
      stroke('#000000');
    }


  } else if (currentMode == 2) {
    fill('#000000');
    textSize(12);
    stroke('#000000');

    t.show();
    textSize(32);
    fill("black");
    text('Selection Sort', 100, 50);

    textSize(15);
    text('Selection sort takes the smallest element \nof the unsorted part of a list and brings it \nin the front of the list. It takes O(n^2) time. \n\nTry it yourself !', 75, 75);

    if (t.indnext == t.n) {

      textSize(48);
      fill(color(0, 0, 255));
      text('Sorted !', 125, 225);
    }
  } else if (currentMode == 3) {
    textSize(32);
    fill("black");
    text('Bubble Sort', 100, 50);

    fill('#000000');
    textSize(12);
    stroke('#000000');
    text("Bubble Sort works by swapping elements next \nto eachother if they are not in order, press up arrow to \niterate through it", 75, 75);
    fill('white');
    bubblez = new rectan(rec);
    bubblez.display();
    pict = new pic(arr);
    pict.display();
    msg = new message(strr);
  msg.display();
    
  }
}

function drawLine() {
  //line(x,0,x,height);
  for (i = 0; i < lines.length; i++) {
    if (lines[i] != 0) {
      line(lines[i], 0, lines[i], height);
    }
  }
}

function setBinary(bool) {
  binary = bool;
}

function setStart(s) {
  start = s;
}

function setEnd(e) {
  end = e;
}

function changeMode() {
  print(" a " + currentMode);
  currentMode += 1;
  if (currentMode > 3) {
    currentMode = 0;
  }
  print(" a " + currentMode);
}

function mousyF() {
  if (currentMode == 1) {
    mousy = true;
  }
  print("mousy " + mousy);
}

function mousePressed() {
  //print(" b " + currentMode);
  //currentMode += 1;
  //print(" b " + currentMode);
  print("Mouse pressed");
  if (currentMode == 2) {
    t.clicked(mouseX, mouseY);
  }
}

function keyz() {
  print("a");

  if (currentMode == 3) {
    print("in keyz");
    if (i === 6) {
      i = 0;
    }

    bubble(arr, i);
    i++;
    sortedCheck();
  }

}

document.addEventListener('keyup', (event) => {
  if (event.key == 'ArrowUp') {
    print("in event");
    keyz();
  }
});





function bubble(object, i) {

  if (object[i] > object[i + 1]) {
    temp = object[i];
    object[i] = object[i + 1];
    object[i + 1] = temp;
    recta=[(20+i*40)+30,320,80,-175];
    rec=recta;
  }
  tempp = new pic(object);
  pict = tempp;

  print("hey");
  return object;
}
function sortedCheck(){
  var sorted=true;
  for(ii =0;ii<arr.length-1; ii++){
    if(arr[ii]>arr[ii+1]){
      sorted = false;
    }
  }
  if(sorted){
    print("sorted");
    
    strr="Sorted!";
    rec=[0,0,0,0];
  }
}