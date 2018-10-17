import React, {Component, Fragment} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import Login from "@/components/Login";
import connect from "react-redux/es/connect/connect";
import Loading from "@/common/Loading";
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
        getDriversRoutes()
    }

    render() {
        const {loadingShow, loginShow,} = this.props;

        return (
            <Fragment>
                {loginShow && <Login/>}
                {!loginShow && <div className='main-menu-container'>
                    <InfoPanel/>
                    <OrderList/>
                </div>}
                {loadingShow && <Loading/>}
            </Fragment>
        )
    }
}
