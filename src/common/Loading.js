/*
Component representing the menu of a device adding.
 */

import React, {Component} from 'react';

import '../../assets/styles/Loading.css'
import logo1 from '../../assets/img/1.svg'
import logo2 from '../../assets/img/2.svg'
import showBeforeHoc from '../../hocs/showBeforeHOC'

class Loading extends Component {

    render() {
        return (
            <div className="loading-container">
                <div className='loading-item'>
                    <img className='first' src={logo1} alt='logo1'/>
                </div>
                <div className='loading-item'>
                    <img className='second' src={logo2} alt='logo2'/>
                </div>
            </div>
        )
    }
}

export default showBeforeHoc('loading-screen')(Loading)