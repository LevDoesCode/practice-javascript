function kaprekarNumbers(p, q) {
    let numbers = [];
    for (let i = p; i < q; i++) {
        let numDigits = i.toString().length;
        let squared = (i * i).toString();
        let l = parseInt(squared.slice(0, squared.length - numDigits));
        let r = parseInt(squared.slice(squared.length - numDigits));
        if (l + r == i || i == 1) {
            numbers.push(i);
        }
    }

    if (numbers.length == 0) {
        console.log('INVALID RANGE');
    }
    else {
        console.log(numbers.join(' '));
    }
}

kaprekarNumbers(1, 100);
