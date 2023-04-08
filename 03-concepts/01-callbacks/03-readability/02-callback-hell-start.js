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

calculateSquare(1, function (error, result) {
    console.log(result);
});
calculateSquare(2, function (error, result) {
    console.log(result);
});
calculateSquare(3, function (error, result) {
    console.log(result);
});

// this results in the 3 numbers appearing after 1 second in the order
// they were placed in the queue stack
console.log('------');
calculateSquare(1, function (error, result) {
    console.log(result);
    calculateSquare(2, function (error, result) {
        console.log(result);
        calculateSquare(3, function (error, result) {
            console.log(result);
        });
    });
});
