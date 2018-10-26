import React, {Component} from 'react'

import '@/assets/chatStyles/ChatHeader.scss'


export default class UserItem extends Component {

    render() {
        return (
            <div className="chat-header">
                <div className='chat-header-info'>
                    <div id="test" className="chat-header-name">
                        {this.props.name}
                    </div>
                    <div className='chat-header-typing'>
                        {/*Отображение того, что кто-то печатает*/}
                    </div>
                </div>
            </div>
        )
    }
}



