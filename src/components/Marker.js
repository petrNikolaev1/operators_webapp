import React, {Component} from 'react';
import {Marker, InfoWindow} from 'react-google-maps';

import "@/assets/styles/Marker.scss"

export default class CustomMarker extends Component {

    render() {
        const {position, label, info, infoWindowOpen, openInfoWindow, closeInfoWindow, index} = this.props;

        console.log(position)
        return (
            <Marker onClick={() => openInfoWindow(index)} position={position} label={label}>
                {infoWindowOpen && <InfoWindow onCloseClick={closeInfoWindow}>
                    <div className='info'>{info}</div>
                </InfoWindow>}
            </Marker>
        )
    }
}

