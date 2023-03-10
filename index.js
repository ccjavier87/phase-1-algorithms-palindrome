

function isPalindrome(input) {
  // Write your algorithm here
const reverseInput = reverseIt(input)
if (input === reverseInput) {
  return true;
} else {
  return false;
}
  
}

function reverseIt(input) {
  const inputArray = input.split("");
  // let newArray = inputArray.map();
  // let reverseArray = newArray.reverse();
  let reverseArray = inputArray.reverse();
  let reverseInput = reverseArray.join("");
  return reverseInput;
}

/* 
  Add your pseudocode here
create function called isPalindrome

create a function to reverse input string
 - split input string into array (inputArray) --> const inputArray = input.split("") //separate each character
 - create new array (newArray) to copy inputArray non-destructively --> newArray = inputArray.map()
 - reverse newArray into reverseArray --> let reverseArray = newArray.reverse() //
  - for ()
 - combine reverseArray to make string reverseInput --> const reverseInput = reverseArray.join("") //join each character

check input
if input == reverseInput then it is palindrome: return true
if input != reverseInput then it is not a palindrome: return false

*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
