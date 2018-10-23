import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import connect from "react-redux/es/connect/connect";
import {getDriversRoutes} from "@/actions/routesActions";
import {initGoogleMaps, getGoogleMaps} from "@/util/googleMapsRequests";


@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        loginShow: store.viewReducer.loginShow,
        language: store.stringReducer.language,
    }), {getDriversRoutes}
)
export default class MainMenu extends Component {

    componentDidMount() {
        const {getDriversRoutes, language} = this.props;
        initGoogleMaps(language);
        getDriversRoutes();
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
