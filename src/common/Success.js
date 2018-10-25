import React, {Component} from 'react';
import {Close, Done} from "@material-ui/icons";
import onClickOutside from "react-onclickoutside";
import connect from "react-redux/es/connect/connect";

import '@/assets/styles/Success.scss'
import showBeforeHoc from '@/hocs/showBeforeHOC'
import {hideSuccess} from "@/actions/viewActions";

@connect(
    store => ({
        success: store.viewReducer.success
    }), {hideSuccess}
)
@showBeforeHoc('success-screen')
@onClickOutside
export default class Success extends Component {

    handleClickOutside = () => {
        const {unmount} = this.props;
        !!unmount && unmount();
    };

    render() {
        const {hideSuccess, success} = this.props;
        const {text} = success;

        return (
            <div className="success-container">
                <div className="success-container-primary">
                    <div className="success-container-primary-icon"><Done className='success'/></div>
                    <div className="success-container-primary-text">
                        {!!text && text.split('\n').map((item, key) => (<span key={key}>{item}<br/></span>))}
                    </div>
                    <div className='success-container-primary-close'>
                        <Close onClick={hideSuccess} className='success-container-primary-close-icon'/>
                    </div>
                </div>
            </div>
        )

    }
}
