function printNumber1() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    console.log('printNumber1 is done');
                    resolve(1);
                },
            1000);
        }
    );
}

function printNumber2() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    console.log('printNumber2 is done');
                    resolve(2);
                },
            1000);
        }
    );
}

async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const number1 = await promise1;
    const number2 = await promise2;
    console.log(number1, number2);
}

inParallel();

// Refactoring using descruturing

async function inParallel2() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    [number1, number2] = [await promise1, await promise2];
    console.log(number1, number2);
}

setTimeout(() => {inParallel2();}, 2000);
