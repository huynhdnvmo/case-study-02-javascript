import axios from 'axios';

const fetchDataByPromise = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((v) => resolve(v.data))
      .catch((error) => reject(error));
  });
}

const fetchDataByAsync = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log('Error', error);
  }
}

export { fetchDataByPromise, fetchDataByAsync }