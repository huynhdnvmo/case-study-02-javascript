const isPandigital = (number) => {
  const numberStr = number.toString();
  const uniqueDigitArr = [...new Set(numberStr)];
  const arrCheck = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const missIndex = arrCheck.findIndex((num) => !uniqueDigitArr.includes(num));
  return missIndex < 0 ? {
    result: true,
    missNumber: null,
  } : {
    result: false,
    missNumber: arrCheck[missIndex]
  }
}

export { isPandigital }