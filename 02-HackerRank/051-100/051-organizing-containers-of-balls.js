// Original work by Lev Villanueva
function organizingContainers(container) {
    // We know there are as many types as there are containers
    let numTypes = container.length;
    // We'll count how many items there are in each container
    let typeCount = Array(numTypes).fill(0);
    // We'll count how many items are in each sub container
    let subContainerCount = Array(numTypes).fill(0);
    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < container[0].length; j++) {
            typeCount[i] += container[j][i];
            subContainerCount[i] += container[i][j];
        }
    }
    // We'll match the number of items of each type with a container
    // We'll do this by sorting the arrays and if there's a mismatch, return it's impossible
    typeCount.sort();
    subContainerCount.sort();
    console.log(typeCount);
    console.log(subContainerCount);

    for (let i = 0; i < container.length; i++) {
        if (typeCount[i] != subContainerCount[i]) {
            return "Impossible";
        }
    }
    return "Possible";
}

let cont1 = [[1, 1], [1, 1]];
let cont2 = [[0, 2], [1, 1]];
let cont3 = [[1, 3, 1], [2, 1, 2], [3, 3, 3]];
let cont4 = [[0, 2, 1], [1, 1, 1], [2, 0, 0]];

console.log(organizingContainers(cont1));
console.log(organizingContainers(cont2));
console.log(organizingContainers(cont3));
console.log(organizingContainers(cont4));
