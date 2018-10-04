/*
Component representing the table of the devices list.
 */

import React, {Component} from 'react';

import translate from '@/hocs/Translate'
import '@/assets/styles/OrderList.scss'
import OrderItem from './OrderItem'
import {connect} from 'react-redux'


@connect(
    store => ({
        orders: store.ordersReducer.orders
    }), {}
)
@translate('OrderList')
export default class OrderList extends Component {

    renderHeader = () => {
        const {strings} = this.props;
        return (
            <div className="Table-row Table-header">
                <div className="Table-row-item">{strings.ID}</div>
                <div className="Table-row-item">{strings.FROM}</div>
                <div className="Table-row-item">{strings.TO}</div>
                <div className="Table-row-item">{strings.BIRTH_DATE}</div>
                <div className="Table-row-item">{strings.STATUS}</div>
            </div>
        )
    };

    renderNotification = (msg) => {
        return (
            <div className="Table-row Table-no-devices">
                {msg}
            </div>
        )
    };

    renderDevices = () => {
        return this.props.orders.map(order => {
            return (
                <OrderItem
                    key={order.id}
                    {...order}
                />
            )
        })
    };

    render() {
        return (
            <div className="Table">
                {this.renderHeader()}
                {this.renderDevices()}
            </div>
        )
    }
}