import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '@/assets/styles/Settings.scss'

export default class Settings extends Component {
    render() {
        return (
            <div>
                <h1>
                    Settings
                </h1>
                <Link to="/">
                    <button>Back to main screen</button>
                </Link>
            </div>
        )
    }
}
