//
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  var result = str.map((value) =>{
  return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
