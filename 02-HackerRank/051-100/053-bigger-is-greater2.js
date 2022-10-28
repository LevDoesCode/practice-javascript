function biggerIsGreater(w) {
    let answer = 'no answer';
    if (w.length <= 1) return answer;
    let word = [...w];
    for (let i = word.length - 1; i >= 0; i--) {
        let lh = '|';
        let li = -1;
        for (let j = i; j < word.length; j++) {
            if (word[j] > word[i] && word[j] < lh) {
                lh = word[j];
                li = j;
            }
        }
        if (lh != '|') {
            [word[i], word[li]] = [word[li], word[i]]; // Swap
            answer = word.slice(0, i+1).concat(word.slice(i + 1, word.length).sort()).join('');
            break;
        }
    }
    return answer;
}

console.log(biggerIsGreater('ab'));
console.log(biggerIsGreater('bb'));
console.log(biggerIsGreater('hefg'));
console.log(biggerIsGreater('dhck'));
console.log(biggerIsGreater('dkhc'));
