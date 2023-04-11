// We need to use the await keyword inside an async function

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

// annonymous function around the previous code
(async function() {
    const number = await getNumber();
    console.log(number);
})(); // function call
