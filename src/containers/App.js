import React, {Component, Fragment} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import cookies from 'js-cookie'

import MainMenu from '@/containers/MainMenu'
import Settings from '@/containers/Settings'
import Home from '@/components/Home/HomeContainer'
import Login from "@/components/Login";
import Loading from "@/common/Loading";
import PrivateRoute from '@/common/PrivateRoute'
import Success from "@/common/Success";
import Error from "@/common/Error";
import ChatWrap from "@/Chat/containers/ChatWrap";
import {getDriversRoutes} from "@/actions/routesActions";
import {initGoogleMaps, getGoogleMaps} from "@/util/googleMapsRequests";
import {apiReq} from "@/actions/serverActions";
import {resetChatHistory} from "@/actions/chatActions";
import constants from "@/constants";
// import Customer from '@/containers/Customer'

@withRouter
@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        success: store.viewReducer.success,
        error: store.viewReducer.error,
        orderApprove: store.orderApproveReducer,
        language: store.stringReducer.language,
        chats: store.chatReducer.chats,
    }), {getDriversRoutes, apiReq, resetChatHistory}
)

export default class App extends Component {

    componentDidMount() {
        const {getDriversRoutes, language, chats, resetChatHistory, apiReq} = this.props;
        initGoogleMaps(language);
        getDriversRoutes();


        if (!!cookies.get('token')) {
            resetChatHistory();
            chats.forEach(chat => apiReq(
                constants.messages, {limit: 10, page: 0, driverId: chat.chat_id}, undefined, {chat_id: chat.chat_id}
                )
            );
        }
    }

    render() {
        const {loadingShow, success, error} = this.props;

        return (
            <Fragment>
                <Switch>
                    <PrivateRoute exact path='/' component={MainMenu}/>
                    <PrivateRoute path='/settings/' component={Settings}/>
                    <PrivateRoute path='/home/' component={Home}/>
                    <Route path='/login/' component={Login}/>
                    {/*<Route path='/customer/' component={Customer}/>*/}
                    <PrivateRoute path={'/chat'} component={ChatWrap}/>
                </Switch>
                {loadingShow && <Loading/>}
                {!!success && <Success/>}
                {!!error && <Error/>}
            </Fragment>
        )
    }
}
