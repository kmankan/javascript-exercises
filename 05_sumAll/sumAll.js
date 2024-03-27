const sumAll = function(j, k) {
  
  const numberRange = [j,k];
  //check whether each element of array is a number and is >= 0.
  if (numberRange.every(element => typeof element === 'number' && element >= 0)) {
    //sort the array from smallest to largest.
    numberRange.sort((a,b) => a-b);
    lower = numberRange[0];
    upper = numberRange[1];
    let sumOfNumbers = 0;
    //start with the lower number and add it to the sum, increment by one until the upper number is reached.
    for (i = lower; i <= upper; i++) {
      sumOfNumbers += i;
    }
    return sumOfNumbers
  } else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
