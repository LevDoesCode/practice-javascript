// the async keyword indicates JS that the funciton is asynchronous
// If the function doesn't return a promise, JS wraps the result with
// a resolved promise with the value

async function f1() {
    return 'Hello';
}

// returning a promise
async function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(true)}, 1000);
    });
}

async function f3() {
    return Promise.reject(404);
}
