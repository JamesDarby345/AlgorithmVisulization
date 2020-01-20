let values = [];
mid = -31;
next = true;

function binarySearch(value) {
  noLoop();
  j = 0;
  for (i = 0; i < 301; i++) {
    values[i] = j;
    //print(values[i]);
    j = j + 1;
    //print(j);
  }
  //print(value);
  if (recursiveFunction(values, value * 10, 0, 300)) {
    print("Element Found");
  }
}

let recursiveFunction = function(arr, x, start, end) {
  noLoop();
  if (next) {
    print("am iterating");
    next = false;
    // Base Condition 
    if (start > end) return false;

    // Find the middle index 
    mid = Math.floor((start + end) / 2);
    print(mid + " mid");

    // Compare mid with given key x 
    print(arr[mid]+ " arrmid " + x + " value");
    if (arr[mid] === x) return true;

    // If element at mid is greater than x, 
    // search in the left half of mid 
    if (arr[mid] > x){
      setStart(start);
      setEnd(mid - 1);
      return recursiveFunction(arr, x, start, mid - 1);
    }else{
      setStart(mid + 1);
      setEnd(end);
      // If element at mid is smaller than x, 
      // search in the right half of mid 
      return recursiveFunction(arr, x, mid + 1, end);
    } 

  }else{
    loop();  
  }
}


//function drawLine(x) {
//  line(x, 0, x, height);
//}

function getMid() {
  return mid;
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    print("Key Pressed");
    next = true;
    print(next);
  } 
  print(next);
}