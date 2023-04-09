// Implementing the executor funciton inside the Promise call
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

// using Error object
calculateSquare(2).then(value => {console.log(value)}, reason => {console.log(reason.message)});
calculateSquare('aba').then(value => {console.log(value)}, reason => {console.log(reason.message)});

// chaining
calculateSquare(1)
    .then(value => {console.log(value); return calculateSquare(6);})
    .then(value2 => {console.log(value2)});

// chained with errors
calculateSquare(3)
    .then(val1 => {console.log(val1); throw new Error('error');}) // only using return Error generates an error
    .then(val2 => {console.log(val2)}, reason => {console.error(reason.message)});

calculateSquare(5)
    .then(val1 => {console.log(val1); return 'errorx';})
    .then(val2 => {console.log(val2)}, reason => {console.error(reason)});

// chain with unfulfilled promise
calculateSquare(5)
    .then(val1 => {console.log(val1); return calculateSquare('string')})
    .then(val2 => {console.log(val2)}, reason => {console.error(reason.message)});
