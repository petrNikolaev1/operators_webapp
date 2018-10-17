import React, {Component, Fragment} from 'react';
import {GoogleMap} from 'react-google-maps';
import connect from "react-redux/es/connect/connect";

import Route from '@/components/SelectRoute/Route'
import CustomMarker from '@/components/SelectRoute/Marker'
import GoogleMapHoc from "@/hocs/GoogleMapHoc"
import {getProposedRoute} from "@/actions/routesActions";
import {selectRoute, resetRoute} from "../../actions/routesActions";

@connect(
    store => ({
        proposedRoutes: store.proposedRouteReducer.proposedRoutes
    }),
    {
        selectRoute,
        getProposedRoute
    }
)
@GoogleMapHoc('select-route-container-map')
export default class AlternativeRoutes extends Component {

    state = {
        infoWindowOpen: -1,
    };

    proposedRouteValid = (proposedRoutes) => {
        const {orderId} = this.props;
        const proposedRoute = this.getProposedRoute(proposedRoutes);
        return !!proposedRoute && proposedRoute.loaded && !!proposedRoute
    };

    getProposedRoute = (proposedRoutes) => {
        const {orderId} = this.props;
        return proposedRoutes[orderId]
    };

    componentDidUpdate(prevProps, prevState) {
        const {proposedRoutes: proposedRoutesOld} = prevProps;
        const {proposedRoutes: proposedRoutesNew, selectRoute} = this.props;

        if (!this.proposedRouteValid(proposedRoutesOld) && this.proposedRouteValid(proposedRoutesNew)) {
            selectRoute({...this.getProposedRoute(proposedRoutesNew).res.routes[0].legs[0], id: 0})
        }
    }

    componentDidMount() {
        const {origin, destination, getProposedRoute, orderId} = this.props;

        getProposedRoute({origin, destination, orderId});
    }

    closeInfoWindow = () => {
        this.setState({infoWindowOpen: -1})
    };

    openInfoWindow = (infoWindowOpen) => {
        if (infoWindowOpen === this.state.infoWindowOpen) {
            this.setState({infoWindowOpen: -1})
        } else {
            this.setState({infoWindowOpen})
        }
    };

    render() {
        const {infoWindowOpen} = this.state;
        const {proposedRoutes} = this.props;

        console.log(proposedRoutes)

        const proposedRouteValid = this.proposedRouteValid(proposedRoutes);

        if (proposedRouteValid) {
            var proposedRoute = this.getProposedRoute(proposedRoutes).res;
            console.log('proposed', proposedRoute)
            var data_first = proposedRoute.routes[0].legs[0];
            var startAddress = proposedRoute.routes[0].legs[0].start_address;
            var endAddress = proposedRoute.routes[0].legs[0].end_address;
        }

        return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={new window.google.maps.LatLng(49.622673, 6.166863)}
            >
                {proposedRouteValid &&
                <Fragment>
                    {proposedRoute.routes.map((route, index) => {
                            const data = route.legs[0];
                            const path = data.steps.reduce((res, current) => res.concat(current.path), []);
                            return (
                                <Route
                                    data={data}
                                    key={index}
                                    path={path}
                                    index={index}
                                    onClick={this.selectRoute}
                                />)
                        }
                    )
                    }
                    <CustomMarker infoWindowOpen={infoWindowOpen === 0} index={0} position={data_first.start_location}
                                  label='A'
                                  info={startAddress} closeInfoWindow={this.closeInfoWindow}
                                  openInfoWindow={this.openInfoWindow}/>

                    <CustomMarker infoWindowOpen={infoWindowOpen === 1} index={1} position={data_first.end_location}
                                  label='B'
                                  info={endAddress} closeInfoWindow={this.closeInfoWindow}
                                  openInfoWindow={this.openInfoWindow}/>
                </Fragment>}
            </GoogleMap>
        )
    }
}

