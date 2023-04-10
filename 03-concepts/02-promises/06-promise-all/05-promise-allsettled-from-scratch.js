const promiseAllSettled = (arrayOfPromises) => {
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
                            promiseValues[index] = {
                                status: 'fulfilled',
                                value: result
                            };
                            if (settledPromiseCount === arrayOfPromises.length) {
                                resolve(promiseValues);
                            }
                        }
                    )
                    .catch(reason => {
                        settledPromiseCount += 1;
                        promiseValues[index] = {
                            status: 'rejected',
                            reason: reason
                        };
                        if (settledPromiseCount === arrayOfPromises.length) {
                            resolve(promiseValues);
                        }
                    });
                }
            )
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

promiseAllSettled([]).then(values => console.log(values));

promiseAllSettled([getThree(), getTwo(), getOne()])
    .then(values => {
        console.log(values);
    });

// We know add a function that will return a rejected promise after 1 sec
const getFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('some error'), 1000);
    });
}

// the promises resolve in the same order they have in the array
promiseAllSettled([getThree(), getTwo(), getOne(), getFour()])
    .then(values => {
        console.log(values);
    })
    .catch(reason => console.log(reason));

// This resolves immediately with an empty array
promiseAllSettled([])
    .then(values => console.log(values));

// We can use no promise values
promiseAllSettled([1, 'string', true])
    .then(values => console.log(values));
