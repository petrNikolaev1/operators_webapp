import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import TopPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import Login from "@/components/Login";
import fakeOrders from "@/util/fakeOrders.js"

export default class MainMenu extends Component {
    render() {
        return (
            <div className='main-menu-container'>
                <Login/>
            </div>
        )
    }
}