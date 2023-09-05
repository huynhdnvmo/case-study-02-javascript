const reverseWords = (paragraph) => { 
  const arrayWords = paragraph.split(" ").filter((item) => item !== ''); 
  const reverseWords = arrayWords.reverse().join(" "); 
  return reverseWords;
}
console.log(reverseWords(" the sky is blue"))
console.log(reverseWords("hello   world!  "))
console.log(reverseWords("a good example"))