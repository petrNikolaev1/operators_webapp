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

    componentDidUpdate(nextProps, nextState) {
        const {selectedChat: selectedChatNew} = nextProps;
        if (!!selectedChatNew && selectedChatNew.scrollDown) {
            this.scrollToBottom();
        }
    }

    scrollToBottom() {
        const scrollHeight = this.messagesList.scrollHeight;
        const height = this.messagesList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messagesList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    render() {
        const {selectedChat, chats} = this.props;
        // console.log('RENDER', selectedChat)

        return (
            <Fragment>
                {!selectedChat ?
                    <MessageNoChatItem/> :

                    <Fragment>
                        <ChatHeader/>
                        <div className="chat-history" ref={(messagesList) => this.messagesList = messagesList}>
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
