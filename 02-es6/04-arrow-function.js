console.log("--Regular functions to arrow functions as parameters--")
const integers = [1, 2, 3];
console.log(integers);

// The map function of an array takes a function as argument
const updateInts1 = integers.map(function(number)
{
  return number += 1;
})
console.log(updateInts1);

// We can change the function argument to an arrow function as such
const updateInts2 = updateInts1.map((i) => {return i+1;}); // explicit return
console.log(updateInts2);

// We can simplify it by removing certain characters
const updateInts3 = updateInts2.map(i => i+1); // implicit return
console.log(updateInts3);

// When we use no arguments
const updateInts4 = updateInts3.map(() => "Leo");
console.log(updateInts4);
