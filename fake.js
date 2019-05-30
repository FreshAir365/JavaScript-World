//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//remove all falsy values from the array
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(id) {
    return (Boolean(id) === true);
  })
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
// an alternative return arr.filter(Boolean)
