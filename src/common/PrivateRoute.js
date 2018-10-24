import React, {Component, Fragment} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";


@connect(store => ({
        login: store.loginReducer
    }),
    {}
)
export default class PrivateRoute extends Component {
    render() {
        const {login, component: Component} = this.props;
        return (
            <Route
                render={props =>
                    !!login.res ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login/",
                                state: {from: props.location}
                            }}
                        />
                    )
                }
            />
        )
    }
}