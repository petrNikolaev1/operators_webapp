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
        const {time, text, edited, from_id, from_name, is_driver_initiator} = this.props;

        const isMine = (!is_driver_initiator && from_id === 1);
        const color = isMine ? '#01BABF' : '#68cf4c';

        const messageClass = classNames('message', {'message-my': isMine}, {'message-other': !isMine});
        const messageDataClass = classNames('message-data',
            {'message-data-my': isMine},
            {'message-data-other': !isMine}
        );

        return (
            <li id={time} className="message-container">
                <div className={messageDataClass}>
                    <div className="message-data-edited"> &nbsp;{edited ? ' edited' : null}</div>
                    <div className="message-data-time">{this.convertTime(time)}</div>
                    &nbsp; &nbsp;
                    <div className="message-data-name">{from_name}</div>
                </div>
                <div style={{background: color, borderBottomColor: color}} className={messageClass}>
                    {text}
                </div>
            </li>
        )
    }
}
