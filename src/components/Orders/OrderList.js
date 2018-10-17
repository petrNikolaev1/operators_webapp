import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

import translate from '@/hocs/Translate'
import '@/assets/styles/OrderList.scss'
import OrderItem from './OrderItem'
import OrderModal from './OrderModal'
import Pagination from './Pagination';
import SelectRoute from "@/components/SelectRoute/SelectRouteContainer"
import OrderDrivers from "./OrderDrivers";


@connect(
    store => ({
        orders: store.ordersReducer.orders,
        show: store.viewReducer.orderModalShown,
        showDrivers: store.viewReducer.orderDriversShown,
        selectRouteShown: store.viewReducer.selectRouteShown
    }), {}
)
@translate('OrderList')
export default class OrderList extends Component {
    constructor() {
        super();

        this.state = {
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    renderHeader = () => {
        const {strings,} = this.props;
        return (
            <div className="Table-row Table-header">
                <div className="Table-row-item">{strings.ID}</div>
                <div className="Table-row-item">{strings.FROM}</div>
                <div className="Table-row-item">{strings.TO}</div>
                <div className="Table-row-item">{strings.BIRTH_DATE}</div>
                <div className="Table-row-item">{strings.STATUS}</div>
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
        const {show, showDrivers, selectRouteShown} = this.props;
        const {pageOfItems} = this.state;

        return (
            <div>
                {pageOfItems.map(item => {
                        return (
                            <div key={item.id}>
                                <OrderItem
                                    {...item}
                                />
                                {item.id === show && <OrderModal
                                    {...item}
                                />}
                                {item.id === showDrivers && <OrderDrivers
                                    {...item}
                                />}
                                {item.id === selectRouteShown &&
                                <SelectRoute
                                    orderId={item.id}
                                    origin={{lat: item.latFrom, lng: item.lngFrom}}
                                    destination={{lat: item.latTo, lng: item.lngTo}}
                                />}
                            </div>)
                    }
                )}
            </div>
        )
    };

    render() {
        const {orders} = this.props;

        return (
            <Fragment>
                <div className="Table">
                    {this.renderHeader()}
                    {this.renderDevices()}
                </div>
                <Pagination items={orders} onChangePage={this.onChangePage} pageSize={5}/>
            </Fragment>

        )
    }
}
