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
import OrderDrivers from "./OrderDrivers";
import {filterOrders} from "@/actions/ordersActions";
import {apiReq} from "@/actions/serverActions";

@connect(
    store => ({
        ordersNew: store.ordersReducer,
        orders: store.ordersReducerOld.orders,
        show: store.viewReducer.orderModalShown,
        showDrivers: store.viewReducer.orderDriversShown,
        selectRouteShown: store.viewReducer.selectRouteShown,
        filters: store.ordersReducerOld.filters
    }), {filterOrders, apiReq}
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
        const {ordersNew, apiReq} = this.props;
        ordersNew.loaded !== false && apiReq(constants.orders, {limit: 1000, offset: 0})
    };

    filtrate = () => {
        const {filters, orders} = this.props;
        return orders.filter(order => filters.status.find(status => status === order.status) !== undefined);
    };

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    onStatusFilter = (new_status) => {
        const {filters, filterOrders} = this.props;
        let res = filters.status;
        let foundInd = res.findIndex(status => status === new_status);
        foundInd === -1 ? res.push(new_status) : res.splice(foundInd, 1);
        filterOrders({status: res});
    };

    renderFilter = () => {
        const {onStatusFilter} = this;
        return (
            <form>
                <input onChange={() => onStatusFilter(0)} defaultChecked="true" type="checkbox" name="status"
                       value="0"/>Pending
                <input onChange={() => onStatusFilter(1)} defaultChecked="true" type="checkbox" name="status"
                       value="1"/>In progress
                <input onChange={() => onStatusFilter(2)} defaultChecked="true" type="checkbox" name="status"
                       value="2"/>Done
            </form>
        )
    };

    renderHeader = () => {
        const {strings} = this.props;
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
        const {orders, ordersNew, strings} = this.props;

        const ordersFiltered = this.filtrate();

        console.log('RENDER', ordersNew);

        return (
            <Fragment>
                <div className="Table">
                    {this.renderFilter()}
                    {this.renderHeader()}
                    {this.renderDevices()}
                </div>
                <div className="Table-footer">
                    <Pagination items={ordersFiltered}
                                onChangePage={this.onChangePage} pageSize={5}/>
                    <div className="Table-refresh" onClick={this.refreshList}>
                        <Autorenew className='Table-refresh-icon'/>
                        {strings.REFRESH}
                    </div>
                </div>
            </Fragment>

        )
    }
}
