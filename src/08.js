const isPandigital = (number) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const numberString = number.toString(); 
  for (let i = 0; i < numberString.length; i++) { 
    if (!numbers.includes(numberString[i])) { 
      continue; 
    }; 
    numbers.splice(numbers.indexOf(numberString[i]), 1); 
  }; 
  return !numbers.length; 
}

console.log(isPandigital(98140723568910));
console.log(isPandigital(90864523148909));
console.log(isPandigital(112233445566778899n));