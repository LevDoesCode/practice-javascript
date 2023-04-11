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

async function f1() {
    const response = await getNumberReject();
}

f1();
