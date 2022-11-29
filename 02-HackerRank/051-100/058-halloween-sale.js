function howManyGames(p, d, m, s) {
    let gameCount = 0;
    while (s - p >= 0) {
        s -= p;
        gameCount++;
        p - d >= m ? p -= d : p = m;
    };
    return gameCount;
}

console.log(howManyGames(20, 3, 6, 80));
console.log(howManyGames(16, 2, 1, 9981));
