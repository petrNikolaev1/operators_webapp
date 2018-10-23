import constants, {SERVER_URL} from "@/constants";
import {getCookie} from "./document";

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

export const queryServerRequest = payload => {
    const {command, params, method, paramsType} = payload;
    const url = new URL(`${SERVER_URL}${command}`);
    const reqObj = {
        method,
        body: JSON.stringify(params),
        headers: {
            "Authorization": getCookie(),
            "Content-Type": "application/json",
        }
    };
    if (paramsType === constants.QUERY){
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
