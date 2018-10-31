import io from 'socket.io-client';

import {store} from '@/store'

export default ((wsUrl) => {
    let ws;
    const {dispatch} = store;

    ws = io(wsUrl);

    ws.on('connect', () => {
        console.log('WS Open!')
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

})('10.240.17.254:14881')