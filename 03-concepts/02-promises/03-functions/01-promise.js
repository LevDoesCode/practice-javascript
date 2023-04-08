// Implementing the executor funciton inside the Promise call
function calculateSquare(number) {
    const promise = new Promise( function (resolve, reject) {
        setTimeout(function() {
            if (typeof(number) !== 'number') {
                //return reject(new Error('Argument Incorrect Type'));
                return reject('Argument Incorrect Type');
            }
            const result = number ** 2;
            resolve(result);
        }, 1000);
    });
    return promise;
}

calculateSquare(2).then(value => {console.log(value)}, reason => {console.log(reason)});
calculateSquare('aba').then(value => {console.log(value)}, reason => {console.log(reason)});
