import { apiKey } from "./util.js";
import asfd from "./util.js"; // This will import the default export

console.log(apiKey);
console.log(asfd);

import apiKey3 from "./util.js"; // This will import the default export with a different name
console.log(apiKey3);
import { apiKey2, abc as content } from "./util.js";
import * as util from "./util.js";

console.log(util.apiKey);
console.log(content);
console.log(apiKey2);
console.log(util.default);
console.log(util.abc);

const userMessage = "Hello World!!!";
console.log(userMessage);
// userMessage = "Hi"; // This will throw an error
let userMessage2 = "Hi";
userMessage2 = "Hola"; // This will work
console.log(userMessage2);

function createGreeting(userName, message = "Hello!") {
    console.log(userName);
    console.log(message);
    return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
console.log(greeting1);
console.log(createGreeting("Manuel", "Hello, what's up?"));
console.log(createGreeting("Anna"));

// Printing an arrow function
console.log(() => {
    return "Hi";
});

// Printing the result of calling an annonymous arrow function
console.log(
    (() => {
        return "Hi";
    })()
);

// Printing the result of calling an annonymous arrow function but without the curly braces
console.log((() => "Hi")());

// Exporting an annonymous function with the function keyword
// export default function() {
//     console.log("Hi");
// }

// Exporting an annonymous function with the arrow function
export default (userName, message) => {
    console.log("Hi " + userName + ", " + message);
};

// Objects
const userName = "Lev";
const agex = 30;

const person = {
    name: userName,
    age: agex,
    greet: function () {
        console.log("Hi, I am " + this.name);
        return this.name;
    },
    greet2() {
        console.log("Hi, I am " + this.name);
        return "";
    },
};

// Printing the object
console.log(person);
// Printing the object's name property
console.log(person.name);
// Calling the object's greet method
console.log(person.greet());

// Declaring a class
class Person {
    constructor(name = "Lev", age = 30) {
        this.name = name;
        this.age = age;
    }
    // Instance field, unique to each instance of the class
    greet = function () {
        console.log("Hi, I am " + this.name);
    };
    // Class property, shared by all instances of the class
    greet2() {
        return "Hi, I am " + this.name;
    }
    // Class field, unique to each instance of the class
    // Sames a Instance field
    greet3 = () => {
        return "Greet3: Hi, I am " + this.name;
    };

    // Class field
    greet4 = function () {
        this.greet5 = () => {
            return "Greet5: Hi, I am ";
        };
        return this.greet3();
    };
}

function MyClass() {
    this.routine = () => {};
}

const lev1 = new Person();
const lev2 = new Person("Lev2", 31);
console.log(lev1);
console.log(lev2);
lev1.greet();
console.log(lev2.greet2());
console.log(lev2.greet3());
console.log(lev2.greet4());
console.log(lev2.greet5());
console.log(new MyClass());

// Arrays
const hobbies = ["Sports", "Cooking", "Reading"];
// Showing the array and array items
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
// Adding an item to the array
hobbies.push("Programming");
console.log(hobbies);
// Removing an item from the array
hobbies.pop();
console.log(hobbies);
// Showing a specific item from the array
const index = hobbies.findIndex((hobby) => {
    return hobby === "Cooking";
});

const index2 = hobbies.findIndex((hobby) => hobby === "Programming");

console.log(index);
console.log(hobbies[index]);
console.log(index2);

// Map method
const exes = hobbies.map((hobby) => hobby + "!");
console.log(exes);

const exes2 = hobbies.map((hobby) => ({ text: hobby }));
console.log(exes2);

// Desctructuring
const userData = ["Lev", "Villa"];
const firstN = userData[0];
const lastN = userData[1];

// Using destructuring
const [firstName, lastName] = userData;
console.log(firstName);

// Desctructuring objects
// Normal declaration and assingment
const user2 = { name: "Lev", age: 30 };
const name2 = user2.name;
const age2 = user2.age;

// Desctructuring the array
const { name3, age3 } = user2;
console.log(name3, age3);
// We need to use the same name as the property
const { name, age } = user2;
console.log(name, age);
// Using aliases in destructuring
const { name: userName2, age: userAge2 } = user2;
console.log(userName2, userAge2);

// SPREAD OPERATOR
const hobbies2 = ["Skiiing"];
// Not usually the desired result
const mergedArray1 = [hobbies, hobbies2];
console.log(mergedArray1);
// Using the spread operator
const mergedArray2 = [...hobbies, ...hobbies2];
console.log(mergedArray2);
// Using the spread operator with objects
const user3 = { name: "Lev", age: 30 };
const user4 = {
    ...user3,
    hobbies: [...hobbies],
};
console.log(user4);

// Control structures
let pass = "Hello";
// pass = prompt("Enter your password");

if (pass === "Hello") {
    console.log("Hello works");
} else if (pass === "hello") {
    console.log("hello works");
} else {
    console.log("Nothing works");
}

// Using for/of. Doens't skip empty elements
const hobbies3 = ["Sports", "Cooking", "Reading"];

for (const hobby of hobbies3) {
    console.log(hobby);
}

// Grabbing the DOM
const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");
console.log(list);
list.children[0].remove();

// Functions as parameters

function handleTimeOut1() {
    console.log("Timeout1");
}

const handleTimeOut2 = () => {
    console.log("Timeout2");
};

setTimeout(handleTimeOut1, 500);
setTimeout(handleTimeOut2, 1000);
setTimeout(() => {
    console.log("Timeout3");
}, 1500);

function greetDeep(greetFunction) {
    greetFunction();
}

greetDeep(() => console.log("Hello Greeter"));

function init() {
    function start() {
        console.log("Starting...");
    }
    start();
}

init();
