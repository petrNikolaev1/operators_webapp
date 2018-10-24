import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import filter from "lodash/filter";
import equal from "deep-equal";
import find from "lodash/find";

import translate from '@/hocs/Translate'
import '@/assets/styles/OrderList.scss'
import OrderItem from './OrderItem'
import OrderModal from './OrderModal'
import Pagination from './Pagination';
import SelectRoute from "@/components/SelectRoute/SelectRouteContainer"
import OrderDrivers from "./OrderDrivers";
import {filterOrders} from "@/actions/ordersActions";


@connect(
    store => ({
        orders: store.ordersReducer.orders,
        show: store.viewReducer.orderModalShown,
        showDrivers: store.viewReducer.orderDriversShown,
        selectRouteShown: store.viewReducer.selectRouteShown,
        filters: store.ordersReducer.filters
    }), {filterOrders}
)
@translate('OrderList')
export default class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageOfItems: [],
            ordersFiltered: props.orders,
            checkBox1Checked: 'checked',
            checkBox2Checked: 'checked',
            checkBox3Checked: 'checked',
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    filtrate = () => {
        const {filters, orders} = this.props;
        const res = orders.filter(order => {
            const res = filters.status.find(status => status === order.status) !== undefined;
            return res
        });
        this.setState({ordersFiltered: res});
    };

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    };

    onStatusFilter = (new_status) => {
        this.changeChecked(new_status);
        const {filters} = this.props;
        let res = filters.status;
        let foundInd = res.findIndex(status => status === new_status);
        foundInd === -1 ? res.push(new_status) : res.splice(foundInd, 1);
        filterOrders({status: res});
        this.filtrate();
    };

    changeChecked = (new_status) => {
        if (new_status === 0) {
            this.setState(prevState => (
                {checkBox1Checked: prevState.checkBox1Checked === 'checked' ? '' : 'checked'})
            );
        } else if (new_status === 1) {
            this.setState(prevState => (
                {checkBox2Checked: prevState.checkBox2Checked === 'checked' ? '' : 'checked'})
            );
        } else {
            this.setState(prevState => (
                {checkBox3Checked: prevState.checkBox3Checked === 'checked' ? '' : 'checked'})
            );
        }
    };

    renderFilter = () => {
        const {onStatusFilter} = this;

        const {checkBox1Checked, checkBox2Checked, checkBox3Checked} = this.state;

        return (
            <div className="checkbox-container">
                <label className='checkboxes'>
                    Pending
                    <input onChange={() => onStatusFilter(0)} defaultChecked="true" type="checkbox" name="status"
                           checked={checkBox1Checked} value="0"/>
                    <span className="checkmark"></span>
                </label>
                <label className='checkboxes'>
                    In progress
                    <input onChange={() => onStatusFilter(1)} defaultChecked="true" type="checkbox" name="status"
                           checked={checkBox2Checked} value="1"/>
                    <span className="checkmark"></span>
                </label>
                <label className='checkboxes'>
                    Done
                    <input onChange={() => onStatusFilter(2)} defaultChecked="true" type="checkbox" name="status"
                           checked={checkBox3Checked} value="2"/>
                    <span className="checkmark"></span>
                </label>
            </div>
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
        const {orders} = this.props;
        const {ordersFiltered} = this.state;

        return (
            <Fragment>
                <div className="Filter">
                    {this.renderFilter()}
                </div>
                <div className="Table">
                    {this.renderHeader()}
                    {this.renderDevices()}
                </div>
                <Pagination items={ordersFiltered}
                            onChangePage={this.onChangePage} pageSize={5}/>
            </Fragment>

        )
    }
}
