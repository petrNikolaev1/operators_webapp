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
import {hideSelectDrivers, showSelectRoute} from "@/actions/viewActions";
import translate from '@/hocs/Translate'

@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute
    }), {hideSelectDrivers, showSelectRoute}
)
@translate('SelectDriver')
@showBeforeHOC('select-drivers')
export default class SelectDriver extends PureComponent {

    onApprove = () => {
        const {selectedRoute} = this.props;
        console.log(selectedRoute)
    };

    render() {
        const {strings, hideSelectDrivers, showSelectRoute, id} = this.props;

        return (
            <div className={classNames(this.props.className, "select-drivers-container")}>
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
                                isSerchable={true}
                                options={driversOptions}
                                placeholder={strings.choose_placeholder}
                                formClassName='default-select'
                                noOptionsMessage={strings.SELECT_NO_DRIVERS}
                            />
                        </div>
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
