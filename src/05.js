const getLength = (array) => { 
  return array.flat(Infinity).length;
}

console.log('getLength', getLength([1, [2, 3]]))
console.log('getLength', getLength([1, [2, [3, 4]]]))
console.log('getLength', getLength([1, [2, [3, [4, [5, 6]]]]]))
console.log('getLength', getLength([1, [2], 1, [2], 1]))