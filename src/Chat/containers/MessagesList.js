import React, {Component, Fragment} from 'react'
import connect from "react-redux/es/connect/connect";
import moment from "moment"

import '@/assets/chatStyles/MessagesList.scss'
import ChatHeader from "../components/ChatHeader";
import MessageItem from "../components/MessageItem";
import MessageNoChatItem from "../components/MessageNoChatItem";
import ChatControl from "../components/ChatControl";
import constants from "@/constants";
import {apiReq} from "@/actions/serverActions";
import {resetChatHistory, resetChatScroll} from "@/actions/chatActions";
import {getLimitAndPage} from "@/util/chat";

/*
Container that is responsible for representing chat appropriately:
in accordance with the chosen user and previously sent messages, typed data, etc...
 */

@connect(
    store => ({
        selectedChat: store.chatReducer.selectedChat,
        chats: store.chatReducer.chats,
        getMessages: store.chatReducer.getMessages
    }), {apiReq, resetChatHistory, resetChatScroll}
)

export default class MessagesList extends Component {

    componentDidUpdate(nextProps, nextState) {
        const {selectedChat: selectedChatOld, resetChatScroll} = this.props;

        if (!!selectedChatOld && selectedChatOld.scrollDown) {
            this.scrollToBottom();
            resetChatScroll(selectedChatOld.chat_id)
        }
    }

    getChatHistory = (chat) => {
        const {getMessages, apiReq, selectedChat} = this.props;
        if (!(getMessages[selectedChat.chat_id].loaded && !this.isChatHistoryEnd())) return;

        const limitAndPage = getLimitAndPage(chat.messages.length);
        apiReq(
            constants.messages,
            {...limitAndPage, driverId: chat.chat_id},
            undefined, {chat_id: chat.chat_id, uselessLimit: limitAndPage.uselessLimit}
        )
    };

    componentDidMount() {
        const {chats, resetChatHistory} = this.props;
    }

    handleScroll = () => {
        if (this.messagesList.scrollTop === 0) {
            this.getChatHistory(this.props.selectedChat)
        }
    };

    handleWheel = (e) => {
        if (this.messagesList.scrollTop === 0 && e.deltaY < 0) {
            this.getChatHistory(this.props.selectedChat)
        }
    };

    isChatHistoryEnd = () => {
        const {selectedChat} = this.props;
        return !!selectedChat && selectedChat.messagesObtained !== undefined && selectedChat.messagesObtained === 0
    };


    scrollToBottom() {
        const scrollHeight = this.messagesList.scrollHeight;
        const height = this.messagesList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messagesList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    render() {
        const {selectedChat, chats} = this.props;

        return (
            <Fragment>
                {!selectedChat ?
                    <MessageNoChatItem/> :

                    <Fragment>
                        <ChatHeader/>
                        <div className="chat-history" ref={(messagesList) => this.messagesList = messagesList}
                             onScroll={this.handleScroll}
                             onWheel={this.handleWheel}
                        >
                            {this.isChatHistoryEnd() && <div className='chat-history-end'>
                                {!!selectedChat.messages[0] ? `No messages before ${moment(selectedChat.messages[0].time).format('DD/MM/YYYY')}` : 'No messages yet'}
                            </div>}
                            <ul>
                                {selectedChat.messages.map(message =>
                                    <MessageItem
                                        key={message.id}
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
