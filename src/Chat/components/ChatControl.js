import React, {Component} from 'react'

import '@/assets/chatStyles/ChatControl.scss'
import connect from "react-redux/es/connect/connect";
import {chatControlTyping, chatControlUpdating} from "@/actions/chatActions";
import {emit} from '@/util/ws'

/*
Component responsible for interactions with the Text Area
and Send Button which are logically independent for each chat.
 */


@connect(
    store => ({
        textTyped: store.chatControlReducer.textTyped,
        selectedChat: store.chatReducer.selectedChat,
        profile: store.loginReducer.profile,
    }), {chatControlTyping, chatControlUpdating}
)
export default class ChatControl extends Component {

    sendMessage = () => {
        const {textTyped, selectedChat, chatControlUpdating, profile} = this.props;
        const textTypedTrimmed = textTyped.trim();

        !!textTypedTrimmed && emit('post_message', {
            driver_id: selectedChat.chat_id,
            operator_id: profile.id,
            text: textTyped,
            is_driver_initiator: false
        });

        chatControlUpdating('')
    };

    handleClick = (e) => {
        e.preventDefault();
        this.sendMessage()
    };

    handlePress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.sendMessage()
        }
    };

    render() {
        const {textTyped, chatControlTyping} = this.props;
        return (
            <form ref={form => this.form = form} className="chat-control" onSubmit={this.handleClick}>
                <textarea
                    onChange={chatControlTyping}
                    onKeyDown={this.handlePress}
                    value={textTyped}
                    placeholder="Write a message..." rows="4"/>
                <button type="submit">Send</button>
            </form>
        )
    }
}
