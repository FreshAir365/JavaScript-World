function findLongestWordLength(str) {
  var longestWord = 0;
  str = str.split(" ");
  for (var i = 0; i < str.length; i++){
    if (str[i].length > longestWord){
      console.log("longestWord = " + longestWord);
      console.log("str[i].length = " + str[i].length);
      longestWord = str[i].length;
    }

  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
