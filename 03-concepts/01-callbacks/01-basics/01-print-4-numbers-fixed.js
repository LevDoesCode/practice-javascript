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
    const callback = function (err, num3) {
        console.log(parseInt(num3));
        print4();
    };
    const fs = require("fs");
    fs.readFile("./num3.txt", "utf-8", callback);
}

function print4() {
    const num4 = 4;
    console.log(num4);
}

print1();
print2();
print3();

// We can also created a named function for print3
