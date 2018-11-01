import io from 'socket.io-client';
import cookies from 'js-cookie'

import {store} from '@/store'
import {newChatMessage} from "@/actions/chatActions";
import constants from "../constants";

export default ((wsUrl) => {
    let ws;

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
        store.dispatch(newChatMessage(message))
    });

    const emit = (event, data) => {
        ws.emit(event, data, res => console.log(res))
    };

    return {emit}

})('http://18.191.14.124:14881')