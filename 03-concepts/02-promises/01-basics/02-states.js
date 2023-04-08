// Pending state is the only one that can be changed
// Fulfilled and Rejected are final states and they can't be changed

const promiseFunction = function(resolve, reject) {
    resolve('value1');
    resolve('value2');
    reject('reason');
};

const myPromise = new Promise(promiseFunction);
console.log(myPromise);

const promiseOtherFunction = function(resolve, reject) {
    reject('reason');
    resolve('value1');
    resolve('value2');
    
};

const myOtherPromise = new Promise(promiseOtherFunction);
console.log(myOtherPromise);
