//Ex4: Given an input string, reverse the string word by word, the first word will be the last, and so on.

function reverseString(string) {
    return string.split(' ').reverse().join(' ').trim();
}
     
console.log(reverseString("Hello world"));