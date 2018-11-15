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
        vehicles: store.vehiclesReducer,
    }), {}
)
@GoogleMapHoc('home-map')
export default class HomeMap extends Component {
    render() {
        const {vehicles} = this.props;

        const loaded = vehicles.loaded && vehicles.routesLoaded && !!vehicles.res;
        if (loaded) {
            var vehiclesWithTasks = vehicles.res
                .filter(vehicle => !!vehicle.task);
        }


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
                {loaded && !!vehiclesWithTasks && vehiclesWithTasks
                    .map((vehicle, index) => {
                        return (
                            <Driver
                                {...vehicle}
                                index={index}
                                key={index}
                            />
                        )
                    })}
            </GoogleMap>
        )
    }
}





