// Ex3: Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
function sevenBoom(array) {
    if (array.includes(7)) { 
        return "Boom!"
    }
    return "there is no 7 in the array"
}