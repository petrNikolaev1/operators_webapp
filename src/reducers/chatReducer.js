import constants from '@/constants'
import {validateMessage, mapMessage} from "@/util/chat";
import _ from 'lodash'

const initialState = {
    chats: [
        {
            chat_id: 1,
            username: 'Timur Valiev',
            online: true,
            messages: [],
            textTyped: ""
        },
        {
            chat_id: 2,
            username: 'Azat Belgibaev',
            online: false,
            messages: [],
            textTyped: ""
        },
        {
            chat_id: 3,
            username: 'Ilgizar Murzakov',
            online: false,
            messages: [],
            textTyped: ""
        },
        {
            chat_id: 4,
            username: 'Ansat Abirov',
            online: false,
            messages: [],
            textTyped: ""
        },
    ],
    selectedChat: null,
    getMessages: {},
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
            const chatsWithNewMessage = state.chats
                .map(chat => (chat.chat_id === chat_id) ?
                    {...chat, messages: chat.messages.concat(action.payload), scrollDown: true} : chat
                );
            return {
                ...state,
                chats: chatsWithNewMessage,
                selectedChat: state.selectedChat ? chatsWithNewMessage.find(chat => state.selectedChat.chat_id === chat.chat_id) : null
            };

        case constants.GET_MESSAGES_REQUEST:
            return {
                ...state,
                getMessages: {
                    ...state.getMessages,
                    [action.extra.chat_id]: {
                        loaded: false
                    }
                }
            };

        case constants.GET_MESSAGES_ERROR:
            return {
                ...state,
                getMessages: {
                    ...state.getMessages,
                    [action.extra.chat_id]: {
                        loaded: true
                    }
                }
            };

        case constants.GET_MESSAGES_SUCCESS:

            let newMessages = action.result
                .slice(action.extra.uselessLimit)
                .map(message => mapMessage(message))
                .filter(message => validateMessage(message))
                .reverse();

            const chatsWithNewMessages = state.chats
                .map(chat => {
                    const messages = _.uniqBy(newMessages.concat(chat.messages), 'id');
                    return (chat.chat_id === action.extra.chat_id) ? {
                        ...chat,
                        messages,
                        messagesObtained: messages.length - chat.messages.length,
                        scrollDown: false
                    } : chat
                });

            return {
                ...state,
                chats: chatsWithNewMessages,
                selectedChat: state.selectedChat ? chatsWithNewMessages.find(chat => state.selectedChat.chat_id === chat.chat_id) : null,
                getMessages: {
                    ...state.getMessages,
                    [action.extra.chat_id]: {
                        loaded: true
                    }
                }

            };

        case constants.RESET_CHAT_HISTORY:
            const chatsResetedHistory = state.chats.map(chat => ({...chat, messages: []}));
            return {
                ...state,
                chats: chatsResetedHistory,
                selectedChat: state.selectedChat ? chatsResetedHistory.find(chat => state.selectedChat.chat_id === chat.chat_id) : null,
            };

        case constants.RESET_CHAT_SCROLL:
            const chatsResetedScroll = state.chats.map(chat => chat.chat_id === action.chat_id ? {
                ...chat,
                scrollDown: false
            } : chat);
            return {
                ...state,
                chats: state.chats,
                selectedChat: state.selectedChat ? chatsResetedScroll.find(chat => state.selectedChat.chat_id === chat.chat_id) : null,
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
