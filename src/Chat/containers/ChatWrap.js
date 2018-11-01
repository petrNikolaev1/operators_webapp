import React, {Component} from 'react'

import '@/assets/chatStyles/ChatWrap.scss'
import LoggedIn from "../components/LoggedIn";
import PeopleList from "./PeopleList";
import MessagesList from "./MessagesList";
import Back from "./Back";

/*
Chat-wrapper Container that contains both PeopleList and MessagesList.
Controls a chat change so that when a user is chosen from the PeopleList
the corresponding info is displayed in the MessagesList.
 */

export default class ChatWrap extends Component {

    render() {
        return (
            <div className='chat-wrap'>
                <div className='chat-wrap-left'>
                    <LoggedIn/>
                    <PeopleList/>
                    <Back/>
                </div>
                <div className='chat-wrap-right'>
                    <MessagesList/>
                </div>
            </div>
        )
    }
}
