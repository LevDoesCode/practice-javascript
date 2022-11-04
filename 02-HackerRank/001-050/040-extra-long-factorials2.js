function extraLongFactorials(n) {
    let answer = BigInt(1);
    for (let i=1; i <=n; i++) {
        answer *= BigInt(i);
    }
    console.log(answer.toString());
}

extraLongFactorials(30);
extraLongFactorials(25);
