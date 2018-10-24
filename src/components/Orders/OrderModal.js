/*
Component representing the menu of a device adding.
 */

import React, {PureComponent} from 'react';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames'
import moment from "moment";

import '@/assets/styles/OrderModal.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import {hideOrderModal, showSelectRoute} from "@/actions/viewActions";
import {filterFullOrderProps} from '@/util/api'
import translate from '@/hocs/Translate'

@connect(
    store => ({
        show: store.viewReducer.orderModalShown
    }), {hideOrderModal, showSelectRoute}
)
@translate('OrderItem')
@showBeforeHOC('add-device-menu')
export default class OrderModal extends PureComponent {

    onApprove = () => {
        const {hideOrderModal, showSelectRoute, id} = this.props;

        showSelectRoute(id)
    };

    render() {
        const {strings, id, hideOrderModal, origin, destination, worth, weight, creation_date, due_date, status, description} = this.props;
        const {destination_full_address} = destination;
        const {origin_full_address} = origin;

        return (
            <div className={classNames(this.props.className, "add-container")}>
                <div className="add-container-header">
                    <div className="add-container-header-label">
                        {strings.ORDER_MODAL_TITLE}
                    </div>
                    <div onClick={hideOrderModal} className="add-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
                <div className="add-container-table">
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.ID}</div>
                        <div className='order-props-item-value'>{id}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.FROM}</div>
                        <div className='order-props-item-value'>{origin_full_address}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.TO}</div>
                        <div className='order-props-item-value'>{destination_full_address}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.WEIGHT}</div>
                        <div className='order-props-item-value'>{weight}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.WORTH}</div>
                        <div className='order-props-item-value'>{worth}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.BIRTH_DATE}</div>
                        <div className='order-props-item-value'>{moment(creation_date).format('DD.MM.YYYY')}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.DUE_DATE}</div>
                        <div className='order-props-item-value'>{moment(due_date * 1012).format('DD.MM.YYYY')}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.STATUS}</div>
                        <div className='order-props-item-value'>{strings[status]}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.DESCRIPTION}</div>
                        <div className='order-props-item-value'>{description}</div>
                    </div>

                    <div className='btns'>
                        <div className='btns-item btns-approve' onClick={this.onApprove}>
                            {strings.APPROVE}
                        </div>
                        <div className='btns-item btns-reject' onClick={hideOrderModal}>
                            {strings.REJECT}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
