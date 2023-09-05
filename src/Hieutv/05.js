//Ex5: The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
function getLengthArrays() {
    const getLength = arr => arr.flat(Infinity).length;
    
    console.log(getLength([1, [2, 3]]))  
    console.log(getLength([1, [2, [3, 4]]]))  
    console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))
}

getLengthArrays();