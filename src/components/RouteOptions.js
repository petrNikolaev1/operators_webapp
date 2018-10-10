import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";

import Routes from './Routes'

@withScriptjs
@withGoogleMap
export default class Test extends Component {
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
                defaultZoom={7}
                defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
            >
                {!!directions && <Routes directions={directions}/>}

            </GoogleMap>
        )
    }
}




