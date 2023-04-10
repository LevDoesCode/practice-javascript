const promiseAll = (arrayOfPromises) => {
    if(arrayOfPromises.length === 0) {
        return Promise.resolve([]);
    }

    const promiseValues = [];
    let settledPromiseCount = 0;
    return new Promise(
        (resolve, reject) => {
            arrayOfPromises.forEach(
                (promise, index) => {
                    promise.then(
                        (result) => {
                            settledPromiseCount += 1;
                            promiseValues[index] = result;
                            if (settledPromiseCount === arrayOfPromises.length) {
                                resolve(promiseValues);
                            }
                        }
                    )
                    .catch(reason => {
                        reject(reason);
                    });
                }
            )
        });
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

promiseAll([getThree(), getTwo(), getOne()])
    .then(values => {
        console.log(values);
    });

// We know add a function that will return a rejected promise after 1 sec
const getFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('some error'), 1000);
    });
}

promiseAll([getThree(), getTwo(), getOne(), getFour()])
    .then(values => {
        console.log(values);
    })
    .catch(reason => console.log(reason));

// This resolves immediately with an empty array
promiseAll([])
    .then(values => console.log(values));

// We can modify the promiseAll to handle non-promise values
const promiseAll2 = (arrayOfPromises) => {
    if(arrayOfPromises.length === 0) {
        return Promise.resolve([]);
    }

    const promiseValues = [];
    let settledPromiseCount = 0;
    return new Promise(
        (resolve, reject) => {
            arrayOfPromises.forEach(
                (promise, index) => {
                    // Support for non-promise values
                    if (promise instanceof Promise === false) {
                        promise = Promise.resolve(promise);
                    }
                    promise.then(
                        (result) => {
                            settledPromiseCount += 1;
                            promiseValues[index] = result;
                            if (settledPromiseCount === arrayOfPromises.length) {
                                resolve(promiseValues);
                            }
                        }
                    )
                    .catch(reason => {
                        reject(reason);
                    });
                }
            )
        });
}

// We can now use no promise values
promiseAll2([1, 'string', true])
    .then(values => console.log(values));
