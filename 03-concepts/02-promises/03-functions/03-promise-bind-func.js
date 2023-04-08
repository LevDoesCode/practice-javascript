// We use an arrow function to preserve the context set by bind
function execFunc(resolve, reject) {
    setTimeout(() => {
        console.log(this.number);
        if (typeof(this.number) !== 'number') {
            return reject('Argument Incorrect Type');
        }
        const result = this.number ** 2;
        resolve(result);
    }, 1000);
};

function calculateSquare(number) {
    const promise = new Promise(execFunc.bind({number: number}));
    return promise;
}

calculateSquare(2).then(value => {console.log(value)}, reason => {console.log(reason)});
calculateSquare('aba').then(value => {console.log(value)}, reason => {console.log(reason)});