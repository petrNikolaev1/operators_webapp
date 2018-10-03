/*
Component representing the table of the devices list.
 */

import React, {Fragment, Component} from 'react';

import '@/assets/styles/OrderList.scss'
import mapStatusToImg from '@/util/mapStatusToImg.js'

export default class OrderItem extends Component {

    render() {
        const {id, From, To, Status, birthDate} = this.props;
        return (
            <div key={id} className="Table-row">
                <div className="Table-row-item">{id}</div>
                <div className="Table-row-item">{From}</div>
                <div className="Table-row-item">{To}</div>
                <div className="Table-row-item">{birthDate}</div>
                <div className="Table-row-item">
                    <div className="Table-row-item-icon">{mapStatusToImg(Status)}</div>
                </div>
            </div>
        )
    }
}