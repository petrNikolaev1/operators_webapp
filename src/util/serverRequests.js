import {SERVER_URL} from "@/constants";
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
    const {command, params, method} = payload;
    const url = new URL(`${SERVER_URL}${command}`);
    url.search = new URLSearchParams(params);
    return new Promise((resolve, reject) => {
        fetch(`${SERVER_URL}${command}`, {
            method,
            body: JSON.stringify(params),
            headers: {
                "Authorization": getCookie(),
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
};
