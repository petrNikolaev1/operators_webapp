import constants from '@/constants'

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

    !!selectedChat &&
    dispatch({
        type: constants.UPDATE_CHAT_TEXT,
        chat_id: selectedChat.chat_id,
        textTyped
    });

    console.log(chats.find(chat => chat.chat_id === chat_id));

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

export const newChatMessage = (message) => ({
    type: constants.NEW_CHAT_MESSAGE,
    payload: {
        id: message.id,
        time: message.posted_date,
        chat_id: message.driver.id,
        from_id: !message.is_driver_initiator && !!message.operator ? message.operator.id : message.driver.id,
        from_name: !message.is_driver_initiator && !!message.operator ? message.operator.name : message.driver.name,
        is_driver_initiator: message.is_driver_initiator,
        text: message.text
    }
});