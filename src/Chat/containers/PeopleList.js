import React, {Component} from 'react'

import '@/assets/chatStyles/PeopleList.scss'
import UserItem from "../components/UserItem";
import connect from "react-redux/es/connect/connect";

/*
Container that is responsible for interactions with the
list of chat users and its correct representation.
 */

@connect(
    store => ({
        selectedChat: store.chatReducer.selectedChat,
        chats: store.chatReducer.chats,
    }),
)
export default class PeopleList extends Component {

    render() {
        const {chats} = this.props;

        return (
            <div className="people-list" id="people-list">
                <ul className="list">
                    {chats.map(chat =>
                        (<UserItem
                            id={chat.chat_id}
                            key={chat.chat_id}
                            username={chat.username}
                        />)
                    )}
                </ul>
            </div>
        )
    }
}
