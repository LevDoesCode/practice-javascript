function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(32)}, 2000);
    });
}

function getNumberReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {reject(new Error('Something wrong'))}, 2000);
    });
}

// We can use the usual try/catch block
async function f1() {
    try {
        const response = await getNumberReject();
    } catch (e) {
        console.log('Some error: ' + e);
        console.log('Some error: ' + e.message);
    }
}

f1();