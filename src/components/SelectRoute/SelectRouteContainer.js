import React, {Component} from 'react';
import classNames from "classnames";

import AlternativeRoutes from '@/components/SelectRoute/AlternativeRoutes'
import AlternativeRouteInfo from '@/components/SelectRoute/AlternativeRouteInfo'
import "@/assets/styles/SelectRoute.scss"
import showBeforeHOC from "@/hocs/showBeforeHOC";

@showBeforeHOC('select-route')
export default class SelectRoute extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'select-route-container')}>
                <AlternativeRouteInfo {...this.props}/>
                <AlternativeRoutes {...this.props}/>
            </div>
        )
    }
}
