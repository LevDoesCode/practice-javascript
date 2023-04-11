// This works in the browser console, but not in top level code
// We would get the following error in node
// SyntaxError: await is only valid in async functions and the top level bodies of modules

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

const number = await getNumber();
console.log(number);
