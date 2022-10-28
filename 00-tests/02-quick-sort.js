// Uses the first element as the pivot
// Adapted from https://www.youtube.com/watch?v=7h1s2SojIRw
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

let arr = [5, 4, 6, 8, 3, 10, 12, 1, 3];
console.log(arr);
QuickSort(arr, 0, arr.length);
console.log(arr);
