// Error-first callbacks
// This is only used when using callbacks
// Promises handle errors differently

function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== "number") {
            callback(new Error("Argument of type number is expected"));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

calculateSquare("wrong-type", function (error, result) {
    if (error !== null) {
        console.log("Caught error: " + String(error));
        return;
    }
    console.log(result);
});

calculateSquare(2, function (error, result) {
    if (error !== null) {
        console.log("Caught error: " + String(error));
        return;
    }
    console.log(result);
});
