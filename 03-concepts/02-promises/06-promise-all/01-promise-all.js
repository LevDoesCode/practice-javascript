// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// Invoke these 3 functions in parallel
Promise.all([
    askFirstDealer(), 
    askSecondDealer(), 
    askThirdDealer()
])
.then(prices => {
    console.log(prices);
});

// sending non-promise values
console.log(Promise.all([1, 'string', true]));
console.log(Promise.all([]));
