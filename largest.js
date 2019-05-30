// This program returns the largest number in an array
function largestOfFour(arr) {

  var numArr = [];

  for (var i = 0; i < arr.length; i++){
    var tempMax = arr[i][0];
    for (var j = 0; j < arr[i].length; j++){

      let largestNumber = tempMax;

      if (largestNumber >= tempMax){
        tempMax = largestNumber;
      }
    }
    numArr.push(tempMax);
  }
  return numArr;
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
