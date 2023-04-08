// This is called the executor function
const promiseFunction = function(resolve, reject) {
    resolve('value');
};

const myPromise = new Promise(promiseFunction);
console.log(myPromise);


const promiseOtherFunction = function(resolve, reject) {
    reject('The reason is you!');
};
const myOtherPromise = new Promise(promiseOtherFunction);
console.log(myOtherPromise);
