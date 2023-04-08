function execFunc(resolve, reject, number) {
    setTimeout(function() {
        console.log(number);
        if (typeof(number) !== 'number') {
            //return reject(new Error('Argument Incorrect Type'));
            return reject('Argument Incorrect Type');
        }
        const result = number ** 2;
        resolve(result);
    }, 1000);
};

function calculateSquare(number) {
    console.log(number);
    const promise = new Promise(function (resolve, reject) {
        execFunc(resolve, reject, number);
    });
    return promise;
}


calculateSquare(2).then(value => {console.log(value)}, reason => {console.log(reason)});
calculateSquare('aba').then(value => {console.log(value)}, reason => {console.log(reason)});
