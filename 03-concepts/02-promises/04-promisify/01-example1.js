// We promisify a regular function for exemplary purposes
function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1);
}

console.log(capitalize("hello"));

function capitalize2(text) {
    return new Promise(function (resolve, reject) {
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    });
}

capitalize2("hola").then((result) => console.log(result));
const pendingPromise = capitalize2("hola2").then((result) => result); // does  nothing

// Adding reject
function capitalize3(text) {
    return new Promise(function (resolve, reject) {
        if (typeof text !== "string") {
            return reject("Argument wrong type");
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    });
}

capitalize3("bye").then((result) => console.log(result));
capitalize3(1111).then((value) => {console.log(value);}, (reason) => {console.log('1111 ' + reason);});
capitalize3(2222).then((result) => console.log(result)).catch((error) => console.error('2222 ' + error));

function capitalize4(text) {
    return new Promise(function (resolve, reject) {
        if (typeof text !== "string") {
            return reject(new Error("Argument wrong type"));
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    });
}

capitalize4('hmmm').then((result) => console.log(result));
capitalize4(3333).then((value) => {console.log(value);}, (reason) => {console.error('3333 ' + reason);});
// with error object.
capitalize4(4444).then((result) => console.log(result)).catch((error) => console.error('4444 ' + error.message));
// witch catch
capitalize4(5555).then((value) => {console.log(value);}, (reason) => {console.error('5555 ' + reason);});
