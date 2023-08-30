const howUnlucky = (year) => {
  const d = new Date();
  let counter = 0;
  for (let month = 0; month < 12; month++) {
    d.setFullYear(year, month, 13);
    if (d.getDay() == 5) {
      counter++;
    }
  }
  return counter;
}

console.log(howUnlucky(2020))
console.log(howUnlucky(2026))
console.log(howUnlucky(2016))