import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";


export default class MainMenu extends Component {

    render() {
        return (
            <div className='main-menu-container'>
                <InfoPanel/>
                <OrderList/>
            </div>
        )
    }
}
