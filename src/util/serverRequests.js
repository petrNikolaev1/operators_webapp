import constants, {SERVER_URL} from "@/constants";
import cookies from 'js-cookie'



export const splitPath = (path) => {
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

function dropzoneFileToArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error)
    })
}

export const serverRequest = async payload => {
    const {command, params, method, paramsType, fillCommandWith, getCommand, customServerUrl, formData} = payload;
    if (!!customServerUrl) {
        var url = new URL(`${customServerUrl}${command}`)
    }
    else if (getCommand === undefined || getCommand === null) {
        var url = new URL(`${SERVER_URL}${command}`)
    } else if (getCommand instanceof Function) {
        var url = new URL(`${SERVER_URL}${getCommand(params[fillCommandWith])}`);
        delete params[fillCommandWith]
    } else {
        var url = new URL(`${SERVER_URL}${getCommand}`);
    }

    if (!!formData) {
        console.log('form data', params[formData.label])
        const file = await dropzoneFileToArrayBuffer(params[formData.label]);
        console.log('file', file)
        var formDataBody = new FormData();

        console.log(formDataBody.entries())

        formDataBody.append(formData.formalLabel, file)
        console.log(formDataBody.entries())
    }

    const reqObj = {
        method,
        body: !formData ? JSON.stringify(params) : formDataBody,
        headers: {
            "Authorization": cookies.get('token'),
            "Content-Type": !formData ? "application/json" : "multipart/form-data; boundary=----WebKitFormBoundaryYWOTSJcucb1yj723",
        }
    };

    console.log('REQ OBJ', reqObj)

    if (paramsType === constants.QUERY) {
        url.search = new URLSearchParams(params);
        if (!formData) {
            console.log('DELETED')
            delete reqObj.body
        }
    }

    console.log('REQ OBJ', reqObj)

    return new Promise((resolve, reject) => {
        fetch(url, reqObj)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
};
