// Original work by Lev Villanueva
function encryption(s) {
    let clean = s.replace(/ /g, '');
    let offset = Math.ceil(Math.sqrt(clean.length));
    let result = [];
    for (let i = 0; i < offset; i++) {
        let tempStringArray = [];
        for (let j=0; j < clean.length; j+=offset) {
            if (clean[i + j] != undefined) {
                tempStringArray.push(clean[i + j])
            }
        }
        result.push(tempStringArray.join(''));
    }
    return result.join(' ');
}

let s = "if man was meant to stay on the ground god would have given us roots";
console.log(encryption(s));
