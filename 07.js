import Axios from 'axios';
const axios = require('axios');

async function fetchData() {
    try {
        const urls = [
            'https://api.github.com/users/ptit9x',
            'https://api.github.com/users/google'
        ];
        const requests = urls.map(url => Axios.get(url));
        const response = await Promise.all(requests);
        response.forEarch(response => {
            console.log(response.data);
        });
    }catch (error) {
        console.log(error);
    }
}
fetchData();