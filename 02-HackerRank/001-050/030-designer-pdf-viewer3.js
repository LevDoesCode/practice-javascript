function designerPdfViewer(heights, word) {
    // We know the character code of a is 97, so the index is the code minus 97
    let letterArray = word.split('');
    // We create a new array with all the heights in our word
    let arrayOfHeights = [];
    letterArray.forEach((letter) => arrayOfHeights.push(heights[letter.charCodeAt(0) - 97]));
    // This is the same as using the Math.max(...arrayOfHeights)
    let maxHeight = arrayOfHeights.reduce((maxH, thisH) => maxH < thisH ? thisH : maxH, 0);
    return word.length * maxHeight;
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5];
console.log(designerPdfViewer(h, 'torn'));
