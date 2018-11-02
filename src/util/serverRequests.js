import constants, {SERVER_URL} from "@/constants";
import cookies from 'js-cookie'

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

export const serverRequest = payload => {
    const {command, params, method, paramsType, fillCommandWith, getCommand} = payload;
    if (getCommand === undefined || getCommand === null) {
        var url = new URL(`${SERVER_URL}${command}`)
    } else if (getCommand instanceof Function) {
        var url = new URL(`${SERVER_URL}${getCommand(params[fillCommandWith])}`);
        delete params[fillCommandWith]
    } else {
        console.log('getCommand', getCommand, 'end')
        var url = new URL(`${SERVER_URL}${getCommand}`);
    }
    const reqObj = {
        method,
        body: JSON.stringify(params),
        headers: {
            "Authorization": cookies.get('token'),
            "Content-Type": "application/json",
        }
    };
    if (paramsType === constants.QUERY) {
        url.search = new URLSearchParams(params);
        delete reqObj.body
    }
    return new Promise((resolve, reject) => {
        fetch(url, reqObj)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
};
