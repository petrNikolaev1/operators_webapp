import React, {Component} from 'react'

import '@/assets/chatStyles/ChatControl.scss'
import connect from "react-redux/es/connect/connect";
import {chatControlTyping} from "@/actions/chatActions";

/*
Component responsible for interactions with the Text Area
and Send Button which are logically independent for each chat.
 */


@connect(
    store => ({
        textTyped: store.chatControlReducer.textTyped,
    }), {chatControlTyping}
)
export default class ChatControl extends Component {

    render() {
        const {textTyped, chatControlTyping} = this.props;
        return (
            <div className="chat-control">
                <textarea
                    onInput={chatControlTyping}
                    value={textTyped}
                    placeholder="Write a message..." rows="4"/>
                <button>Send</button>
            </div>
        )
    }
}
