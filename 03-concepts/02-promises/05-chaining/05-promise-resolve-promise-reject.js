function logToConsole(somePromise) {
    somePromise.then(value => console.log(value))
}

const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
);

logToConsole(somePromise);

const value = 'string'; // trying to use a non-promise value
// logToConsole(value);

// We convert any value to a promise with status resolved
// and the original value in the promise value

logToConsole(Promise.resolve(value));

// We can also create a rejected promise
const rejectedPromise = Promise.reject(value);
// But creating a rejected promise needs to be caught in a catch or rejected block
// otherwise it will throw an error in console with code 'ERR_UNHANDLED_REJECTION'
 
const rejectedPromise2 = Promise.reject(new Error('some error')); // recommended
// But this error is not handled by logToConsole
//logToConsole(rejectedPromise); 

function logToConsole2(somePromise) {
    somePromise
        .then(value => console.log(value))
        .catch(error => {
            console.log(error.message);
        });
}
logToConsole2(rejectedPromise2);
