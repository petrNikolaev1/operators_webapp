import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import constants from '@/constants'
import {Autorenew} from '@material-ui/icons';

import translate from '@/hocs/Translate'
import '@/assets/styles/OrderList.scss'
import OrderItem from './OrderItem'
import OrderModal from './OrderModal'
import Pagination from './Pagination';
import SelectRoute from "@/components/SelectRoute/SelectRouteContainer"
import SelectDriver from "./SelectDriver";
import {apiReq} from "@/actions/serverActions";
import {mapStatusToNum} from "@/util/api";
import OrdersFilter from './OrdersFilter'
import {filterOrders} from '@/util/filters'

@connect(
    store => ({
        orders: store.ordersReducer,
        orderModalShown: store.viewReducer.orderModalShown,
        orderDriversShown: store.viewReducer.orderDriversShown,
        selectRouteShown: store.viewReducer.selectRouteShown,
        filters: store.ordersReducer.filters
    }), {apiReq}
)
@translate('OrderList')
export default class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageOfItems: [],
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        const {apiReq} = this.props;
        this.refreshList()
    }

    refreshList = () => {
        this.props.apiReq(constants.orders, {limit: 1000, offset: 0})
    };

    getOrders = () => {
        const {orders} = this.props;
        if (!orders.error && !!orders.res) {
            return orders.res
        }
        return []
    };

    onChangePage(pageOfItems) {
        this.setState({pageOfItems: pageOfItems});
    };

    renderHeader = () => {
        const {strings} = this.props;
        return (
            <div className="orders-list-row orders-list-header">
                <div className="orders-list-row-item">{strings.ID}</div>
                <div className="orders-list-row-item">{strings.FROM}</div>
                <div className="orders-list-row-item">{strings.TO}</div>
                <div className="orders-list-row-item">{strings.BIRTH_DATE}</div>
                <div className="orders-list-row-item">{strings.STATUS}</div>
            </div>
        )
    };

    rendeOrders = () => {
        const {orderModalShown, orderDriversShown, selectRouteShown} = this.props;
        const {pageOfItems} = this.state;

        return (
            <div>
                {pageOfItems.map(item => {
                        return (
                            <div key={item.id}>
                                <OrderItem
                                    {...item}
                                />
                                {item.id === orderModalShown &&
                                <OrderModal{...item}/>}
                                {item.id === selectRouteShown &&
                                <SelectRoute
                                    orderId={item.id}
                                    origin={{
                                        lat: item.origin.origin_latitude,
                                        lng: item.origin.origin_longitude
                                    }}
                                    destination={{
                                        lat: item.destination.destination_latitude,
                                        lng: item.destination.destination_longitude
                                    }}
                                />}
                                {item.id === orderDriversShown &&
                                <SelectDriver{...item}/>}
                            </div>)
                    }
                )}
            </div>
        )
    };

    renderEmpty = () => {
        const {strings} = this.props;
        return (
            <div className='orders-list-row orders-list-empty'>
                {strings.EMPTY}
            </div>
        )
    };

    renderError = () => {
        const {strings} = this.props;
        return (
            <div className='orders-list-row orders-list-empty'>
                {strings.ERROR}
            </div>
        )
    };

    render() {
        const {orders, strings, filters} = this.props;

        const ordersFiltered = filterOrders(this.getOrders(), filters);
        const error = orders.error;
        const empty = !error && ordersFiltered.length === 0;

        // console.log('RENDER', orders);

        return (
            <Fragment>
                <OrdersFilter/>
                <div className="orders-list">
                    {error ? this.renderError() : empty ? this.renderEmpty() :
                        <Fragment>
                            {this.renderHeader()}
                            {this.rendeOrders()}
                        </Fragment>}
                </div>
                <div className="orders-list-footer">
                    <Pagination items={ordersFiltered}
                                onChangePage={this.onChangePage} pageSize={5}/>
                    <div className="orders-list-refresh" onClick={this.refreshList}>
                        <Autorenew className='orders-list-refresh-icon'/>
                        {strings.REFRESH}
                    </div>
                </div>
            </Fragment>
        )
    }
}
