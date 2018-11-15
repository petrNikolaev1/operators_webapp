import React, {Component} from 'react';
import {Marker} from 'react-google-maps';

import "@/assets/styles/Marker.scss"
import {rotationAngle} from "@/util/icons";
import connect from "react-redux/es/connect/connect";
import {homeSelectDriver} from "@/actions/routesActions";

@connect(
    store => ({}),
    {homeSelectDriver}
)
export default class MovingMarker extends Component {

    render() {
        const {positionCur, positionNext, option, homeSelectDriver} = this.props;

        return (
            <Marker
                position={positionCur}
                onClick={() => homeSelectDriver(option)}
                options={{
                    icon: {
                        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 4,
                        fillColor: '#0b8592',
                        fillOpacity: 0.8,
                        strokeWeight: 2,
                        rotation: rotationAngle(positionCur, positionNext)
                    },
                }}
            />
        )
    }
}

