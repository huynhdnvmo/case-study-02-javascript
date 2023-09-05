import Axios from 'axios';
const axios = require('axios');

async function fetchData() {
    try{
        const response = await Axios.get('https://api.github.com/users/ptit9x');
        console.log(response.data);
    } catch (error) {
        console.log (error);
    }
}
fetchData();