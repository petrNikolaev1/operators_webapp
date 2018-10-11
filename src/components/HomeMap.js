import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";
import {Marker, InfoWindow} from 'react-google-maps';

import {homes, mapNewPositions, drivers} from '@/util/fakeMarkers'
import {assignNewPositions} from "../util/fakeMarkers";

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
        assignNewPositions()
        console.log(this.state.time)


        return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={new window.google.maps.LatLng(49.622673, 6.166863)}
            >
                {homes.map((home, index) => {
                    return (
                        <Marker position={home} key={index}/>
                    )
                })}
                {drivers.map((driver, index) => {
                    return (
                        <Marker position={driver} key={index}/>
                    )
                })}
            </GoogleMap>
        )
    }
}





