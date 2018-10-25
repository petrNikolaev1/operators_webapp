import React, {Component, Fragment} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

import MainMenu from '@/containers/MainMenu'
import Settings from '@/containers/Settings'
import Home from '@/components/Home/HomeContainer'
import Login from "@/components/Login";
import Loading from "@/common/Loading";
import PrivateRoute from '@/common/PrivateRoute'
import Success from "@/common/Success";
import {apiReq} from "@/actions/serverActions";
import constants from "@/constants";

@withRouter
@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        success: store.viewReducer.success,
        orderApprove: store.orderApproveReducer,
    }), {apiReq}
)
export default class App extends Component {

    componentDidUpdate(prevProps, prevState) {
        const {orderApprove: orderApproveOld} = prevProps;
        const {orderApprove: orderApproveNew, apiReq} = this.props;

        if (!orderApproveOld.loaded && orderApproveNew.loaded) {
            apiReq(constants.orders, {limit: 1000, offset: 0})
        }

    }


    render() {
        const {loadingShow, success} = this.props;

        return (
            <Fragment>
                <Switch>
                    <PrivateRoute exact path='/' component={MainMenu}/>
                    <PrivateRoute path='/settings/' component={Settings}/>
                    <PrivateRoute path='/home/' component={Home}/>
                    <Route path='/login/' component={Login}/>
                </Switch>
                {!!success && <Success/>}
                {loadingShow && <Loading/>}
            </Fragment>
        )
    }

}
