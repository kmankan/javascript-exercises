const reverseString = function(inputString) {
  const stringCharactersArray = inputString.split("");
  const reversedStringCharactersArray = [...stringCharactersArray].reverse();
  const reversedInputString = reversedStringCharactersArray.join("");
  return reversedInputString
};

// Do not edit below this line
module.exports = reverseString;
