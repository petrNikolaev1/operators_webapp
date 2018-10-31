import React, {Component} from 'react';
import classNames from 'classnames'

import '@/assets/styles/Loading.scss'
import logo from '@/assets/img/logo2white.svg'
import showBeforeHoc from '@/hocs/showBeforeHOC'
import cog from '@/assets/img/cog.svg'

@showBeforeHoc('loading-screen')
export default class Loading extends Component {
    render() {
        const {showBeforeClass} = this.props;
        return (
            <div className={classNames("loading-container", showBeforeClass)}>
                <div className='loading-container-cog loading-container-item'>
                    <img src={cog} alt='cog'/>
                </div>
                <div className='loading-container-logo loading-container-item'>
                    <img src={logo} alt='cog'/>
                </div>
            </div>
        )
    }
}
