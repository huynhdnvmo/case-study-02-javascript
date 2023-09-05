
const firstPromise = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/ptit9x') 
        .then(
            res => resolve(res))
        .catch(error =>{
            reject(error)
        })
    })
}

const secondPromise = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/google')
        .then(
            res => resolve(res))
        .catch(error =>{
            reject(error)
        })
    })
}

const promiseExecution = async () => {
    try {
        const promise = await Promise.all([firstPromise(), secondPromise()])
    console.log(promise);
    } catch(err) {
        console.log(err);
    }
}

promiseExecution();