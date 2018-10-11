import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";

import {homes, mapNewPositions, drivers} from '@/util/fakeMarkers'
import {assignNewPositions} from "../util/fakeMarkers";
import homeIcon from '@/assets/img/home.svg'
import driverIcon from '@/assets/img/driver.svg'
import Marker from '@/components/CustomMarker'

@withScriptjs
@withGoogleMap
export default class HomeMap extends Component {
    state = {
        time: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({time: Date.now()}), 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        assignNewPositions();

        return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={new window.google.maps.LatLng(49.622673, 6.166863)}
            >
                {homes.map((home, index) => {
                    return (
                        <Marker
                            position={home} info={home.info} key={index}
                        />
                    )
                })}
                {drivers.map((driver, index) => {
                    return (
                        <Marker
                            position={driver} info={driver.info} key={index} icon={driverIcon}
                        />
                    )
                })}
            </GoogleMap>
        )
    }
}





