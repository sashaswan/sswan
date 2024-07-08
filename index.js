// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  // Function to check if a string is empty
  function isEmptyString(str) {
    return str.trim().length === 0;
  }
  
  // Function to convert miles to kilometers
  function milesToKilometers(miles) {
    return miles * 1.60934;
  }
  
  // Function to calculate the square root of a number
  function squareRoot(num) {
    return Math.sqrt(num);
  }
  
  // Function to find the largest number in an array
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Function to repeat a string n times
  function repeatString(str, n) {
    return str.repeat(n);
  }
  
  // Function to replace all occurrences of a substring in a string
  function replaceSubstring(str, search, replacement) {
    return str.split(search).join(replacement);
  }
  
  // Example usage:
  console.log(divide(10, 2)); // Output: 5
  console.log(isEmptyString("   ")); // Output: true
  console.log(milesToKilometers(3)); // Output: 4.82802
  console.log(squareRoot(16)); // Output: 4
  console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
  console.log(repeatString("hello", 3)); // Output: "hellohellohello"
  console.log(replaceSubstring("hello world", "world", "everyone")); // Output: "hello everyone"
  