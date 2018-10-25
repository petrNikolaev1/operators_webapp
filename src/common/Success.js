import React, {Component} from 'react';
import {Close, Done} from "@material-ui/icons";
import onClickOutside from "react-onclickoutside";
import connect from "react-redux/es/connect/connect";

import '@/assets/styles/Success.scss'
import showBeforeHoc from '@/hocs/showBeforeHOC'
import {hideSuccess} from "@/actions/viewActions";
import translate from "@/hocs/Translate";

@connect(
    store => ({
        success: store.viewReducer.success
    }), {hideSuccess}
)
@translate('Success')
@showBeforeHoc('success-screen')
@onClickOutside
export default class Success extends Component {

    handleClickOutside = () => {
        const {hideSuccess} = this.props;
        hideSuccess()
    };

    render() {
        const {hideSuccess, success, strings} = this.props;
        const {text} = success;

        return (
            <div className="success-container">
                <div className="success-container-primary">
                    <div className="success-container-primary-icon"><Done className='success'/></div>
                    <div className="success-container-primary-text">
                        {!!text && strings[text]}
                    </div>
                    <div className='success-container-primary-close'>
                        <Close onClick={hideSuccess} className='success-container-primary-close-icon'/>
                    </div>
                </div>
            </div>
        )

    }
}
