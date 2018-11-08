import React from 'react'
import classNames from 'classnames'
import {Close} from '@material-ui/icons';

import '@/assets/styles/Header.scss'


export default props => {
    const {label, onClose, headerContainerClass, headerLabelClass, headerIconClass} = props;
    return (
        <div className={classNames('header-container-default', `${headerContainerClass}`)}>
            <div className={classNames('header-label-default', `${headerLabelClass}`)}>
                {label}
            </div>
            <div className={classNames('header-close-default', `${headerIconClass}`)} onClick={onClose}>
                <Close/>
            </div>
        </div>
    )
}
