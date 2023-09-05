const formatMoney = (amount) => {
  const money = amount < 0 ? 0 : amount;
  return money.toLocaleString();
}

console.log('money', formatMoney(-1))
console.log('money', formatMoney(0))
console.log('money', formatMoney(10))
console.log('money', formatMoney(1000))
console.log('money', formatMoney(10000))
console.log('money', formatMoney(1000000))