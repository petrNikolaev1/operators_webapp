import React, {Component} from 'react';
import {connect} from 'react-redux';

import translate from '@/hocs/Translate'
import Checklist from "@/common/Checklist";
import '@/assets/styles/OrdersFilter.scss';
import {handleStatusFilters} from '@/actions/ordersActions'

@connect(
    store => ({
        filters: store.ordersReducer.filters
    }), {handleStatusFilters}
)
@translate('OrdersFilters')
export default class OrderList extends Component {

    render() {
        const {filters, handleStatusFilters, strings} = this.props;
        const {statusFilters} = filters;

        return (
            <div className='orders-filter-container'>
                <Checklist
                    strings={strings}
                    value={statusFilters}
                    handleChange={handleStatusFilters}
                    formClass='checklist-horizontal'
                />
            </div>
        )
    }
}
