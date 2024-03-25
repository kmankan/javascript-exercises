const repeatString = function(string, num) {
  let repetition = ''
  if (num >= 0) {
    for (i = 0; i < num; i++) {
      repetition += string;
    }
    return repetition
  } else return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
