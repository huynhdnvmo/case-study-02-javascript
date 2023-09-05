const reverseWords = (str) => {
  return str.split(' ').reverse().filter((item) => item !== '').join(' ');
}
export { reverseWords }