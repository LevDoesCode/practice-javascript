// Both let and const are block-scoped
console.log("let and const");
if (true) {
  let a1 = 1;
  const first = "Leo";
  // We can update the value a variables created with let
  a1 = 2;
  // Throws an error because we cannot update variables declared with const
  first = "Roar";
}

// usually uppercase
const MY_CONST_NAME = 'value';

// we can change the values inside, but not object reference
const ACCELERATION = 9.85;
ACCELERATION = 10; // TypeError

// consts need to be initialized
const RED; // SyntaxError

// JS cost and Objects
const person = {age: 20};
person.age = 30; // OK
console.log(person.age);

person = { age: 40 }; // TypeError

// Freezing (shallow)
const person = Object.freeze({age: 20});
person.age = 30; // TypeError

const company = Object.freeze({
  name: 'Google',
  address: {
    street: '123 main st.',
  }
})

// `company.address` is not immutable and we can change or add properties
