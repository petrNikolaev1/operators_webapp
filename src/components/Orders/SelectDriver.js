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
import {hideDrivers, showSelectRoute} from "@/actions/viewActions";
import translate from '@/hocs/Translate'

@connect(
    store => ({
        showDrivers: store.viewReducer.orderDriversShown
    }), {hideDrivers, showSelectRoute}
)
@translate('SelectDriver')
@showBeforeHOC('select-drivers')
export default class SelectDriver extends PureComponent {

    render() {
        const {strings} = this.props;

        const {hideDrivers, showSelectRoute, id} = this.props;
        return (
            <div className={classNames(this.props.className, "select-drivers-container")}>
                <div className="select-drivers-container-header">
                    <div className="select-drivers-container-header-label">
                        {strings.title}
                    </div>
                    <div onClick={hideDrivers} className="select-drivers-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>
                <div className="select-drivers-container-body">
                    <div className='select-drivers-container-body-select'>
                        <Select
                            isSerchable={true}
                            options={driversOptions}
                            placeholder={strings.choose_placeholder}
                            formClassName='default-select'
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
