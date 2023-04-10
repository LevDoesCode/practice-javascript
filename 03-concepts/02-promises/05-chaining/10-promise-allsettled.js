function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not wanted'), 2000);
    });
}

Promise.allSettled([
    askFirstDealer(),
    askSecondDealer(),
    askThirdDealer()
]).then(value => console.log(value));

// Sending primitive values
Promise.allSettled([12, 'string', true]);

// Sending empty array
Promise.allSettled([]); // returns promise with an empty array value
