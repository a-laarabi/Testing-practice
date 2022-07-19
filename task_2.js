// Task 2
// Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
// Write at least one test for this function.


const reverseString = (string) => {
  let newString = '';
  let i = string.length-1;
  for (i ; i >= 0; i--){
    newString += string[i];
  }
  return newString;
}

module.exports = reverseString;