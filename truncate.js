function truncateString(str, num) {
  // Note: inserting the three ... to the end will add to the string length
  //however if the num < = 3 it won't
  if (str.length > num && num > 3) {
    return str.slice(0, num) + '...';
  }
  else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  }
  else {
    return str;
  }

}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
// console.log(truncateString("A-", 1))
// console.log(truncateString("Absolutely Longer", 2))



// alternative
/*
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
*/
