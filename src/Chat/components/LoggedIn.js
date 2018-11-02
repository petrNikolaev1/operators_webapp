import React, {Component, Fragment} from 'react'

import OperatorPhoto from '@/assets/img/personal_photo.jpg'
import '@/assets/chatStyles/LoggedIn.scss'
import Select from "@/common/Select";
import connect from "react-redux/es/connect/connect";
import {selectChat} from "@/actions/chatActions";

@connect(
    store => ({
        chats: store.chatReducer.chats,
        selectedChat: store.chatReducer.selectedChat,
        operator: store.loginReducer,
        profile: store.loginReducer.profile,
    }), {selectChat}
)
export default class LoggedIn extends Component {

    selectChat = (selectedChat) => {
        if (!selectedChat || (!!selectedChat && selectedChat instanceof Array && selectedChat.length === 0)) return;
        this.props.selectChat(selectedChat.formalLabel)
    };

    render() {
        const {chats, selectedChat, profile} = this.props;
        const chatsOptions = chats
            .map(chat =>
                ({label: chat.username, formalLabel: chat.chat_id, value: chat.chat_id}));
        const selectedOption = !!selectedChat && {
            label: selectedChat.username,
            formalLabel: selectedChat.chat_id,
            value: selectedChat.chat_id
        };

        return (
            <Fragment>
                <div className='logged-in'>
                    <div className='logged-in-photo' style={{backgroundImage: `url(${OperatorPhoto})`}}/>
                    <div className='logged-in-username'>
                        {profile.name}
                    </div>
                </div>
                <div className="search">
                    <Select
                        onChange={this.selectChat}
                        selectedOption={selectedOption}
                        isSerchable={true}
                        noOptionsMessage={'There is no such driver'}
                        placeholder={'Select a driver to chat with'}
                        options={chatsOptions}
                        formClassName='select-vh'
                    />
                </div>
            </Fragment>
        )
    }
}

