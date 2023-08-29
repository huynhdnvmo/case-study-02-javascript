Git workflow atlassian: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
```bash
$ git checkout develop
$ git checkout -b feature-{your_name}
$ git add .
$ git commit -m "your message"
$ git push origin feature-{your_name}

create merge request in gitlab
```

# Exercises
1. 
```bash
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
```
- Using .filter and .map to get new array have number > 20 and format numbers to array number
Expect: [4, 9, 16, 16]
- Using .reduce get total number in objects array
2. write a function formatMoney(amount) to format currency money
```bash
Examples:
-1 => "0"
0 => "0"
10 => "10"
1000 => "1,000" 
10000 => "10,000"
1000000 => "1,000,000"
```
3. Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
```bash
Examples:
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
```
4. Given an input string, reverse the string word by word, the first word will be the last, and so on.
```bash
Examples:
reverseWords(" the sky is blue") ➞ "blue is sky the"
reverseWords("hello   world!  ") ➞ "world! hello"
reverseWords("a good example") ➞ "example good a"
```
Notes
- A word is defined as a sequence of non-space characters.
- The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
- You need to reduce multiple spaces between two words to a single space in the reversed string.
- Try to solve this in linear time.
5. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
```bash
[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
```
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.
```bash
getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5
```
Notes
An empty array should return 0.

6. Using axios call API https://api.github.com/users/ptit9x with method GET (2 way Promise + async await)
7. Using axios call multi API https://api.github.com/users/ptit9x, https://api.github.com/users/google... using axios + Promise.all()
8. A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
```bash
Examples:
isPandigital(98140723568910) ➞ true
isPandigital(90864523148909) ➞ false
// 7 is missing.
isPandigital(112233445566778899) ➞ false
```
Notes
Think about the properties of a pandigital number when all duplicates are removed.

9. Create a function which returns how many Friday 13ths there are in a given year.

Examples
```bash
howUnlucky(2020) ➞ 2
howUnlucky(2026) ➞ 3
howUnlucky(2016) ➞ 1
```
Notes
Check Resources for some helpful tutorials on the JavaScript Date object.

## Instruction
```bash
# install dependencies
$ npm install
$ node src/{filename}.js
```
