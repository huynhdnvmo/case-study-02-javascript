const axios = require('axios');

const getApiAwait = async () => {
  const response = await axios.get('https://api.github.com/users/ptit9x');
  console.log('response', response.data);
}

const getApiPromise = () => {
  axios.get('https://api.github.com/users/ptit9x')
    .then(v => {
      console.log('response', v.data);
    })
}

getApiAwait()
getApiPromise()