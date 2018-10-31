/*
Component representing the menu of a device adding.
 */

import React, {Component} from 'react';
import classNames from 'classnames'
import {Close, ErrorOutline} from '@material-ui/icons';
import onClickOutside from "react-onclickoutside";
import connect from "react-redux/es/connect/connect";

import '@/assets/styles/Error.scss'
import showBeforeHoc from '@/hocs/showBeforeHOC'
import {hideError} from "@/actions/viewActions";
import translate from "@/hocs/Translate";

@connect(
    store => ({
        error: store.viewReducer.error
    }), {hideError}
)
@translate('Error')
@showBeforeHoc('error-screen')
@onClickOutside
export default class Error extends Component {

    handleClickOutside = () => {
        const {hideError} = this.props;
        hideError()
    };

    render() {
        const {error, strings, hideError, showBeforeClass} = this.props;
        const {text} = error;

        return (
            <div className={classNames("error-container", showBeforeClass)}>
                <div className="error-container-icon"><ErrorOutline className='error'/></div>
                <div className="error-container-text">
                    {!!strings[text] && strings[text].split('\n').map((item, key) => (
                        <span key={key}>{item}<br/></span>))}
                </div>
                <div className='error-container-close'>
                    <Close onClick={hideError} className='error-container-close-icon'/>
                </div>
            </div>
        )
    }
}
