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
        return calculateSquare(3);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(4);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(5);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(6);
    })
    .then(value => {
        console.log(value);
    });
