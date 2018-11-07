import React, {Component} from 'react';
import {Marker} from 'react-google-maps';

import "@/assets/styles/Marker.scss"
import {rotationAngle} from "@/util/icons";
import connect from "react-redux/es/connect/connect";
import {assignTimerToDriver, homeSelectDriver} from "@/actions/routesActions";
import {DRIVER_REFRESH_RATE} from "@/constants";


@connect(
    store => ({}),
    {assignTimerToDriver, homeSelectDriver}
)
export default class MovingMarker extends Component {

    state = {
        time: 0
    };

    componentDidMount() {
        const {path, lastSeen, progress} = this.props;
        if (!!lastSeen) {
            const stepsToCut = Math.floor((Date.now() - lastSeen) / DRIVER_REFRESH_RATE);
            path.splice(0, stepsToCut - 1);
            progress.percent = progress.percent + progress.stepWeight * stepsToCut;
        }
        this.moveMarker = setInterval(() => {
                if (path.length === 0) {
                    clearInterval(this.moveMarker);
                } else {
                    progress.percent = progress.percent + progress.stepWeight;
                    path.shift();
                }
                this.setState({time: Date.now()})
            }, DRIVER_REFRESH_RATE
        )
    }

    componentWillUnmount() {
        clearInterval(this.moveMarker);

        const {index, assignTimerToDriver} = this.props;
        assignTimerToDriver({driverId: index, lastSeen: Date.now()})
    }

    render() {
        const {homeSelectDriver, index, path} = this.props;
        if (path.len < 2) {
            return null;
        }
        return (
            <Marker
                position={{lat: path[0][0], lng: path[0][1]}}
                onClick={() => homeSelectDriver({driverId: index})}
                options={{
                    icon: {
                        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 4,
                        fillColor: '#0b8592',
                        fillOpacity: 0.8,
                        strokeWeight: 2,
                        rotation: rotationAngle(path[0], path[1])
                    },
                }}
            />
        )
    }
}

