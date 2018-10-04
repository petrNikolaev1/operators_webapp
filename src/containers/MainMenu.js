import React, {Component, Fragment} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import Login from "@/components/Login";
import connect from "react-redux/es/connect/connect";

@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        loginShow: store.viewReducer.loginShow
    }), {}
)
export default class MainMenu extends Component {
    render() {
        const {loadingShow, loginShow} = this.props;
        return (
            <div className='main-menu-container'>
                {loginShow && <Login/>}
                {!loginShow && <Fragment>
                    <InfoPanel/>
                    <OrderList/>
                </Fragment>}
            </div>
        )
    }
}