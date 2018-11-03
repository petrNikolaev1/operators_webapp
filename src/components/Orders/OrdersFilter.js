import React, {Component} from 'react';
import {connect} from 'react-redux';

import translate from '@/hocs/Translate'
import {filterOrders} from "@/actions/ordersActions";
import Checklist from "@/common/Checklist";
import '@/assets/styles/OrdersFilter.scss';

@connect(
    store => ({
        filters: store.ordersReducer.filters
    }), {filterOrders}
)
@translate('OrderList')
export default class OrderList extends Component {
    state = {
        options: {
            value: [
                {value: 'apple', selected: false},
                {value: 'orange', selected: false},
                {value: 'banana', selected: false}
            ]
        }
    };

    handleOptions = optionsNew => {
        console.log(optionsNew)
        this.setState({options: optionsNew})
    };

    render() {
        const {options} = this.state;

        console.log('RENDER', options)

        return (
            <div className='orders-filter-container'>
                <Checklist value={options} formClass='checklist-horizontal' handleChange={this.handleOptions}/>
            </div>
        )
    }
}
