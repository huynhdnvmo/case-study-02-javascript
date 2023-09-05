import axios from 'axios';
/**
 * 1.
 * const objects = [
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
Using .filter and .map to get new array have number > 20 and format numbers to array number Expect: [4, 9, 16, 16]
Using .reduce get total number in objects array
 */
function findAndFormat(arr) {
  return arr.filter(obj => +obj.number > 20).map(numberObj => numberObj.number);
}

function sumObjsArray(arr) {
  arr.reduce((prev, currentItem) => {
    return prev + currentItem.number;
  }, 0)
}

/**
 * 2. write a function formatMoney(amount) to format currency money
 */
function formatMoney(amount) {
  if (+amount < 0) {
    return 0;
  }
  return (+amount).toLocaleString();
}

/**
 * 3. Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
 */
function sevenBoom(numbersArr) {
  if (numbersArr.join('').includes('7')) {
    return 'Boom!'
  }
  return 'there is no 7 in the array'
}

/**
 * 4. Given an input string, reverse the string word by word, the first word will be the last, and so on.
 */
function reverseWords(words) {
  return words.split(' ').filter(word => !!word).reverse().join(' ')
}

/**
 * 5. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
 * example [1, [2, [3, [4, [5, 6]]]]]) ➞ 6
 */
function getLength(array) {
  let result = 0;
  function recursive(arr) {
    arr.map(item => {
      if (Array.isArray(item)) {
        recursive(item);
      } else {
        result += 1;
      }
    })
  }
  recursive(array);

  return result;
}

/**
 * 6. Using axios call API https://api.github.com/users/ptit9x with method GET (2 way Promise + async await)
 */
function callWithPromise() {
  return new Promise((resolve, reject) => {
    axios.get('https://api.github.com/users/ptit9x')
    .then(res => {
        resolve(res);
    })
    .catch(error => {
      reject(error)
    });
  })
}

function callWithAsyncAwait() {
  try {
    const res = await axios.get('https://api.github.com/users/ptit9x');
    return res
  } catch (error) {
    throw error;
  }
}

/**
 * 7. Using axios call multi API https://api.github.com/users/ptit9x, https://api.github.com/users/google... using axios + Promise.all()
 */
function callMultipleApi() {
  const resArr = await Promise.all([
    axios.get('https://api.github.com/users/ptit9x'),
    axios.get('https://api.github.com/users/google')
  ]);
  return resArr;
}

/**
 * 8. A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
 * 
 * Note: missing case 112233445566778899 cause 112233445566778899 > 2^53 => auto format to 112233445566778900 
 */
function isPandigital(number) {
  const arrayPandigital = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return !arrayPandigital.some(el => {
    return !`${number}`.includes(`${el}`)
  })
}

/**
 * 9. Create a function which returns how many Friday 13ths there are in a given year.
 */
function howUnlucky(year) {
  let result = 0;
  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      result += 1;
    }
  }
  return result;
}