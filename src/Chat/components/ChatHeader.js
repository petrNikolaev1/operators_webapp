import React, {Component} from 'react'

import '@/assets/chatStyles/ChatHeader.scss'


export default class UserItem extends Component {

    render() {
        return (
            <div className="chat-header">
                <div className='chat-header-info'>
                    <div id="test" className="chat-header-name">
                        {'Петр Николаев'}
                    </div>
                    <div className='chat-header-typing'>
                        {'Петр печатает...'}
                    </div>
                </div>
            </div>
        )
    }
}



