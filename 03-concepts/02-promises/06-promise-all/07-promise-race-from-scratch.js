const promiseRace = (arrayOfPromises) => {
    if(arrayOfPromises.length === 0) {
        return new Promise((resolve, reject) => {});
    }

    return new Promise(
        (resolve, reject) => {
            arrayOfPromises.forEach(
                (promise) => {
                    // Support for non-promise values
                    if (promise instanceof Promise === false) {
                        promise = Promise.resolve(promise);
                    }
                    promise.then(value => {
                        resolve(value);
                        }
                    );
                    promise.catch(reason => {
                        reject(reason);
                    });
                }
            );
        }
    );
}

const getOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(1), 1000});
    });
}

const getTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(2)}, 2000);
    });
}

const getThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(3)}, 3000);
    });
}

promiseRace([getThree(), getTwo(), getOne()])
    .then(value => console.log(value));

// empty array
promiseRace([])
    .then(values => console.log(values));

// We know add a function that will return a rejected promise after 1 sec
const getFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {reject('some error')}, 500);
    });
}

// promise with fulfill status but undefined value
promiseRace([getThree(), getTwo(), getOne(), getFour()])
    .then(value => {
        console.log(value);
    });

// Promise with pending status but with the reject reason
promiseRace([getFour()])
    .then(value => {
        console.log(value);
    });

// This resolves immediately with a pending promise
promiseRace([])
    .then(values => console.log(values));

// We can use no promise values
promiseRace([1, 'string', true])
    .then(values => console.log(values));
