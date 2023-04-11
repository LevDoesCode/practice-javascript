function calculateSquare(number) {
    const promise = new Promise( function (resolve, reject) {
        setTimeout(function() {
            if (typeof(number) !== 'number') {
                return reject(new Error('Argument Incorrect Type'));
                //return reject('Argument Incorrect Type');
            }
            const result = number ** 2;
            resolve(result);
        }, 1000);
    });
    return promise;
}

module.exports = calculateSquare;
