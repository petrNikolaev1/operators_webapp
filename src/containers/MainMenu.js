import React, {Component, Fragment} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import '@/assets/styles/MainMenu.scss'
import TopPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import fakeOrders from "@/util/fakeOrders.js"


class MainMenu extends Component {

    render() {
        const {strings} = this.props;
        return (
            <div className='main-menu-container'>
                <TopPanel/>
                <OrderList orders={fakeOrders}/>
            </div>
        )
    }
}

const
    mapStateToProps = (state) => {
        return {}
    };


const
    mapDispatchToProps = (dispatch) => {
        return {}
    };

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)