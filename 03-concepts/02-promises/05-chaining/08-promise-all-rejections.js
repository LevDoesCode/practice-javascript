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

// Catching the rejected promise
Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    });

// But that leaves out all the fulfilled promises
// Let's fix that
Promise.all([
    askFirstDealer().catch(error => {return error}),
    askSecondDealer().catch(error => {return error}),
    askThirdDealer().catch(error => {return error}),
    ])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error + 'lol');
        // doesn't get printed, the value of the error appears in the fulfilled values array
    });

// Promise.all uses fail fast behavior
// If one promise gets rejected immediately, promise.all will reject immediately
// and not wait for the other promises

Promise.all([
    askFirstDealer().catch(error => {return error}),
    askSecondDealer().catch(error => {return error}),
    askThirdDealer().catch(error => {return error}),
    Promise.reject('rejected!!!')
    ])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error + 'lol');
    });
