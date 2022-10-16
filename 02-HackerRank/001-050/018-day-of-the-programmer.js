function dayOfProgrammer(year) {
  if (year == "1918") return "26.09.1918";
  let isLeap = year <= 1917 ? (year % 4 == 0 ? true : false) : year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ? true : false;
  let day = isLeap ? 256 - 244 : 256 - 243;
  return String(day + ".09." + year);
}

console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
