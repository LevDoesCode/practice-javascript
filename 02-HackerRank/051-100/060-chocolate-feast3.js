function chocolateFeast(money, cost, promotion) {
    let wrap = parseInt(money / cost);
    let bars = parseInt(money / cost) + parseInt(wrap / promotion);
    while (wrap > promotion) {
        wrap = parseInt(wrap % promotion) + parseInt(wrap / promotion);
        bars += parseInt(wrap / promotion);
    }
    return bars;
}

console.log(chocolateFeast(15, 3, 2));
