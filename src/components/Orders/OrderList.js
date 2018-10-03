/*
Component representing the table of the devices list.
 */

import React, {Component} from 'react';

import '../../assets/styles/OrderList.css'
import OrderItem from './OrderItem'

export default class OrderList extends Component {

    renderHeader = () => {
        return (
            <div className="Table-row Table-header">
                <div className="Table-row-item">
                    id
                </div>
                <div className="Table-row-item">
                </div>
                <div className="Table-row-item">Подключение</div>
                <div className="Table-row-item">Состояние</div>
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
        return this.props.devicesInfo.result.map(device => {
            return (
                <OrderItem
                    key={device.deviceId}
                    id={device.deviceId}
                    name={device.ModelName}
                    specName={device.deviceSpecName}
                    type={device.DeviceType}
                    connectionType={device.connectionType}
                    connectionInfo={device.connectionParam}
                    status={device.status}
                    settings={device.settings}
                    {...this.props}
                />
            )
        })
    };

    render() {
        const {devicesInfo} = this.props;

        return (
            <div className="Table">

                {(!isError && !isEmpty) && this.renderHeader()}
                {(!isError && !isEmpty) && this.renderDevices()}
            </div>
        )
    }
}