import React, {Component, Fragment} from 'react'

import LocationSearchInput from '@/common/LocationSearchInput'
import SelectLocationMap from "@/common/SelectLocationMap";
import '@/assets/styles/SelectLocation.scss'
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";

export default class Customer extends Component {
    state = {
        locationInput: {
            stringValue: '',
            coordinatesValue: null,
        }
    };

    handleLocationInput = locationInput => {
        this.setState({locationInput: {...this.state.locationInput, ...locationInput}})
    };

    render() {
        const {locationInput} = this.state;

        return (
            <div className='select-location-container'>
                <LocationSearchInput
                    value={locationInput}
                    handleChange={this.handleLocationInput}
                    googleCallbackName={'locationSearchInputCallback'}
                    containerClass='select-location-container-input'
                />
                <SelectLocationMap
                    handleChange={this.handleLocationInput}
                    selectedPosition={!!locationInput.stringValue && locationInput.coordinatesValue}
                />
            </div>
        )
    }
}
