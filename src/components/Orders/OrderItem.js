/*
Component representing the table of the devices list.
 */

import React, {Component} from 'react';

import '@/assets/styles/OrderList.scss'
import mapStatusToImg from '@/util/mapStatusToImg.js'

export default class OrderItem extends Component {

    render() {
        const {id, from, to, status, birthDate} = this.props;
        return (
            <div key={id} className="Table-row">
                <div className="Table-row-item">{id}</div>
                <div className="Table-row-item">{from}</div>
                <div className="Table-row-item">{to}</div>
                <div className="Table-row-item">{birthDate}</div>
                <div className="Table-row-item">
                    <div className="Table-row-item-icon">{mapStatusToImg(status)}</div>
                </div>
            </div>
        )
    }
}