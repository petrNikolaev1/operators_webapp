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

@withRouter
@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        success: store.viewReducer.success
    }), {}
)
export default class App extends Component {
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
