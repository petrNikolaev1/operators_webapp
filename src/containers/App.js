import React, {Component, Fragment} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

import MainMenu from '@/containers/MainMenu'
import Settings from '@/containers/Settings'
import Home from '@/components/Home/HomeContainer'
import Login from "@/components/Login";
import Loading from "@/common/Loading";
import PrivateRoute from '@/common/PrivateRoute'
import Success from "@/common/Success";
import Error from "@/common/Error";
import ChatWrap from "@/Chat/containers/ChatWrap";
import {apiReq} from "@/actions/serverActions";
import constants from "@/constants";

@withRouter
@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        success: store.viewReducer.success,
        error: store.viewReducer.error,
        orderApprove: store.orderApproveReducer,
    }), {apiReq}
)
export default class App extends Component {
    componentDidMount() {
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
                    <PrivateRoute path={'/chat'} component={ChatWrap}/>
                </Switch>
                {loadingShow && <Loading/>}
                {!!success && <Success/>}
                {!!error && <Error/>}
            </Fragment>
        )
    }
}
