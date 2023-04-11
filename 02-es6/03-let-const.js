// Both let and const are block-scoped
console.log("let and const")
if (true) {
  let a1 = 1;
  const first = "Leo";
  // We can update the value a variables created with let
  a1 = 2;
  // Throws an error because we cannot update variables declared with const
  first = "Roar";
}