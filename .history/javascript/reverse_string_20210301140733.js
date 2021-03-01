// way #1 (built in reverse)
function reverseString(str) {
  const splitString = str.split(""); {
    return splitString.reverse() 
  }
}

// way #2 (for loop)
console.log(reverseString(`hello`))

function reverseString(str) {
  let bigReverseString = "";
  for (i=str.length -1; i >= 0; i--) {
    bigReverseString = bigReverseString + str[i];
  }
  return bigReverseString;
}

console.log (reverseString(`hello`))

 
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
