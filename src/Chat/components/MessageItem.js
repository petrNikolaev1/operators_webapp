import React, {Component} from 'react'
import classNames from 'classnames'
import moment from "moment"
import connect from "react-redux/es/connect/connect";

import '@/assets/chatStyles/MessageItem.scss'

/*
Component representing a Message.
 */

@connect(
    store => ({
        profile: store.loginReducer.profile,
    }), {}
)
export default class MessageItem extends Component {

    render() {
        const {time, text, edited, from_id, from_name, is_driver_initiator, id, profile} = this.props;

        const isMine = (!is_driver_initiator && from_id === profile.id);
        const color = is_driver_initiator ? '#68cf4c' : isMine ? '#01BABF' : 'SteelBlue';

        const messageClass = classNames('message', {'message-my': isMine}, {'message-other': !isMine});
        const messageDataClass = classNames('message-data',
            {'message-data-my': isMine},
            {'message-data-other': !isMine}
        );

        return (
            <li id={time} className="message-container">
                <div className={messageDataClass}>
                    <div className="message-data-edited"> &nbsp;{edited ? ' edited' : null}</div>
                    <div className="message-data-time">{moment(time).format('HH:mm DD/MM')}</div>
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
