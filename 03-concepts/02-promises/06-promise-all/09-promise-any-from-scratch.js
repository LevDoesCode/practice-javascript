const promiseAny = (arrayOfPromises) => {
    if (arrayOfPromises.length == 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
    }
    const errors = [];
    let rejectedPromisesCount = 0;
    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            promise
                .then(value => {
                    resolve(value);
                })
                .catch(reason => {
                    rejectedPromisesCount += 1;
                    errors[index] = reason;
                    if(rejectedPromisesCount === arrayOfPromises.length) {
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                });
        });
    });
}

const getOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {reject(1)}, 1000);
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

promiseAny([])
    .then(value => console.log(value))
    .catch(reasons => {console.log(String(reasons))});

promiseAny([1, 'string', true])
    .then(values => console.log(values));

promiseAny([getThree(), getTwo(), getOne()])
    .then(value => console.log(value))
    .catch(reason => console.log(String(reason)));

return;

promiseAny([getOne(), getOne(), getOne()]);
