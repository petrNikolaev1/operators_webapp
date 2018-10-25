/*
Component representing the menu of choosign drivers for delivery.
 */

import React, {PureComponent} from 'react';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames'

import '@/assets/styles/SelectDriver.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import Select from "@/common/Select";
import {driversOptions} from "@/util/drivers";
import {hideSelectDrivers, hideOrderModal, hideSelectRoute, showError} from "@/actions/viewActions";
import translate from '@/hocs/Translate'
import {apiReq, selectOptimalDriver, resetOrderApproveInfo} from "@/actions/serverActions";
import constants from "@/constants";
import {secondsToHours} from "@/util/units";

@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute,
        optimalDrivers: store.optimalDriversReducer,
    }), {
        hideSelectDrivers,
        apiReq,
        selectOptimalDriver,
        resetOrderApproveInfo,
        hideOrderModal,
        hideSelectRoute,
        showError
    }
)
@translate('SelectDriver')
@showBeforeHOC('select-drivers')
export default class SelectDriver extends PureComponent {

    onApprove = () => {
        const {selectedRoute, id, optimalDrivers, apiReq, resetOrderApproveInfo, hideOrderModal, hideSelectRoute, hideSelectDrivers} = this.props;
        if (!!selectedRoute && !!optimalDrivers.selected) {
            hideOrderModal();
            hideSelectRoute();
            hideSelectDrivers();
            resetOrderApproveInfo();
            apiReq(constants.approveOrder, {
                orderId: id,
                route_id: selectedRoute.id,
                vehicle_id: optimalDrivers.selected.vehicleId,
            }, this.props)
        }
    };

    componentDidMount() {
        const {apiReq, id, selectedRoute} = this.props;
        apiReq(constants.getOptimalDrivers, {orderId: id, timeToDeliver: selectedRoute.duration.value})
        // apiReq(constants.getOptimalDrivers, {orderId: id, timeToDeliver: 10000000000000}, this.props)
    }

    selectOptimalDriver = (selectedDriver) => {
        if (!selectedDriver || (!!selectedDriver && selectedDriver.length === 0)) return;
        const {selectOptimalDriver, optimalDrivers} = this.props;
        if (!!optimalDrivers.selected && optimalDrivers.selected.value === selectedDriver.value) return;
        selectOptimalDriver(selectedDriver)
    };

    render() {
        const {strings, hideSelectDrivers, optimalDrivers, showBeforeClass} = this.props;

        const optimalDriversLoaded = optimalDrivers.loaded && !!optimalDrivers.options;
        const optimalDriverSelected = optimalDriversLoaded && !!optimalDrivers.selected;
        if (optimalDriverSelected) {
            var {vehicleId, driversIds, timeToOrder, type} = optimalDrivers.selected;
            var timeToOrderConverted = secondsToHours(timeToOrder)
        }

        return (
            <div className={classNames("select-drivers-container", showBeforeClass)}>
                <div className="select-drivers-container-header">
                    <div className="select-drivers-container-header-label">
                        {strings.title}
                    </div>
                    <div onClick={hideSelectDrivers} className="select-drivers-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
                <div className="select-drivers-container-body">
                    <div className="select-drivers-container-body-info">
                        <div className='select-drivers-container-body-info-select'>
                            <Select
                                selectedOption={optimalDrivers.selected}
                                onChange={this.selectOptimalDriver}
                                isDisabled={!optimalDriversLoaded}
                                isSerchable={true}
                                options={optimalDriversLoaded ? optimalDrivers.options : []}
                                placeholder={strings.choose_placeholder}
                                formClassName='default-select'
                                noOptionsMessage={strings.SELECT_NO_DRIVERS}
                            />
                        </div>
                        {optimalDriverSelected &&
                        <div className='select-drivers-container-body-info-selected'>
                            <div className='select-drivers-container-body-info-selected-prop'>
                                <div className='select-drivers-container-body-info-selected-prop-label'>
                                    Время на путь до заказа
                                </div>
                                <div className='select-drivers-container-body-info-selected-prop-value'>
                                    {`${timeToOrderConverted[0]} h ${timeToOrderConverted[1]} min`}
                                </div>
                            </div>
                            <div className='select-drivers-container-body-info-selected-prop'>
                                <div className='select-drivers-container-body-info-selected-prop-label'>
                                    Идеинтификатор средства передвижения
                                </div>
                                <div className='select-drivers-container-body-info-selected-prop-value'>
                                    {vehicleId}
                                </div>
                            </div>
                            <div className='select-drivers-container-body-info-selected-prop'>
                                <div className='select-drivers-container-body-info-selected-prop-label'>
                                    Идеинтификаторы водителей
                                </div>
                                <div className='select-drivers-container-body-info-selected-prop-value'>
                                    {driversIds.reduce((res, cur) => res.length > 0 ? res + ', ' + cur : res + cur, '')}
                                </div>
                            </div>
                            <div className='select-drivers-container-body-info-selected-prop'>
                                <div className='select-drivers-container-body-info-selected-prop-label'>
                                    Тип средства передвижения
                                </div>
                                <div className='select-drivers-container-body-info-selected-prop-value'>
                                    {type}
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='select-drivers-container-body-btns'>
                        <div
                            className='select-drivers-container-body-btns-item select-drivers-container-body-btns-approve'
                            onClick={this.onApprove}>
                            {strings.approve}
                        </div>
                        <div
                            className='select-drivers-container-body-btns-item select-drivers-container-body-btns-reject'
                            onClick={hideSelectDrivers}>
                            {strings.reject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
