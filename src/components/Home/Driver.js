import React, {Component, Fragment} from 'react';
import {Polyline, Marker} from 'react-google-maps';
import connect from "react-redux/es/connect/connect";

import {selectRoute} from "@/actions/routesActions";
import {colors, selectedColor} from '@/util/rainbow'
import MovingMarker from '@/components/Home/MovingMarker'

@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute
    }),
    {selectRoute}
)
export default class Driver extends Component {
    render() {
        const {index, driver, isSelected, handleSelectedDriver} = this.props;

        const {origin, destination, route} = driver;

        const steps = route.routes[0].legs[0].steps;
        const path = steps.reduce((res, cur) => res.concat(cur.path), []);

        return (
            <Fragment>
                {isSelected &&
                <Fragment>
                    <Marker position={origin}/>
                    <Marker position={destination}/>
                    <Polyline
                        path={path}
                        options={{
                            strokeColor: colors[index],
                            strokeOpacity: 1.0,
                            strokeWeight: 6,
                        }}
                    />
                </Fragment>}
                <MovingMarker handleSelectedDriver={handleSelectedDriver} path={path} index={index}/>
            </Fragment>
        )
    }
}

