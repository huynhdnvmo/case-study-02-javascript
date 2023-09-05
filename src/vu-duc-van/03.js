const sevenBoom = (arr) => {
  const foundIndex = arr.findIndex((item) => item.toString().includes('7'));
  if (foundIndex >= 0) return 'Boom!';
  return 'there is no 7 in the array';
}

export { sevenBoom }