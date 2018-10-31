import React, {Component} from 'react'
import classNames from 'classnames'

import '@/assets/chatStyles/UserItem.scss'
import connect from "react-redux/es/connect/connect";
import {selectChat} from "@/actions/chatActions";

/*
Component representing a user.
 */

@connect(
    store => ({
        selectedChat: store.chatReducer.selectedChat,
        chats: store.chatReducer.chats,
    }), {selectChat}
)

export default class UserItem extends Component {

    render() {
        const {id, username, selectChat, selectedChat, chats} = this.props;
        const online = chats.find(chat => chat.chat_id === id).online;

        return (
            <li onClick={() => selectChat(id)}
                className={classNames({'user-selected': !!selectedChat && selectedChat.chat_id === id})}
            >
                <div className='user-avatar' style={{backgroundImage: `url(${this.getAvatar(id)})`}}/>
                <div className="user-about">
                    <div className="user-about-name"> {username} </div>
                    <div className="user-about-status">
                        <span
                            className={classNames({'user-about-status-online': online}, {'user-about-status-offline': !online})}
                        /> {online ? 'online' : 'offline'}
                    </div>
                </div>
            </li>
        )
    }

    getAvatar = (id) => {
        return require(`../../assets/img/avatar${id % 7}.jpg`);
    }
}
