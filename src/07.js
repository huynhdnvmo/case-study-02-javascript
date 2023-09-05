const axios = require('axios');

const getApiPromiseAll = async () => {
  const [reponsePtit9x, reponseGoogle ] = await Promise.all([
    await axios.get('https://api.github.com/users/ptit9x'),
    await axios.get(' https://api.github.com/users/google'),
    ]
  )

  console.log('reponsePtit9x', reponsePtit9x.data)
  console.log('reponseGoogle', reponseGoogle.data)
}

getApiPromiseAll()