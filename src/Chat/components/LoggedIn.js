import React, {Component} from 'react'

import '@/assets/chatStyles/LoggedIn.scss'

export default class LoggedIn extends Component {
    render() {
        return (
            <div className='logged-in'>
                <div className='logged-in-username'>
                    {`Login: Николай Матяшов`}
                </div>
            </div>
        )
    }
}

