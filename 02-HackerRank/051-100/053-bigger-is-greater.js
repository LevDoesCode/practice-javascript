// Original work by Lev Villanueva
function Partition(arr, l, h) {
    let pivot = arr[l];
    let i = l;
    let j = h;
    while (i < j) {
        do {
            i++;
        } while (arr[i] <= pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        if (i < j) {
            Swap(arr, i, j);
        }
    }
    Swap(arr, l, j);
    return j;
}

function Swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function QuickSort(arr, l, h) {
    if (l < h) {
        let j = Partition(arr, l, h);
        QuickSort(arr, l, j);
        QuickSort(arr, j + 1, h);
    }
}

function lowestHigher(word, char, start, end) {
    let lh = '|';
    let li = -1;
    for (let i = start; i < end; i++) {
        if (word[i] > char && word[i] < lh) {
            lh = word[i];
            li = i;
        }
    }
    return [lh, li];
}

function biggerIsGreater(w) {
    let answer = 'no answer';
    if (w.length <= 1) return answer;
    // String to array
    let word = [...w];
    // We'll iterate through the array back to front
    for (let i = word.length - 1; i >= 0; i--) {
        // We want to swap the current value with the lowest value that is higher, if it exists
        let lh = lowestHigher(word, word[i], i + 1, word.length);
        if (lh[0] != '|') {
            // swap characters
            Swap(word, i, lh[1]);
            // Sort the side of the array to the right of the position we found
            QuickSort(word, i+1, word.length);
            answer = word.join('');
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
