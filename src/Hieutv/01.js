
const newObjects = objects.filter((item) => item.number > 20).map((item) => item.number) 
console.log('newObjects',newObjects)

const sumReduce = (numberList) => {
     return numberList.reduce((sum, number) => {
        const newSum = sum + number;
        return newSum;
    }, 0)
}