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

Promise.race([askJohn(), askBob(), askSam()])
    .then(value => {
        console.log(value);
    });

// we add another function with reject
const askTom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Tom got no pen')), 500);
    });
}

// We do the same race but we need to catch the rejection
Promise.race([askJohn(), askBob(), askTom()])
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.error(reason.message)
    });

const askTheShop = () => {
    return Promise.resolve('We always have pens, $1 each');
}

Promise.race([askJohn(),askBob(), askSam(), askTheShop()])
    .then(value => {
        console.log(value);
    });
