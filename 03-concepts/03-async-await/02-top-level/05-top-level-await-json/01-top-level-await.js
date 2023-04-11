// By being part of a module specified in a json file
// we can now make top level code calls without wrapping the await

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

const number = await getNumber();
console.log(number);
