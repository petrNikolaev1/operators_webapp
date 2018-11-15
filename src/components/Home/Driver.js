import React, {Component, Fragment} from 'react';
import {Polyline, Marker} from 'react-google-maps';
import connect from "react-redux/es/connect/connect";

import {selectRoute} from "@/actions/routesActions";
import {colors, selectedColor} from '@/util/rainbow'
import MovingMarker from '@/components/Home/MovingMarker'
import {getEnd, getStart} from "@/util/googleMapsRequests";

@connect(
    store => ({
        selectedDriver: store.homeMapReducer.selectedDriver,
    }),
    {selectRoute}
)
export default class Driver extends Component {
    render() {
        const {index, driver, selectedDriver, task, drivers} = this.props;
        const {path, stepId, order} = task;

        const selected = !!selectedDriver && drivers[0].id === selectedDriver.value;

        return (
            <Fragment>
                {selected &&
                <Fragment>
                    <Marker position={getStart(order)}/>
                    <Marker position={getEnd(order)}/>
                    <Polyline
                        path={path}
                        options={{
                            strokeColor: colors[index],
                            strokeOpacity: 1.0,
                            strokeWeight: 6,
                        }}
                    />
                </Fragment>}
                <MovingMarker
                    option={{value: drivers[0].id, label: drivers[0].name}}
                    positionCur={path[stepId - 1]}
                    positionNext={stepId - 1 < path.length - 1 ? path[stepId] : path[stepId - 1]}
                />
            </Fragment>
        )
    }
}

