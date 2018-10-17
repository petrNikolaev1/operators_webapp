/*
Component representing the menu of a device adding.
 */

import React, {PureComponent} from 'react';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames'

import '@/assets/styles/OrderModal.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import {hideOrderModal, showDrivers} from "@/actions/viewActions";
import {filterFullOrderProps} from '@/util/api'
import translate from '@/hocs/Translate'

@connect(
    store => ({
        show: store.viewReducer.orderModalShown
    }), {hideOrderModal, showDrivers}
)
@translate('OrderModal')
@showBeforeHOC('add-device-menu')
export default class OrderModal extends PureComponent {

    render() {
        const {strings, index} = this.props;

        const {hideOrderModal, showDrivers, id} = this.props;
        const orderProps = filterFullOrderProps(this.props);
        return (
            <div className={classNames(this.props.className, "add-container")}>
                <div className="add-container-header">
                    <div className="add-container-header-label">
                        {strings.title}
                    </div>
                    <div onClick={hideOrderModal} className="add-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
                <div className="add-container-table">
                    {orderProps.map((orderProp, index) => {
                        return (
                            <div className='order-props-item' key={index}>
                                <div className='order-props-item-label'>{strings[orderProp.label]}</div>
                                <div className='order-props-item-value'>{orderProp.value}</div>
                            </div>
                        )
                    })}
                    <div className='btns'>
                        <div className='btns-item btns-approve' onClick={() => {hideOrderModal(); showDrivers(id)}}>
                            {strings.approve}
                        </div>
                        <div className='btns-item btns-reject' onClick={hideOrderModal}>
                            {strings.reject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
