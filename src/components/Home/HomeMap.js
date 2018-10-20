import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";

import {homes, mapNewPositions, drivers} from '@/util/fakeMarkers'
import homeIcon from '@/assets/img/home.svg'
import Marker from '@/components/CustomMarker'
import GoogleMapHoc from "@/hocs/GoogleMapHoc";
import connect from "react-redux/es/connect/connect";
import Driver from '@/components/Home/Driver'


@connect(
    store => ({
        drivers: store.homeMapReducer.drivers,
    }), {}
)
@GoogleMapHoc('home-map')
export default class HomeMap extends Component {
    state = {
        time: 0,
    };

    render() {
        const {selectedDriver} = this.state;
        const {drivers} = this.props;
        console.log('HOME MAP RENDER', drivers);

        return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={{lat: 0, lng: 0}}
            >
                {homes.map((home, index) => {
                    return (
                        <Marker
                            position={home} info={home.info} key={index}
                        />
                    )
                })}
                {drivers.loaded && drivers.res.map((driver, index) => {
                    return (
                        <Driver
                            driver={driver}
                            index={index}
                            key={index}
                        />
                    )
                })}
            </GoogleMap>
        )
    }
}





