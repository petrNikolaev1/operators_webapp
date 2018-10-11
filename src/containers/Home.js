import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '@/assets/styles/Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    Home
                </h1>
                <Link to="/">
                    <button>Back to main screen</button>
                </Link>
            </div>
        )
    }
}
