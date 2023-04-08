const promiseFunction = function(resolve, reject) {
    resolve('Hello ya\'ll');
};

const myPromise = new Promise(promiseFunction);
console.log(myPromise);
myPromise.then(function (value) {
    console.log(value);
});
console.log(myPromise);
