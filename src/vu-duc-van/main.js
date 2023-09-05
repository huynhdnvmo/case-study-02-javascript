import * as readline from 'readline';

import { filterArray, getSumOfArray } from './01.js';
import { formatMoney } from './02.js';
import { sevenBoom } from './03.js';
import { reverseWords } from './04.js';
import { getLength } from './05.js';
import { fetchDataByPromise, fetchDataByAsync } from './06.js';
import { fetchDataFromMultipleUrl } from './07.js';
import { isPandigital } from './08.js';
import { howUnlucky } from './09.js';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exercises = {
  ['01']: {
    input: false,
    exec: () => {
      console.log('Array with item have number > 20: ', filterArray());
      console.log('Total of number value: ', getSumOfArray());
    }
  },
  ['02']: {
    input: true,
    question: 'Enter amount: ',
    exec: (input) => {
      console.log('Format', input, '=>', formatMoney(input));
    }
  },
  ['03']: {
    input: true,
    question: 'Enter array: ',
    exec: (input) => {
      const array = JSON.parse(input)
      console.log(sevenBoom(array));
    }
  },
  ['04']: {
    input: true,
    question: 'Enter string: ',
    exec: (input) => {
      console.log('Format', input, '=>', reverseWords(input));
    }
  },
  ['05']: {
    input: true,
    question: 'Enter array: ',
    exec: (input) => {
      const array = JSON.parse(input)
      console.log('Total number of non-nested items: ', getLength(array));
    }
  },
  ['06']: {
    input: true,
    question: 'Enter url: ',
    exec: async (input) => {
      fetchDataByPromise(input).then(((data) => {
        console.log('Fetch by Promise: ', data);
      }))
      .catch((error) => console.log('Error: ', error));
      console.log('Fetch by Async/Await: ', await fetchDataByAsync(input));
    }
  },
  ['07']: {
    input: true,
    question: 'Enter array of url: ',
    exec: async (input) => {
      const array = JSON.parse(input)
      fetchDataFromMultipleUrl(array).then(((data) => {
        console.log('Fetch by Promise.all: ', data);
      }))
      .catch((error) => console.log('Error: ', error));
    }
    //["https://api.github.com/users/ptit9x", "https://api.github.com/users/ptit9x"]
  },
  ['08']: {
    input: true,
    question: 'Enter number: ',
    exec: (input) => {
      const { result, missNumber } = isPandigital(input);
      if (result) {
        console.log('Number is a Pandigital number: ', true);
      } else {
        console.log('Number is a Pandigital number: ', false);
        console.log('Number is missing: ', +missNumber);
      }
    }
  },
  ['09']: {
    input: true,
    question: 'Enter year: ',
    exec: (input) => {
      console.log('Number of Friday 13th of this year: ', howUnlucky(input));
    }
  },
}

const main = () => {
  rl.question('Enter file name: ', (inputValue) => {
    const exercise = exercises[inputValue];
    if (!exercise) {
      console.log('Invalid file name, try again');
      main();
    } else {
      if (exercise.input) {
        rl.question(exercise.question, (subInput) => {
          console.log('Result of exercises', inputValue, ':');
          console.log(exercise.exec(subInput));
          rl.close();
        });
        return;
      }
      console.log('Result of exercises', inputValue, ':');
      console.log(exercise.exec());
      rl.close();
      return;
    }
  });
  return;
}

main();