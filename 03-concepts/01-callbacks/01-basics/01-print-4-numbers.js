function print1() {
    const num1 = 1;
    console.log(num1);
}

function print2() {
    function getNum2() {
        return 2;
    }
    const num2 = getNum2();
    console.log(num2);
}

function print3() {
    const fs = require("fs");
    fs.readFile("./num3.txt", "utf-8", function (err, num3) {
        console.log(parseInt(num3));
    });
}

function print4() {
    const num4 = 4;
    console.log(num4);
}

print1();
print2();
print3();
print4();

// The output will be 1, 2, 4, 3
// because 3 uses a callback which is only completed after calling print4

// Message queue is only processed after teh call stack is empty
// That's when the JS engine check if there are any tasks in the message queue
// aka Queue stack and creates a new context for each tasks in the queue
