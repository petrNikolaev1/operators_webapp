import constants from '@/constants'

const initialState = {
    chats: [
        {
            chat_id: 1,
            username: 'Тимур',
            online: true,
            messages: [],
            textTyped: ""
        },
        {
            chat_id: 2,
            username: 'Азат',
            online: false,
            messages: [],
            textTyped: ""
        },
        {
            chat_id: 3,
            username: 'Ильгизар',
            online: false,
            messages: [],
            textTyped: ""
        },
        // {
        //     chat_id: 4,
        //     username: 'Ансат',
        //     online: false,
        //     messages: [],
        //     textTyped: ""
        // },
    ],
    selectedChat: null,
};

export function chatReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SELECT_CHAT:
            return {
                ...state,
                selectedChat: state.chats.find(chat => action.chat_id === chat.chat_id)
            };
        case constants.UPDATE_CHAT_TEXT:
            return {
                ...state,
                chats: state.chats.map(chat => chat.chat_id === action.chat_id ? {
                    ...chat,
                    textTyped: action.textTyped
                } : chat)
            };
        case constants.NEW_CHAT_MESSAGE:
            const {chat_id} = action.payload;
            const newChats = state.chats
                .map(chat => (chat.chat_id === chat_id) ?
                    {...chat, messages: chat.messages.concat(action.payload), scrollDown: true} : chat
                );
            return {
                ...state,
                chats: newChats,
                selectedChat: newChats.find(chat => state.selectedChat.chat_id === chat.chat_id)
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