function libraryFine(rd, rm, ry, dd, dm, dy) {
    let returnDate = new Date(ry, rm - 1, rd);
    let dueDate = new Date(dy, dm - 1, dd);
    let fine = 0;
    let yearsLate = returnDate.getFullYear() - dueDate.getFullYear();
    if (yearsLate == 0) { // Same year or earlier
        let monthsLate = returnDate.getMonth() - dueDate.getMonth();
        if (monthsLate == 0) { // Same month or earlier
            let daysLate = returnDate.getDate() - dueDate.getDate();
            if (daysLate >= 1) { // Book is late
                fine = 15 * daysLate;
            }
        } else if (monthsLate > 0) { // Next month or later in the same year
            fine = 500 * monthsLate;
        }
    } else if (yearsLate > 0) {
        fine = 10000;
    }
    return fine;
}

console.log(libraryFine(4, 6, 2018, 5, 7, 2018));
console.log(libraryFine(14, 8, 2018, 5, 7, 2018));
console.log(libraryFine(16, 7, 2018, 15, 7, 2018));
console.log(libraryFine(1, 1, 2018, 1, 1, 2017));
console.log(libraryFine(1, 1, 2018, 31, 12, 2017));
console.log(libraryFine(15, 7, 2014, 1, 7, 2015));
console.log(libraryFine(28, 2, 2015, 15, 4, 2015));
