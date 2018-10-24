/*
Component representing the table of the devices list.
 */

import React, {Component} from 'react';
import moment from 'moment'

import '@/assets/styles/OrderList.scss'
import mapStatusToImg from '@/util/mapStatusToImg'
import connect from "react-redux/es/connect/connect";
import {showOrderModal} from "@/actions/viewActions";


@connect(
    store => ({}), {
showOrderModal
}
)
export default class OrderItem extends Component {

    render() {
        const {id, status, creation_date, showOrderModal, destination, origin} = this.props;
        const {destination_short_address} = destination;
        const {origin_short_address} = origin;
        return (
            <div key={id} className="orders-list-row" onClick={() => showOrderModal(id)}>
                <div className="orders-list-row-item">{id}</div>
                <div className="orders-list-row-item">{origin_short_address}</div>
                <div className="orders-list-row-item">{destination_short_address}</div>
                <div className="orders-list-row-item">{moment(creation_date).format('DD.MM.YYYY')}</div>
                <div className="orders-list-row-item">
                    <div className="orders-list-row-item-icon">{mapStatusToImg(status)}</div>
                </div>
            </div>
        )
    }
}
