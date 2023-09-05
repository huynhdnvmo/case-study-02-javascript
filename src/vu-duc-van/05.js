const getLength = (array) => {
  if (!array?.length) return 0;
  return array.flat(Infinity).length;
}

export { getLength }