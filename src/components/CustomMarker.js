import React, {Component} from 'react';
import {Marker, InfoWindow} from 'react-google-maps';

import "@/assets/styles/Marker.scss"

export default class CustomMarker extends Component {
    state = {
        infoWindowOpened: false,
    };

    openInfoWindow = () => {
        if (this.state.infoWindowOpened) {
            return this.closeInfoWindow()
        }
        this.setState({infoWindowOpened: true})
    };

    closeInfoWindow = () => {
        this.setState({infoWindowOpened: false})
    };


    render() {
        const {infoWindowOpened} = this.state;
        const {position, info, icon} = this.props;

        return (
            <Marker onClick={this.openInfoWindow} position={position} icon={icon}>
                {infoWindowOpened && <InfoWindow onCloseClick={this.closeInfoWindow}>
                    <div className='info'>{info}</div>
                </InfoWindow>}
            </Marker>
        )
    }
}

