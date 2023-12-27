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
