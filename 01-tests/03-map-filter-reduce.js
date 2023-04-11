// Reduce
const tasks = [
    { name: 'Write', duration: 120 },
    { name: "Work", duration: 60 },
    { name: "Play", duration: 240 }];

let totalT = tasks.reduce((total, task) => total + task.duration, 0);
console.log(totalT);
let totalTime = tasks.reduce((total, task, index) => {
    if (index == 1) {
        return total.duration + task.duration;
    }
    else
        return total + task.duration;
})

console.log(totalTime);

const nums = [1, 2, 3, 4, 5];
totalTime = nums.reduce((total, current) => total + current);

console.log(totalTime);

const strs = ['One', 'Two', 'Three'];
let strr = strs.reduce((total, current) => total + current);
console.log(strr);
console.log(strs.join(' '));
