/*
Component representing the menu of a device adding.
 */

import React, {Component} from 'react';

import '../assets/styles/Loading.scss'
import logo2 from '../assets/img/logo2white.svg'
import showBeforeHoc from '../hocs/showBeforeHOC'

class Loading extends Component {

    render() {
        return (
            <div className="loading-container">
                <div className='loading-item'>
                    <img className='second' src={logo2} alt='logo2'/>
                </div>
            </div>
        )
    }
}

export default showBeforeHoc('loading-screen')(Loading)