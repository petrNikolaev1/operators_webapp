import React, {Component} from 'react'

import '@/assets/chatStyles/UserItem.scss'

/*
Component representing a user.
 */

export default class UserItem extends Component {

    render() {
        const {id, username, handleChatWith} = this.props;

        return (
            <li>
                <div className='user-avatar'>
                    <img src={this.getAvatar(id)} alt="avatar"/>
                </div>
                <div className="user-about">
                    <div className="user-about-name"> {username} </div>
                    <div className="user-about-status">
                        <span className="user-about-status-online"/> online
                    </div>
                </div>
            </li>
        )

    }

    getAvatar = (id) => {
        return require(`../../assets/img/avatar (${id % 7}).jpg`)
    }
}
