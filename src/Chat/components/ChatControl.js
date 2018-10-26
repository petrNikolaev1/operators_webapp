import React, {Component} from 'react'

import '@/assets/chatStyles/ChatControl.scss'

/*
Component responsible for interactions with the Text Area
and Send Button which are logically independent for each chat.
 */

export default class ChatControl extends Component {

    render() {
        return (
            <div className="chat-control">
                <textarea  placeholder="Type your message" rows="4"/>
                <button>Send</button>
            </div>
        )
    }
}
