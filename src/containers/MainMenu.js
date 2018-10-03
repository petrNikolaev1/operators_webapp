import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import TopPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import fakeOrders from "@/util/fakeOrders.js"

export default class MainMenu extends Component {
    render() {
        return (
            <div className='main-menu-container'>
                <TopPanel/>
                <OrderList orders={fakeOrders}/>
            </div>
        )
    }
}