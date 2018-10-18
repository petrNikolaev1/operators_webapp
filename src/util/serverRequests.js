export const splitPath = (path) => {
    console.log('REQ SENT')
    return new Promise((resolve, reject) => {
        fetch('http://18.218.136.219:8080/v1/operators/simulation/split/path', {
            method: 'POST',
            body: JSON.stringify(path),
        })
            .then(res => resolve(res.json()))
            .catch(e => reject(e))
    })
};