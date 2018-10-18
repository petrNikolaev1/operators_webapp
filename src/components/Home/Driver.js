import React, {Component, Fragment} from 'react';
import {Polyline, Marker} from 'react-google-maps';
import connect from "react-redux/es/connect/connect";

import {selectRoute} from "@/actions/routesActions";
import {colors, selectedColor} from '@/util/rainbow'
import MovingMarker from '@/components/Home/MovingMarker'

@connect(
    store => ({
        selectedDriver: store.homeMapReducer.drivers.selectedDriver,
    }),
    {selectRoute}
)
export default class Driver extends Component {
    render() {
        const {index, driver, isSelected, handleSelectedDriver, selectedDriver} = this.props;

        const {origin, destination, path, pathOriginal, lastSeen,} = driver;
        const selected = !!selectedDriver && selectedDriver.value === index;
        console.log('DRIVER RENDER', selectedDriver)
        return (
            <Fragment>
                {selected &&
                <Fragment>
                    <Marker position={origin}/>
                    <Marker position={destination}/>
                    <Polyline
                        path={pathOriginal}
                        options={{
                            strokeColor: colors[index],
                            strokeOpacity: 1.0,
                            strokeWeight: 6,
                        }}
                    />
                </Fragment>}
                <MovingMarker path={path} lastSeen={lastSeen}
                              index={index}/>
            </Fragment>
        )
    }
}

