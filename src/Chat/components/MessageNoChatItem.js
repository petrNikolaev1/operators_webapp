import React, {Component} from 'react'
import classNames from 'classnames'

import '@/assets/chatStyles/MessageNoChatItem.scss'

/*
Component representing a Message.
 */

export default class MessageNoChatItemItem extends Component {

    render() {

        return (
            <div className="no-chat-chosen">
                No chat chosen
            </div>
        )
    }
}
