import axios from 'axios';

const fetchDataFromMultipleUrl = (arr) => {
  let fn = [];
  if (!arr?.length) return [];
  arr.forEach((item) => {
    fn.push(new Promise((resolve, reject) => {
      axios.get(item)
        .then((v) => resolve(v.data))
        .catch((error) => reject(error));
    })); 
  })
  return Promise.all(fn)
}

export { fetchDataFromMultipleUrl }