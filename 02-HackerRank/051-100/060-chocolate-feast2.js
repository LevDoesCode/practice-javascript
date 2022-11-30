function chocolateFeast(money, cost, promotion) {
    let startBars = Math.floor(money / cost);
    return startBars + (startBars - 1) / (promotion - 1);
}

console.log(chocolateFeast(15, 3, 2));
