import io from 'socket.io-client';
import cookies from 'js-cookie'

import {store} from '@/store'

export default ((wsUrl) => {
    let ws;
    const {dispatch} = store;

    ws = io(wsUrl);

    ws.on('connect', () => {
        console.log('WS Opened!');
        ws.emit('auth', {token: cookies.get('token')}, data => console.log('ACK1', data));
        ws.emit('chat', {
                driver_id: 1,
                operator_id: 1,
                text: 'awesome text',
                is_driver_initiator: false
            },
            data => console.log('ACK2', data))
    });

    ws.on('disconnect', () => {
        console.log('WS Closed!')
    });


    ws.on("message", (message) => {
        console.log('RESPONSE', message)
        const messageObj = JSON.parse(message)
        console.log('ws message: ', messageObj)
    });

    const emit = (message) => {
        ws.emit('message', (message))
    };

    return {emit}

})('http://10.240.17.254:14881')