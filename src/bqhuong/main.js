const axios = require("axios");

// Task 1 :- Using .filter and .map to get new array have number > 20 and format numbers to array number
//         - Using .reduce get total number in objects array
const objects = [
  {
    number: 45,
  },
  {
    number: 4,
  },
  {
    number: 9,
  },
  {
    number: 16,
  },
  {
    number: 25,
  },
  {
    number: 16,
  },
  {
    number: 24,
  }
];

// Get the numbers that are greater than 20
const numbers = objects.filter((object) => object.number > 20);

// Map the numbers to an array of numbers
const newArrayNumbers = numbers.map((number) => number.number);

// Get the total number of numbers in the array
const totalNumber = objects.reduce(
  (accumulator, object) => accumulator + object.number,
  0
);
console.log(newArrayNumbers);
console.log(totalNumber);

// Task 2 : write a function formatMoney(amount) to format currency money

function formatMoney(amount) {
  // creates an Intl.NumberFormat object
  const locale = 'en-US';
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  return new Intl.NumberFormat(locale, options).format(amount);
  // call format, return style and option
}
const amount = 1000000000;
const formattedAmount = formatMoney(amount);
console.log('I have', formattedAmount);

// Task 3 :Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

const numbersBooms = [1, 2, 3, 4, 5, 6, 7];
// const sevenBoom = numbersBooms.filter((number) => {
//   if (number === 7) {
//     console.log("Boom!")
//   }
//   return console.log("there is no 7 in the array")
// })
function sevenBoom(numbersBooms) {
  const containsSeven = numbersBooms.some((number) => number === 7);

  return containsSeven ? 'Boom!' : 'there is no 7 in the array';
}
const result = sevenBoom(numbersBooms);
console.log(result);

// Task 4 : Given an input string, reverse the string word by word, the first word will be the last, and so on.

const str = "money have don't i";
function reverseWords(str) {
  const words = str.split(' ');
  const reversedWords = words.reverse();
  return reversedWords.join(' ');
}
const reversedStr = reverseWords(str);
console.log(reversedStr);

// Task 5: The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

const array = [1, [2, [3, [4, [5, [10]]]]]];
// const array = [];
function getLength(array) {
  let count = 0;
  for (const item of array) {
    if (!Array.isArray(item)) {
      count++;
    } else {
      count += getLength(item);
    }
  }

  return count;
}
const length = getLength(array);
console.log(length);

// Task 6: Using axios call API https://api.github.com/users/ptit9x with method GET (2 way Promise + async await)

async function getGithubUser() {
  const response = await axios.get("https://api.github.com/users/ptit9x");

  if (response.status === 200) {
    const user = response.data;
    console.log(user);
  } else {
    console.log(response.status);
    console.log(response.data);
  }
}

getGithubUser();

// Task 7 : Using axios call multi API https://api.github.com/users/ptit9x, https://api.github.com/users/google... using axios + Promise.all()

async function getGithubUsers() {
  const promises = [
    axios.get("https://api.github.com/users/ptit9x"),
    axios.get("https://api.github.com/users/google"),
    axios.get("https://api.github.com/users/facebook"),
  ];

  const responses = await Promise.all(promises);

  const users = [];
  for (const response of responses) {
    if (response.status === 200) {
      const user = response.data;
      users.push(user);
    } else {
      console.log(response.status);
      console.log(response.data);
    }
  }
  console.log(users);
}

getGithubUsers();

// Task 8 :  A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

const number = 98140723568910;
// const number = 21343456657797;
function isPanDigital(number) {
  // Create a set to store all the digits of the number.
  const digits = new Set();

  // Convert the number to a string and iterate over its digits.
  const numberString = number.toString();
  for (let i = 0; i < numberString.length; i++) {
    digits.add(numberString[i]);
  }

  // Check if the set contains all 10 digits.
  return digits.size === 10;
}
const isPanDigit = isPanDigital(number);

console.log(isPanDigit); // true or false

// Task 9 : Create a function which returns how many Friday 13ths there are in a given year.

function howUnlucky(year) {
  // Check if the year is a leap year.
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // Initialize the number of Friday the 13ths to 0.
  let unluckyDays = 0;

  // Loop over the months.
  for (let month = 1; month <= 12; month++) {
    // Get the day of the week for January 13th.
    const dayOfWeek = new Date(year, month, 13).getDay();

    // If January 13th is a Friday, increment the number of Friday the 13ths.
    if (dayOfWeek === 5) {
      unluckyDays++;
    }
  }

  // Return the number of Friday the 13ths.
  return unluckyDays;
}

console.log(howUnlucky(2016));
console.log(howUnlucky(2020));
console.log(howUnlucky(2024));

