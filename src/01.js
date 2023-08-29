const axios = require('axios');

axios.get('https://api.github.com/users/ptit9x')
.then(v => {
    console.log(v.data);
})
.catch(error => console.log(error));