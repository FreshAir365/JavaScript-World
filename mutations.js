// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.
function mutation(arr) {
//sort the array first to test if all 1st str is in the 2nd str
arr.sort(function (a, b) {
  return a.length - b.length;

});

// test to see if every element in the 1st str is in the 2nd str

return arr[0].toLowerCase().split("").every(function(character){
  if(arr[1].toLowerCase().indexOf(character) === -1){
    return false;
  }
  else {
    return true;
  }
});

}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
