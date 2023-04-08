function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

try {
    calculateSquare('bad argument', function (result) {
        console.log(result);
    });
} catch (error) {
    console.log('Caught error: ' + String(error));
}

// This produces an error because the try catch block is in the call stack
// while the async callback is in the message queue
