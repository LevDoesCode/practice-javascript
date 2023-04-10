const askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('John got pen'), 3000);
    });
}

const askBob = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Bob got pen'), 2000);
    });
}

const askSam = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sam got pen'), 1000);
    });
}

// Works the same as Promise.race to get the fastest resolved promise
Promise.any([askJohn(), askBob(), askSam()])
    .then(value => {
        console.log(value);
    });

// we add another function with reject
const askTom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Tom got no pen')), 500);
    });
}

// We do the same call but we need to catch the rejection
// We will get the first proise that is fulfill, it should be Sam
Promise.any([askJohn(), askBob(), askSam(), askTom()])
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.error(reason.message)
    });

// let's try with all rejected promises
Promise.any([askTom(), askTom(), askTom(), askTom()])
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.error(reason);
        console.error(String(reason));
        console.error(reason.errors[0]);
        console.error(String(reason.errors[0]));
    });

// sending an empty array
Promise.any([])
    .then(value => {
        console.log('Empty' + value);
    })
    .catch(reason => {
        console.error('Empty ' + reason);
        //console.error(String('Empty' + reason));
    });

// Sending non-promise values
Promise.any([12, 'string', true])
    .then(value => {
        console.log(value);
    });
