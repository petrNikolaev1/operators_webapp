import React, {Component} from 'react'

import '@/assets/chatStyles/Back.scss'
import {Link} from 'react-router-dom'

export default class Back extends Component {

    render() {

        return (
            <div className="back">
                <Link className="back-button" to='/'>
                    Back
                </Link>
            </div>
        )
    }
}
