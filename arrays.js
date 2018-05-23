var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  var copy = [...arr];
  copy.unshift(el);
  return copy;
}
 

var destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr.unshift(el);
  return arr;
}

var addElementToEndOfArray = (arr, el) => {
  var copy = [...arr];
  copy.push(el);
  return copy;
}

var destructivelyAddElementToEndOfArray = (arr, el) => {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

