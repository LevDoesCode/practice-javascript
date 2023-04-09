function calculateSquare(number) {
    const promise = new Promise( function (resolve, reject) {
        setTimeout(function() {
            if (typeof(number) !== 'number') {
                return reject(new Error('Argument Incorrect Type'));
            }
            const result = number ** 2;
            resolve(result);
        }, 1000);
    });
    return promise;
}

calculateSquare(2)
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
        return calculateSquare(3);
    })
    .then(value => {
        console.log(value);
    }, reason => {
        console.log('error happend: ' + reason); // catches the error from the first promise
    });

calculateSquare(6)
    .then(
        value => {
            console.log(value);
            return calculateSquare(7);
        }
    )
    .then(
        value => {
            console.log(value);
            throw new Error('Something went wrong');
        },
        reason => {
            console.log('error happend: ' + reason); // catches the error from the first promise
        }
    )
    .then(
        undefined,
        reason => {
            console.error('error happened: ' + reason);
            // catches the error from the second promise
            // we add another .then() with an undefined onFulfilled
        }
    );

// using catch
calculateSquare(8)
    .then(
        value => {
            console.log(value);
            return calculateSquare(9);
        }
    )
    .then(
        value => {
            console.log(value);
            throw new Error('Something went wrong');
        },
        reason => {
            console.log('error happend: ' + reason); // catches the error from the first promise
        }
    )
    .catch(
        reason => {
            console.error('error happened: ' + reason);
            // catches the error from the second promise
            // this time we don't need the undefined onFulfilled
        }
    );

// Rejected promise instead of throwing an error
calculateSquare(8)
    .then(
        value => {
            console.log(value);
            return calculateSquare(9);
        }
    )
    .then(
        value => {
            console.log(value);
            return new Promise((resolve, reject) => {
                return reject(new Error('Something went wrong!!!!!'));
            });
        },
        reason => {
            console.log('error happend: ' + reason); // catches the error from the first promise
        }
    )
    .catch(
        reason => {
            console.error('error happened: ' + reason);
            // catches the error from the second promise
            // this time we don't need the undefined onFulfilled
        }
    );

// We can throw an error
// Return a rejected promise
// A function we call throws an error

calculateSquare(4)
    .then(
        value => {
            console.log(value);
            return calculateSquare(5);
        }
    )
    .then(
        value => {
            console.log(value);
            throw new Error('Something went wrong');
        },
        reason => {
            console.log('error happend: ' + reason); // doesn't catch  the error from the second promise
        }
    );
