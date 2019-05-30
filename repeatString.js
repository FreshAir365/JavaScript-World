function repeatStringNumTimes(str, num) {
  // repeat a string without usign repeat() method
  var strRepeat = "";
  for (var i = 0; i <= num; i++){
    if(num > 0){
      strRepeat += str;
    }
    else{
      return strRepeat = "";
    }

  }
  return strRepeat;
}
console.log(repeatStringNumTimes("abc", 3));

// an alternative way of doing is
/* function repeatStringNumTimes(str, num) {
  // repeat after me
  var strRepeat = "";
  while(num > 0){
    strRepeat += str;
    num --;
  }
  return strRepeat;
}
console.log(repeatStringNumTimes("abc", 3));
*/
