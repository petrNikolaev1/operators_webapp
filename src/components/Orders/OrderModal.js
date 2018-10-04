/*
Component representing the menu of a device adding.
 */

import React, {PureComponent} from 'react';
import Close from '@material-ui/icons/Close';

import '@/assets/styles/OrderModal.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import {hideOrderModal} from "@/actions/viewActions";
import {filterFullOrderProps} from '@/util/api'
import translate from '@/hocs/Translate'

@connect(
    store => ({
        show: store.orderModalViewReducer.orderModalShown
    }), {hideOrderModal}
)
@translate('OrderModal')
class OrderModal extends PureComponent {

    render() {
        const {strings} = this.props;

        const {hideOrderModal} = this.props;
        const orderProps = filterFullOrderProps(this.props)
        return (
            <div className="add-container">
                <div className="add-container-header">
                    <div className="add-container-header-label">
                        {strings.title}
                    </div>
                    <div onClick={hideOrderModal} className="add-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
                <div className="add-container-table">
                    {orderProps.map(orderProp => {
                        return (
                            <div className='order-props-item'>
                                <div className='order-props-item-label'>{strings[orderProp.label]}</div>
                                <div className='order-props-item-value'>{orderProp.value}</div>
                            </div>
                        )
                    })}
                    <div className='btns'>
                        <div className='btns-item btns-approve'>
                            {strings.approve}
                        </div>
                        <div className='btns-item btns-reject'>
                            {strings.reject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default showBeforeHOC('add-device-menu')(OrderModal);