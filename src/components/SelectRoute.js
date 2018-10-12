import React, {Component} from 'react';
import classNames from "classnames";

import Routes from '@/components/Routes'
import {getRoute} from "@/util/mapsRequests";
import RouteInfo from '@/components/RouteInfo'
import "@/assets/styles/SelectRoute.scss"
import showBeforeHOC from "@/hocs/showBeforeHOC";

@showBeforeHOC('select-route')
export default class SelectRoute extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'select-route-container')}>
                <RouteInfo/>
                <Routes {...this.props}/>
            </div>
        )
    }
}
