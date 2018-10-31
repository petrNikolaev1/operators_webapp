import React, {Component} from 'react'

import OperatorPhoto from '@/assets/img/personal_photo.jpg'
import '@/assets/chatStyles/LoggedIn.scss'

export default class LoggedIn extends Component {
    render() {
        return (
            <div className='logged-in'>
                <div className='logged-in-photo' style={{backgroundImage: `url(${OperatorPhoto})`}}/>
                <div className='logged-in-username'>
                    {`Николай Матяшов`}
                </div>
            </div>
        )
    }
}

