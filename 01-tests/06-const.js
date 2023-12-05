let scores = [75, 80, 95];

// All setTimeouts are sent at the same time
for (let i=0; i<scores.length; i++) {
    setTimeout(() => {
        //console.log(scores[i]);
    }, 500);
}

// We can use a muple of i to set the timeouts and pass i as the index
for (let i = 0; i < scores.length; i++) {
    setTimeout((index) => {
        console.log(scores[index]);
    }, 500 * i, i);
}

// or use the i variable
for (let i = 0; i < scores.length; i++) {
    setTimeout(() => {
        console.log(scores[i]);
    }, 500 * i);
}
