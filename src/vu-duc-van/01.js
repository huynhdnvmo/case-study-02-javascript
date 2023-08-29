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

const filterArray = () => {
  return objects.filter((item) => item.number > 20).map((v) => v.number);
}

const getSumOfArray = () => {
  return objects.reduce((acc, cur) => acc + cur.number, 0);
}

export {
  filterArray,
  getSumOfArray,
}