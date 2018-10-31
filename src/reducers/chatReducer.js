import constants from '@/constants'

const initialState = {
    chats: [
        {
            chat_id: 1,
            username: 'Аза',
            online: true,
            messages: [
                {
                    username: 'Николай',
                    time: 1540581363963,
                    author: 'Аза',
                    text: 'Красавчик! Умница!',
                    color: '#01BABF',
                    edited: true
                },
                {
                    username: 'Николай',
                    time: 1540581363963,
                    author: 'Николай',
                    text: 'Да как тут откажешь! Работа, конечно, тяжелая, зато платят мало..',
                    color: '#68cf4c',
                    edited: false,
                }
            ],
            textTyped: ""
        },
        {
            chat_id: 2,
            username: 'Ильгизар',
            online: true,
            messages: [
                {
                    username: 'Николай',
                    time: 1540581363963,
                    author: 'И',
                    text: 'Ку ку епта!',
                    color: '#01BABF',
                    edited: false,
                },
                {
                    username: 'Николай',
                    time: 1540581363963,
                    author: 'Николай',
                    text: 'И вам добрейший вечерочек',
                    color: '#68cf4c',
                    edited: false,
                }
            ],
            textTyped: ""
        },
        {
            chat_id: 3,
            username: 'Минтимер',
            online: false,
            messages: [],
            textTyped: ""
        },
        {
            chat_id: 4,
            username: 'Тимур',
            online: false,
            messages: [],
            textTyped: ""
        }
    ],
    selectedChat: null,
};

export function chatReducer(state = initialState, action) {
    switch (action.type) {

        case constants.UPDATE_CHAT:
            return {
                ...state,
                chats: !!state.chats.find(chat => chat.chat_id === action.newChat.chat_id) ?
                    state.chats.map(chat => chat.chat_id === action.newChat.chat_id ? action.newChat : chat) :
                    state.chats.concat(action.newChat),
            };
        case constants.SELECT_CHAT:
            console.log('SELECT CHAT', state.chats)
            return {
                ...state,
                selectedChat: state.chats.find(chat => action.chat_id === chat.chat_id)
            };
        case constants.UPDATE_CHATS:
            console.log('UPDATE CHATS', state.chats.map(chat => chat.chat_id === action.chat_id ? {
                ...chat,
                textTyped: action.textTyped
            } : chat));
            return {
                ...state,
                chats: state.chats.map(chat => chat.chat_id === action.chat_id ? {
                    ...chat,
                    textTyped: action.textTyped
                } : chat)
            };
        default:
            return state;
    }
}

const initChatControlState = {
    textTyped: ''
};

export function chatControlReducer(state = initChatControlState, action) {
    switch (action.type) {
        case constants.CHAT_CONTROL_TYPING:
            return {
                ...state,
                textTyped: action.textTyped
            };
        case constants.CHAT_CONTROL_UPDATE:
            return {
                ...state,
                textTyped: action.textTyped
            };
        default:
            return state;
    }
}