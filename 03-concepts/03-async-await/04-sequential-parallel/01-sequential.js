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

async function oneByOne() {
    const number1 = await printNumber1();
    const number2 = await printNumber2();
    console.log(number1, number2);
}
oneByOne();
