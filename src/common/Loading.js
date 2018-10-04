/*
Component representing the menu of a device adding.
 */

import React, {Component} from 'react';

import '@/assets/styles/Loading.scss'
import logo from '@/assets/img/logo2white.svg'
import showBeforeHoc from '@/hocs/showBeforeHOC'

class Loading extends Component {

    render() {
        return (
            <div className="loading-container">
                    <img className='second' src={logo} alt='logo'/>
            </div>
        )
    }
}

export default showBeforeHoc('loading-screen')(Loading)