function reverseString(str) {
  let splitString = str.split(""); 
  console.log(splitString(`hi`));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('ih'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
