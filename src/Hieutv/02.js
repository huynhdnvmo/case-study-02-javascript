// Ex2: write a function formatMoney(amount) to format currency money

function formatMoney(amount) { const number = 1000000;
     const money = new Intl.NumberFormat().format(number)
      if (amount < 0) {
        return 0;
    }
    return (money)
}