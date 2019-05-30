// Use the array methods slice and splice to copy each element of
// the first array into the second array, "in order".

function spliceMethod(arr1, arr2, n) {
var newArr = arr2.slice(); // creating a copy of the sencond array
arr1.forEach(function(element){
  newArr.splice(n, 0  ,element) // For each item in the first array
//we can use the splice() function
//to insert the item into index n of localArray.
})
return newArr;
}
console.log(spliceMethod([1, 2, 3], [4, 5, 6], 1));
