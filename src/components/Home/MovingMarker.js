import React, {Component} from 'react';
import {Marker} from 'react-google-maps';

import "@/assets/styles/Marker.scss"
import {rotationAngle} from "@/util/icons";

export default class MovingMarker extends Component {

    state = {
        time: 0
    };

    componentDidMount() {
        const {path} = this.props;
        console.log('props', this.props)
        this.path = path;
        this.moveMarker = setInterval(() => {
                if (this.path.length === 0) {
                    clearInterval(this.moveMarker);
                } else {
                    this.path.shift();
                }
                this.setState({time: Date.now()})
            }, 30
        )
    }

    componentWillUnmount() {
        clearInterval(this.moveMarker);
    }

    render() {
        console.log('MOVING MARKER RENDER')
        if (!this.path) return null;
        const {handleSelectedDriver, index} = this.props;
        // console.log(this.path[0])
        return (
            <Marker
                position={{lat: this.path[0][0], lng: this.path[0][1]}}
                onClick={() => handleSelectedDriver(index)}
                options={{
                    icon: {
                        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 4,
                        fillColor: '#0b8592',
                        fillOpacity: 0.8,
                        strokeWeight: 2,
                        rotation: !!this.path[1] ? rotationAngle(this.path[0], this.path[1]) : 0
                    },
                }}
            />
        )
    }
}

