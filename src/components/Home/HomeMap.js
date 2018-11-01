import React, {Component} from 'react';
import {GoogleMap,} from "react-google-maps";

import {homes, mapNewPositions, drivers} from '@/util/fakeMarkers'
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
    render() {
        const {drivers} = this.props;

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





