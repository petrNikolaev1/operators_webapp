import React, {Component} from 'react'

import {GoogleMap, Marker} from "react-google-maps";
import GoogleMapHoc from "@/hocs/GoogleMapHoc";
import '@/assets/styles/SelectLocation.scss'
import {getAddress} from "@/util/googleMapsRequests";

const defaultCenter = {lat: 0, lng: 0};
const defaultZoom = 2;

@GoogleMapHoc('select-location-container-map-container', 'select-location-container-map')
export default class SelectLocationMap extends Component {
    state = {
        dragging: false,
    };

    setMarker = e => {
        getAddress(e.latLng)
            .then(address => this.props.handleChange({
                coordinatesValue: address.geometry.location,
                stringValue: address.formatted_address
            }))
    };

    setDragging = () => {
        this.setState({dragging: true})
    };

    resetDragging = () => {
        this.setState({dragging: false})
    };

    setCursor = (type) => {
        setTimeout(() => {
            const node = document.querySelector('.gm-style:first-of-type > div:first-child');
            if (!node) return;
            node.style.cursor = type
        }, 100);
    };

    render() {
        const {dragging} = this.state;
        if (dragging) {
            this.setCursor('grabbing')
        } else {
            this.setCursor('pointer')
        }
        const {selectedPosition} = this.props;

        return (
            <GoogleMap
                zoom={selectedPosition ? 16 : defaultZoom}
                center={selectedPosition || defaultCenter}
                onClick={this.setMarker}
                defaultCursor={'pointer'}
                defaultDraggable={false}
                onDrag={() => console.log('drag')}
                onDragStart={this.setDragging}
                onDragEnd={this.resetDragging}
            >
                {!!selectedPosition &&
                <Marker
                    position={selectedPosition}
                />}
            </GoogleMap>
        )
    }
}
