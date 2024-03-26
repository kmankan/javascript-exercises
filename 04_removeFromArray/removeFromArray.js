const removeFromArray = function(originalArray, ...args) {
  let newArray = originalArray;
  for (i = 0; i < arguments.length; i++) {
    newArray = newArray.filter(num => num !== args[i]); //if the element is true it will be included in the new Array
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


/* Key learnings:
> ...args is a rest parameter that collects all subsequent arguments
> filter(): array.filter(x => x.comparison);
  x.comparison is the condition that each element x is tested against. 
  It could be any valid expression that evaluates to a boolean value (true or false). 
  For example, x.property === value or x > 10.
 */
