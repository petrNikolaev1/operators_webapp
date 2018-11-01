import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import connect from "react-redux/es/connect/connect";
import {getDriversRoutes} from "@/actions/routesActions";
import {initGoogleMaps, getGoogleMaps} from "@/util/googleMapsRequests";
import {apiReq} from "@/actions/serverActions";
import constants from "@/constants";


@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        loginShow: store.viewReducer.loginShow,
        language: store.stringReducer.language,
    }), {getDriversRoutes, apiReq}
)
export default class MainMenu extends Component {

    componentDidMount() {
        const {getDriversRoutes, language} = this.props;
        initGoogleMaps(language);
        getDriversRoutes();
        this.props.apiReq(constants.messages, {limit: 100, page: 0, driverId: 1}, undefined, 1)
        this.props.apiReq(constants.messages, {limit: 100, page: 0, driverId: 2}, undefined, 2)
        this.props.apiReq(constants.messages, {limit: 100, page: 0, driverId: 3}, undefined, 3)
    }

    render() {
        const {loadingShow, loginShow,} = this.props;

        return (
            <div className='main-menu-container'>
                <InfoPanel/>
                <OrderList/>
            </div>
        )
    }
}
