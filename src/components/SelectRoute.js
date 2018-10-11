import React, {Component} from 'react';
import {GoogleMap,} from "react-google-maps";
import connect from "react-redux/es/connect/connect";

import Routes from '@/components/Routes'
import {getRoute} from "@/util/mapsRequests";
import {getProposedRoute} from "@/actions/routesActions";
import RouteInfo from '@/components/RouteInfo'
import "@/assets/styles/SelectRoute.scss"
import showBeforeHOC from "@/hocs/showBeforeHOC";
import GoogleMapHoc from "@/hocs/GoogleMapHoc"
import classNames from "classnames";

@connect(
    store => ({
        language: store.stringReducer.language,
        proposedRoutes: store.proposedRouteReducer.proposedRoutes
    }), {getProposedRoute}
)
@showBeforeHOC('select-route')
@GoogleMapHoc
export default class SelectRoute extends Component {
    componentDidMount() {
        const {origin, destination, getProposedRoute, orderId} = this.props;

        getProposedRoute(window.google, {origin, destination, orderId});
    }

    render() {
        const {origin, destination, language, orderId, proposedRoutes,} = this.props;

        const proposedRoute = proposedRoutes[orderId];
        console.log(proposedRoute);

        return (
            <div className={classNames(this.props.className, 'select-route-container')}>
                <RouteInfo/>
                <GoogleMap
                    defaultZoom={2}
                    defaultCenter={new window.google.maps.LatLng(49.622673, 6.166863)}
                >
                    {!!proposedRoute && proposedRoute.loaded && !!proposedRoute.res &&
                    <Routes directions={proposedRoute.res}/>}
                </GoogleMap>
            </div>
        )
    }
}
