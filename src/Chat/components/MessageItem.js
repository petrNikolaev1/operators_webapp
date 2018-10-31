import React, {Component} from 'react'
import classNames from 'classnames'

import '@/assets/chatStyles/MessageItem.scss'

/*
Component representing a Message.
 */

export default class MessageItem extends Component {

    convertTime(date) {
        var d = new Date(date);
        return `${this.pad(d.getHours())}:${this.pad(d.getMinutes())} ${this.pad(d.getDate())}/${this.pad(d.getMonth() + 1)}`
    }

    pad(val) {
        return (val < 10) ? '0' + val : val;
    }

    render() {
        const {
            username, time, author, text, color, edited,
        } = this.props;

        const messageClass = classNames('message', {'message-my': username === author}, {'message-other': username !== author});
        const messageDataClass = classNames('message-data',
                {'message-data-my': username === author},
                {'message-data-other': username !== author}
            );

        return (
            <li id={time} className="message-container">
                <div className={messageDataClass}>
                    <div className="message-data-edited"> &nbsp;{edited ? ' edited' : null}</div>
                    <div className="message-data-time">{this.convertTime(time)}</div>
                    &nbsp; &nbsp;
                    <div className="message-data-name">{author}</div>
                </div>
                <div style={{background: color, borderBottomColor: color}} className={messageClass}>
                    {text}
                </div>
            </li>
        )
    }
}
