import constants from '@/constants'
import {mapMessage, validateMessage} from "@/util/chat";
import {store} from '@/store'

export const showSelecxtedChat = (chat_id, messages, text) => dispatch => {
    const newChat = {chat_id, messages, text};
    dispatch({
        type: constants.CHAT,
        newChat
    });
};

export const selectChat = (chat_id) => (dispatch, getState) => {

    const {chatControlReducer, chatReducer} = getState();
    const {textTyped} = chatControlReducer;
    const {selectedChat, chats} = chatReducer;

    if (!!selectedChat && selectedChat.chat_id === chat_id) return;

    !!selectedChat &&
    dispatch({
        type: constants.UPDATE_CHAT_TEXT,
        chat_id: selectedChat.chat_id,
        textTyped
    });

    dispatch({
        type: constants.CHAT_CONTROL_UPDATE,
        textTyped: chats.find(chat => chat.chat_id === chat_id).textTyped
    });

    dispatch({
        type: constants.SELECT_CHAT,
        chat_id,
    });
};

export const chatControlTyping = event => dispatch => {
    dispatch({
        type: constants.CHAT_CONTROL_TYPING,
        textTyped: event.target.value
    });
};

export const chatControlUpdating = textTyped => dispatch => {
    dispatch({
        type: constants.CHAT_CONTROL_UPDATE,
        textTyped,
    });
};

export const newChatMessage = (message) => (dispatch = store.dispatch) => {
    // if (!validateMessage(message)) return;
    dispatch({
        type: constants.NEW_CHAT_MESSAGE,
        payload: mapMessage(message)
    })
};

export const resetChatHistory = () => dispatch => {
    dispatch({
        type: constants.RESET_CHAT_HISTORY
    })
};

export const resetChatScroll = chat_id => dispatch => {
    dispatch({
        type: constants.RESET_CHAT_SCROLL,
        chat_id
    })
};
