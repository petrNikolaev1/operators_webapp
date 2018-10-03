/*
Component representing the table of the devices list.
 */

import React, {Fragment, Component} from 'react';

import '../../assets/styles/DevicesList.css'
import constants from "../../constants";
import mapStatusToImg from '../../util/mapStatusToImg'
import DeviceMenu from './DeviceMenu';
import {Autorenew} from '@material-ui/icons';
import {api} from "../../util/api";

export default class OrderItem extends Component {

    state = {
        menuShown: false,
        disconnectedStatusHovered: false,
        statusHoverEnabled: true,
    };

    setDisconnectedStatusHovered = (status) => {
        const {statusHoverEnabled} = this.state;
        if ((status !== 1 && status !== 2) || !statusHoverEnabled) return;
        this.setState({
            disconnectedStatusHovered: true
        })
    };

    resetDisconnectedStatusHovered = (status) => {
        if (status !== 1 && status !== 2) return;
        this.setState({
            disconnectedStatusHovered: false
        })
    };

    reconnect = () => {
        const {apiRequest, id} = this.props;
        const {disconnectedStatusHovered} = this.state;
        if (!disconnectedStatusHovered) return;
        apiRequest(...api[constants.ReconnectDevice](id));
        this.setState({disconnectedStatusHovered: false});
    };

    showMenu = (event) => {
        const {disconnectedStatusHovered} = this.state;
        if (disconnectedStatusHovered && this.icon.contains(event.target)) return;
        this.setState({menuShown: true})
    };

    hideMenu = () => {
        this.setState({menuShown: false})
    };

    componentDidMount() {
        const {setStatusRequestNeed, shouldStatusRequestBeSent, id, apiRequest} = this.props;
        if (shouldStatusRequestBeSent[id]) {
            apiRequest(
                {Command: constants.GetDeviceStatus, NumDevice: id},
                constants.DEVICES_STATUS_REQUEST,
                constants.DEVICES_STATUS_SUCCESS,
                constants.DEVICES_STATUS_ERROR,
                id
            );
            setStatusRequestNeed(constants.SET_STATUS_REQUEST_NEED_UPD, {[id]: false});
        }
    }

    componentDidUpdate(prevProps) {
        const {setStatusRequestNeed, shouldStatusRequestBeSent, id, apiRequest, devicesStatus: devicesStatusNew, reconnectDevice: reconnectDeviceNew} = this.props;
        const {devicesStatus: devicesStatusOld, reconnectDevice: reconnectDeviceOld} = prevProps;
        const deviceStatusOld = this.getStatusById(devicesStatusOld, id);
        const deviceStatusNew = this.getStatusById(devicesStatusNew, id);
        const reconnectDeviceLoadedOld = this.getReconnectDeviceById(reconnectDeviceOld, id);
        const reconnectDeviceLoadedNew = this.getReconnectDeviceById(reconnectDeviceNew, id);

        if (shouldStatusRequestBeSent[id]) {
            apiRequest(
                {Command: constants.GetDeviceStatus, NumDevice: id},
                constants.DEVICES_STATUS_REQUEST,
                constants.DEVICES_STATUS_SUCCESS,
                constants.DEVICES_STATUS_ERROR,
                id
            );
            setStatusRequestNeed(constants.SET_STATUS_REQUEST_NEED_UPD, {[id]: false});
        }
        if (reconnectDeviceLoadedOld && !reconnectDeviceLoadedNew) {
            this.setState({statusHoverEnabled: false})
        } else if (!reconnectDeviceLoadedOld && reconnectDeviceLoadedNew) {
            this.setState({statusHoverEnabled: true, disconnectedStatusHovered: false})
        }
    }

    componentWillUnmount() {
        const {deleteDeviceStatus, id, setStatusRequestNeed, deleteReconnectDevice} = this.props;
        deleteDeviceStatus(id);
        deleteReconnectDevice(id);
        setStatusRequestNeed(constants.SET_STATUS_REQUEST_NEED_RST, id);
    }

    parseStatusInfo = (data, param = 'status', errorMsg = 3, loadingMsg = 3) => {
        if (data.error) {
            return errorMsg
        } else if (!data.isLoaded) {
            return loadingMsg
        } else {
            return data.result[param]
        }
    };

    getStatusById = (devices, id) => {
        if (!devices[id]) return 3;
        return this.parseStatusInfo(devices[id.toString()]);
    };

    getReconnectDeviceById = (reconnectDevice, NumDevice) => {
        if (!reconnectDevice[NumDevice]) return true;
        else return reconnectDevice[NumDevice].isLoaded;
    };

    render() {
        const {id, name, connectionType, connectionInfo, devicesStatus, apiRequest, reconnectDevice} = this.props;
        const {menuShown, disconnectedStatusHovered, statusHoverEnabled} = this.state;
        const deviceStatus = this.getStatusById(devicesStatus, id);
        const reconnectDeviceLoaded = this.getReconnectDeviceById(reconnectDevice, id);

        // if (id === 1) {
        //     console.log('---------------------------------')
        //     console.log('status', deviceStatus)
        //     console.log('loaded', reconnectDeviceLoaded)
        //     console.log('hovered', disconnectedStatusHovered)
        //     console.log('hover enabled', statusHoverEnabled)
        //     console.log('---------------------------------')
        // }

        return (
            <Fragment>
                <div onClick={this.showMenu}
                     className="Table-row">
                    <div className="Table-row-item">{id}</div>
                    <div className="Table-row-item strong-text">{name}</div>
                    <div className="Table-row-item"><span>{connectionType}</span>&nbsp;&nbsp;
                        <span
                            className='light-text'>{connectionInfo}</span></div>
                    <div className="Table-row-item">
                        <div className="Table-row-item-icon"
                             ref={icon => this.icon = icon}
                             onMouseEnter={() => this.setDisconnectedStatusHovered(deviceStatus)}
                             onMouseLeave={() => this.resetDisconnectedStatusHovered(deviceStatus)}
                             onClick={this.reconnect}
                        >{((deviceStatus === 1 || deviceStatus === 2) && disconnectedStatusHovered && reconnectDeviceLoaded && statusHoverEnabled) ?
                            <Autorenew className='reconnect'/> :
                            mapStatusToImg(!reconnectDeviceLoaded ? 3 : deviceStatus)}
                        </div>
                    </div>
                </div>
                {
                    menuShown &&
                    <DeviceMenu
                        {...this.props} unmount={this.hideMenu} status={deviceStatus}
                    />
                }
            </Fragment>
        )
    }
}