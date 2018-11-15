import io from 'socket.io-client';
import cookies from 'js-cookie'

import {newChatMessage} from "@/actions/chatActions";

let ws = null;

export const initWs = (wsUrl = 'https://innodelivery.online:14881') => {
    ws = io(wsUrl);

    ws.on('connect', () => {
        console.log('WS Opened!');
        ws.emit('auth', {token: cookies.get('token')}, data => console.log(data));
    });

    ws.on('disconnect', () => {
        console.log('WS Closed!')
    });

    ws.on("get_message", (message) => {
        console.log('RESPONSE', message);
        newChatMessage(message)()
    });
};

export const emit = (event, data) => {
    console.log('EMITTED', event, data);
    !ws && initWs();
    ws.emit(event, data, res => console.log(res))
};

export const cancelWs = () => {
    !!ws && ws.close()
};
