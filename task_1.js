// Task 1
// Write a function stringLength(string) that takes any string as an argument and returns its characters count.
// Now write a test for this function.
// Next, expand your function to make it check if the string is at least 1 character long and not longer than 10 characters. Throw errors if those conditions are not met.
// Add tests for the new functionality.

//stringLength(string){};
const stringLength = (string) => {
  if (string.length < 1 || string.length > 10){
    return false;
  }
  return string.length;
}
// console.log(stringLength("anas"));

module.exports = stringLength;