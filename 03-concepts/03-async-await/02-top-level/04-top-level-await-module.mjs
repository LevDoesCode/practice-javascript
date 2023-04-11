function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

// Because this is an ECMA script moduele, we don't need to wrap the await call
// inside a function

const number = await getNumber();
console.log(number);
