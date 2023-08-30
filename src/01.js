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

const newArray = objects.filter((item) => item.number > 20).map((item) => item.number);

const total = objects.reduce((accumulator, currentValue) => accumulator + currentValue.number, 0);

console.log('newArray', newArray)
console.log('total', total)