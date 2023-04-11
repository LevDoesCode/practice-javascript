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
    Promise.all([printNumber1(), printNumber2()]);
}

inParallel();
