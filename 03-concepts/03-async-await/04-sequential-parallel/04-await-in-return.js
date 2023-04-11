function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("printNumber1 is done");
            resolve(1);
        }, 1000);
    });
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("printNumber2 is done");
            resolve(2);
        }, 1000);
    });
}

async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    return [await promise1, await promise2];
}

console.log(inParallel());
