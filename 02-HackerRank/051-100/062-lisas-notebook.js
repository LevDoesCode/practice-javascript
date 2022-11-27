function workbook(numChapters, probsPerPage, probsPerChapterArray) {
    return probsPerChapterArray.reduce((carry, probsInChapter) => {
        for (let currProblem = 1; currProblem <= probsInChapter; currProblem++) {
            (carry.pageNum == currProblem) && (carry.specialCount += 1);
            (currProblem % carry.probsPerPage == 0 || currProblem == probsInChapter) && (carry.pageNum += 1);
        }
        return carry;
    }, { specialCount: 0, pageNum: 1, probsPerPage: probsPerPage }).specialCount;
}

let numChapters1 = 5;
let probsPerPage1 = 3;
let probsPerChapter1 = [4, 2, 6, 1, 10];

console.log(workbook(numChapters1, probsPerPage1, probsPerChapter1));