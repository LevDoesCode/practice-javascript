// We must have the async keyword before the function declaration
// this doesn't compile or run

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

function f1() {
    const number = await getNumber();
    console.log(number);
}
