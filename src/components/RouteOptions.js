import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";

import Routes from './Routes'

@withScriptjs
@withGoogleMap
export default class RouteOptions extends Component {
    state = {
        directions: null
    };

    componentDidMount() {
        const {origin, destination} = this.props;
        const DirectionsService = new window.google.maps.DirectionsService();
        DirectionsService.route({
            origin: new window.google.maps.LatLng(origin.lat, origin.lng),
            destination: new window.google.maps.LatLng(destination.lat, destination.lng),
            travelMode: window.google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }

    render() {
        const {directions} = this.state;
        return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={new window.google.maps.LatLng(49.622673, 6.166863)}
            >
                {!!directions && <Routes directions={directions}/>}
            </GoogleMap>
        )
    }
}




