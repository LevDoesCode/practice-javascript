// We can declare variables with both keywords
console.log("--Declare and assign with var and let--");
var first = "Leo";
let last = "Roar";
console.log(first);
console.log(last);

// However, var has a function scope
console.log("--Declaring and using var outside their blocks. Function-Scoped--");
if(true){
  var var1 = "Glob1";
  for(;1==1;) {
    var var2 = "Glob2";
    break;
  }
}
for(;;) {
  var var3 = "Glob3";
  break;
}
console.log(var1); // We can call var1 even outside the if block
console.log(var2); // We can call var1 even outside the if-for block
console.log(var3); // We can call var1 even outside the for block

function func1() {
  var heyo = "hey";
}
function func2() {
  console.log(heyo);
}
// func2(); // This returns an error because var is function-scoped

// But, let has a block scope
console.log("--The let keyword is block-scoped only--");
if(true){
  let let1 = "Glob1";
  for(;1==1;) {
    var let2 = "Glob2";
    break;
  }
}
for(;;) {
  var let3 = "Glob3";
  break;
}
return;
// Lines below throw an error because the variables are not defined
console.log(let1); // We can call var1 even outside the if block
console.log(let2); // We can call var1 even outside the if-for block
console.log(let3); // We can call var1 even outside the for block