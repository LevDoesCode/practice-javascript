// The await keyword wait for a promise is settled, with status resolved or rejected,
// not pending anymore

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

//  using async and await for a function that uses promises
async function f1() {
    const number = await getNumber();
    console.log(number);
}

// Async/Await is a wrapper, and we can achieve the same without it
function f2() {
    getNumber()
        .then(number => console.log(number));
}

// semi-parallel
f1();
f2();

// chained
f1()
    .then(() => f2());
