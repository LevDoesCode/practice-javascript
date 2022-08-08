// We normally concatenate a strings with the + operator as such
console.log("--Normal concatenation--");
let a = 2;
let b = 3;
let s1 = "We know that " + 2 + " plus " + b + " equals " + (a+b).toString() + ".";
console.log(s1);
console.log("We know that " + 2 + " plus " + b + " equals " + (a+b).toString() + ".");
console.log("We know that ", 2, " plus ", b, " equals ", (a+b).toString(), " or ", a+b, ".");

// We can also use a Template string
console.log("--Using a Template String--");
let s2 = `We know that ${a} plus ${b} equals ${a+b}.`;
console.log(s2);
