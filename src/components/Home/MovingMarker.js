import React, {Component} from 'react';
import {Marker} from 'react-google-maps';

import "@/assets/styles/Marker.scss"
import driverIcon from '@/assets/img/driver.svg'
import {IconRotator, rotationAngle} from "@/util/icons";

export default class MovingMarker extends Component {

    state = {
        time: 0
    };

    componentDidMount() {
        const {path} = this.props;
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
        if (!this.path) return null;

        const {handleSelectedDriver, index} = this.props;

        return (
            <Marker
                position={this.path[0]}
                onClick={() => handleSelectedDriver(index)}
                // options={{
                //     icon: {
                //         url: IconRotator
                //             .makeIcon(driverIcon)
                //             .setRotation({deg: rotationAngle(this.path[0], this.path[1])})
                //             .getUrl()
                //     },
                // style={{backgroundColor:'#ccc',transform: [{rotate: '50deg'}],}}
                // }}
                options={{
                    icon: {
                        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 6,
                        fillColor: 'red',
                        fillOpacity: 0.8,
                        strokeWeight: 2,
                        rotation: rotationAngle(this.path[0], this.path[1])
                    },
                }}
            />
        )
    }
}

