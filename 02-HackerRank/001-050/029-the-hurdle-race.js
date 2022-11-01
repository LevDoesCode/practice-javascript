function hurdleRace(k, height) {
    let potions = 0;
    potions = height.reduce(
        function(numPotions, hurdleHeight) {
            (hurdleHeight > k) && (numPotions += hurdleHeight - k , k += hurdleHeight - k);
            return numPotions;
        },
        0
    );
    return potions;
}
let height = [1, 2, 3, 3, 2];
console.log(hurdleRace(1, height)); // 2
console.log(hurdleRace(3, height)); // 0

