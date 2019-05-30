
//
var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++){
    var key = array [i];
    for (j = i -1; j >= 0 && key < array[j]; j--){
      var temp = array[j];
       array[j] = array[j+1];
      array[j+1] = temp;
    }
  }
    return array;
};

var array = [44,99,8,7,655,44,3,22,4,5,787,45,34];

console.log(insertionSort(array));
