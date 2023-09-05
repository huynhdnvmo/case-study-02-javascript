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
const newArray = objects.filter(num => num > 20).map(num => Math.sqrt(num));
const total = objects.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
console.log(newArray)