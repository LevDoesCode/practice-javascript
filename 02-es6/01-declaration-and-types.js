// We declare variables and assign them a value
console.log("--Declare and Assign--");
var a = 0;
let b = "my variable";
console.log(a);
console.log(b);

// Variables without an assigned value is of type undefined
console.log("--Types of variable values--");
let c;
let ar = new Array();
let ob = new Object();
console.log(typeof(c));
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(ar));
console.log(typeof(ob));

// We can concatenate a number and turn it into a string
console.log("--Concatenate a number with a string--");
let d = 2;
console.log(typeof(d));
d = 2 + "1";
console.log(d);
console.log(typeof(d));

// An inappropriate operation will return NaN, Not-A-Number
console.log("--NaN's and undefined--");
let un;
let n1 = parseInt("this is not a number"); // bad parse
let n2 = Math.sqrt(-1); // imaginary number result
let n3 = n2 * 3; // NaN is an operand
let n4 = "my string" / 3; // string operation that's not addition
let n5 = []; // empty array
let n6 = [1, , 3]; // undefined element
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n6[0]);
console.log(n6[1]);
// 0 is falsy, meaning when checked for boolean, evaluates to false
if (!n5.length)
  console.log("Array is empty");
if (!Array.isArray(n1) || !n1.length)
  console.log("Not an array");

NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Number.isNaN(NaN);  // true