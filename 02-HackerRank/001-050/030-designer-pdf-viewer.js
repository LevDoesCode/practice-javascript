function designerPdfViewer(heights, word) {
    // We know the character code of a is 97, so the index is the code minus 97
    let letterArray = word.split('');
    // We iterate through the array and find the largest that corresponds with our letters
    // Doesn't work in older versions of node becvause heights is outside of scope and reduce() doesn't take an arguments parameter
    let maxHeight = letterArray.reduce((maxH, letter) => maxH < heights[letter.charCodeAt(0) - 97] ? heights[letter.charCodeAt(0) - 97] : maxH, 0);
    // or we can create a new array with all the heights
    let arrayOfHeights = [];
    letterArray.forEach((letter) => arrayOfHeights.push(heights[letter.charCodeAt(0) - 97]));
    maxHeight = arrayOfHeights.reduce((maxH, thisH) => maxH < thisH ? thisH : maxH, 0);
    return word.length * maxHeight;
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5];
console.log(designerPdfViewer(h, 'torn'));
