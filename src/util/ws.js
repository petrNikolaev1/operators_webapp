import io from 'socket.io-client';

import {
    connectedNewUser, disconnectedUser, receiveNewMessage, rejectAuth,
    receiveEdited, disableEdit, publicTyping, privateTyping
} from '@/actions'
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
        // console.log('ws message: ', messageObj)
        switch (messageObj.type) {
            case 'connected_new_user':
                dispatch(connectedNewUser(messageObj))
                break;
            case 'disconnected_user':
                dispatch(disconnectedUser(messageObj.userID));
                break;
            case 'message':
                dispatch(receiveNewMessage(messageObj.data));
                break;
            case 'auth':
                dispatch(rejectAuth(messageObj.flag));
                break;
            case 'editing':
                dispatch(receiveEdited(messageObj.data));
                break;
            case 'disable_edit':
                dispatch(disableEdit(messageObj.time));
                break;
            case 'public_typing':
                dispatch(publicTyping(messageObj));
                break;
            case 'private_typing':
                dispatch(privateTyping(messageObj));
                break;
        }
    });

    const emit = (message) => {
        ws.emit('message', (message))
    };

    return {emit}

})('http://localhost:8080')