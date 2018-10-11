import React, {PureComponent} from 'react';
import classNames from 'classnames'
import {Close, Done} from "@material-ui/icons";

import '@/assets/styles/Confirm.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import {hideConfirm} from "@/actions/routesActions";
import {filterFullOrderProps} from '@/util/api'
import translate from '@/hocs/Translate'

@connect(
    store => ({
        show: store.routesReducer.confirmShown
    }), {hideConfirm}
)
@translate('Map')
@showBeforeHOC('add-device-menu')
export default class OrderModal extends PureComponent {

    render() {
        const {strings} = this.props;

        const {hideConfirm} = this.props;
        return (
            <div className={classNames(this.props.className, "add-container")}>
                <div className="add-container-header">
                    <div className='add-container-header-icon'><Done/></div>
                    <div className="add-container-header-label">
                        {strings.confirm}
                    </div>
                    <div onClick={hideConfirm} className="add-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
            </div>
        )
    }
}
