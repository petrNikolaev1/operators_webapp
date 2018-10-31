import React, {Component} from 'react'

import '@/assets/chatStyles/ChatHeader.scss'
import connect from "react-redux/es/connect/connect";


@connect(
    store => ({
        selectedChat: store.chatReducer.selectedChat,
        chats: store.chatReducer.chats,
    }), {}
)

export default class UserItem extends Component {

    render() {
        const {selectedChat, chats} = this.props;
        const online = chats.find(chat => chat.username === selectedChat.username).online;

        return (
            <div className="chat-header">
                <div className='chat-header-info'>
                    <div id="test" className="chat-header-name">
                        {selectedChat.username}
                    </div>
                    <div className='chat-header-typing'>
                        {online ? 'online' : 'offline'}
                    </div>
                </div>
            </div>
        )
    }
}



