const formatMoney = (amount) => {
  if (amount <= 0) return '0';

  //123456 = > 123,456
  //123456789 => 123,456,789

  let number = amount;
  let array = [];
  while (number > 0) {
    array.unshift(number % 1000);
    number = (number - (number % 1000)) / 1000
  }

  return array.length > 1 ? array.join(',') : amount;
}

export {
  formatMoney
}
