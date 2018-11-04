import React, {Component} from 'react'
import {Close, ChevronLeft, ChevronRight} from '@material-ui/icons';

import '@/assets/styles/Customer.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import SelectLocation from "@/common/SelectLocation";

@showBeforeHOC('KKT-registration')
export default class Customer extends Component {

    render() {
        return (
            <div className="KKT-registration-container">
                <div className='KKT-registration-container-header'>
                    <div className="KKT-registration-container-header-label">
                        Оформление заказа
                    </div>
                    <div className="KKT-registration-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>

                <div className='KKT-registration-container-page-header'>
                    <div className="KKT-registration-container-page-header-label">
                        Адрес отправления груза
                    </div>
                </div>
                <div className='KKT-registration-container-body'>
                    <div className='KKT-registration-container-body-table'>
                        <SelectLocation/>
                    </div>
                </div>
                <div className='KKT-registration-container-nav-container'>
                    <div className='KKT-registration-container-nav-left'/>
                    <div className='KKT-registration-container-nav'>
                        <div className='KKT-registration-container-nav-arrow'>
                            <ChevronLeft className='arrow-icon'/>
                        </div>
                        <div className='KKT-registration-container-nav-label'>
                            {'1/4'}
                        </div>
                        <div className='KKT-registration-container-nav-arrow'>
                            <ChevronRight className='arrow-icon'/>
                        </div>
                    </div>
                    <div className='KKT-registration-container-nav-right'/>
                </div>
            </div>

        )
    }
}
