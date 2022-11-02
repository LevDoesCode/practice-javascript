function permutationEquation(p) {
    let y = [];
    for (let i=1; i<=p.length; i++) {
        let tempY = p.indexOf(p.indexOf(i) + 1) + 1;
        if (p[p[tempY-1]-1] == i) {
            y.push(p.indexOf(p.indexOf(i) + 1) + 1);
        }
    }
    return y;
}

let p = [5, 2, 1, 3, 4];
let q = [4, 3, 5, 1, 2];
permutationEquation(p);
permutationEquation(q);
