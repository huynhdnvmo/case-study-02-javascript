
function callApiPromise() { 
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/ptit9x')
        .then(res => 
           resolve(res))
        .catch(err => reject(err))
    }) 
}

//call api with async/awaitconst 
getData = async () => {
    try {
        const res = await axios.get('https://api.github.com/users/ptit9x') 
        console.log(res);
    } catch( error) {
        console.log(error);
    }
}
