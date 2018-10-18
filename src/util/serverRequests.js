export const splitPath = (path) => {
    // console.log('REQ SENT')
    return new Promise((resolve, reject) => {
        return resolve(path);
        fetch('http://18.191.14.124:8080/v1/operators/simulation/split/path', {
            method: 'POST',
            body: JSON.stringify(path),
        })
            .then(res => resolve(res.json().result))
            .catch(e => reject(e))
    })
};
