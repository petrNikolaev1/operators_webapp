import io from 'socket.io-client';
import cookies from 'js-cookie'

import {store} from '@/store'

export default ((wsUrl) => {
    let ws;
    const {dispatch} = store;

    ws = io(wsUrl);

    ws.on('connect', () => {
        console.log('WS Opened!');
        ws.emit('auth', {token: cookies.get('token')}, data => console.log(data));
    });

    ws.on('disconnect', () => {
        console.log('WS Closed!')
    });

    ws.on("get_message", (message) => {
        console.log('RESPONSE', message)
    });

    const emit = (event, data) => {
        ws.emit(event, data, res => console.log(res))
    };

    return {emit}

})('http://10.240.17.254:14881')