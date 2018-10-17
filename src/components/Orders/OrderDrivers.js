/*
Component representing the menu of choosign drivers for delivery.
 */

import React, {PureComponent} from 'react';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames'

import '@/assets/styles/OrderModal.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import Select from "@/common/Select";
import {driversOptions} from "@/util/drivers";
import {hideDrivers, showSelectRoute} from "@/actions/viewActions";
import translate from '@/hocs/Translate'

@connect(
    store => ({
        showDrivers: store.viewReducer.orderDriversShown
    }), {hideDrivers, showSelectRoute}
)
@translate('OrderDrivers')
@showBeforeHOC('add-device-menu')
export default class OrderDrivers extends PureComponent {

    render() {
        const {strings} = this.props;

        const {hideDrivers, showSelectRoute, id} = this.props;
        return (
            <div className={classNames(this.props.className, "add-container")}>
                <div className="add-container-header">
                    <div className="add-container-header-label">
                        {strings.title}
                    </div>
                    <div onClick={hideDrivers} className="add-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
                <div className="add-container-table">
                    <div className='top-panel-container-item top-panel-container-lang'>
                        <Select
                            isSerchable={true}
                            options={driversOptions}
                            placeholder={strings.choose_placeholder}
                            formClassName='add-device-select'
                        />
                    </div>
                    <div className='btns'>
                        <div className='btns-item btns-approve' onClick={() => {showSelectRoute(id); hideDrivers()}}>
                            {strings.approve}
                        </div>
                        <div className='btns-item btns-reject'  onClick={hideDrivers}>
                            {strings.reject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
