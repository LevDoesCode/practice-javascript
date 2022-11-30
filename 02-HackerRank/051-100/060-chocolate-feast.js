function calcChocolates(wrappers, promotion) {
    if (wrappers < promotion) {
        return 0;
    }
    let newBars = Math.floor(wrappers / promotion);
    return newBars + calcChocolates(newBars + wrappers % promotion, promotion);
}

function chocolateFeast(money, cost, promotion) {
    let startBars = Math.floor(money / cost);
    return startBars + calcChocolates(startBars, promotion);
}

console.log(chocolateFeast(15, 3, 2));
