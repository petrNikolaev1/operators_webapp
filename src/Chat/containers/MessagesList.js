import React, {Component, Fragment} from 'react'


import '@/assets/chatStyles/MessagesList.scss'
import ChatHeader from "../components/ChatHeader";
import MessageItem from "../components/MessageItem";
import MessageNoChatItem from "../components/MessageNoChatItem";
import ChatControl from "../components/ChatControl";
import connect from "react-redux/es/connect/connect";

/*
Container that is responsible for representing chat appropriately:
in accordance with the chosen user and previously sent messages, typed data, etc...
 */

@connect(
    store => ({
        selectedChat: store.chatReducer.selectedChat,
        chats: store.chatReducer.chats,
    }),
)

export default class MessagesList extends Component {

    render() {
        const {selectedChat, chats} = this.props;

        return (
            <Fragment>
                {!selectedChat ?
                    <MessageNoChatItem/> :

                    <Fragment>
                        <ChatHeader/>
                        <div className="chat-history">
                            <ul>
                                {selectedChat.messages.map(message =>
                                    <MessageItem
                                        {...message}
                                    />
                                )}
                            </ul>
                        </div>

                        <ChatControl/>
                    </Fragment>
                }
            </Fragment>
        )
    }
}
