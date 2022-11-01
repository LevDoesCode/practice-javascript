function designerPdfViewer(heights, word) {
    // We know the character code of a is 97, so the index is the code minus 97
    let letterArray = word.split('');
    for (let i=0; i<letterArray.length; i++) {
        letterArray[i] = heights[letterArray[i].charCodeAt(0) - 97];
    }

    return word.length * Math.max(...letterArray);
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5];
console.log(designerPdfViewer(h, 'torn'));
