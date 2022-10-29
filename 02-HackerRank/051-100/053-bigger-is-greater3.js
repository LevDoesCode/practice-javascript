function biggerIsGreater(word = w) {
    let answer = 'no answer';
    if (word.length <= 1) return answer;
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
            answer = '';
            // start to i + [li] + i to li + [i] + li to end of the string
            let head = word.slice(0, i);
            let middle = word.slice(i+1, li);
            let tail = word.slice(li+1, word.length);
            let sortedBody = answer.concat(middle, word[i], tail).split('').sort().join('');
            answer = answer.concat(head, word[li], sortedBody);
            // This is more direct but not very readable
            // answer = word.slice(0, i).concat(word[li], (word.slice(i+1, li).concat(word[i], word.slice(li+1, word.length))).split('').sort().join(''));
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
console.log(biggerIsGreater('dhckkhcbba'));
