function timeInWords(h, m) {
    // "minutes" + "to" + "past" + "hour"
    let words = [
        'o\' clock', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
        'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
        'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];
    let minutes = m > 30 ? words[60 - m] + ' ': words[m] + ' ';
    (m % 15 != 0 && m != 1) && (minutes += 'minutes ');
    (m % 15 != 0 && m == 1) && (minutes += 'minute ');
    let to = m > 30 ? 'to ' : '' ;
    let past = m <= 30 ? 'past ' : '';
    let hour = m > 30 ? words[h + 1] + ' ': words[h] + ' ';
    if (m == 0) {
        return words[h] + ' ' + words[0];
    }
    return minutes + to + past + hour;
}

console.log(timeInWords(5, 47));
console.log(timeInWords(7, 15));
console.log(timeInWords(1, 1));
