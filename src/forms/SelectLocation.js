import React, {Component} from 'react'

import LocationSearchInput from '@/forms/LocationSearchInput'
import SelectLocationMap from "@/forms/SelectLocationMap";
import '@/assets/styles/SelectLocation.scss'

export default class Customer extends Component {

    handleLocationInput = locationInput => {
        this.props.handleChange(locationInput)
    };

    render() {
        const {stringValue, coordinatesValue} = this.props;
        return (
            <div className='select-location-container'>
                <LocationSearchInput
                    {...this.props}
                    handleChange={this.handleLocationInput}
                    googleCallbackName={'locationSearchInputCallback'}
                    containerClass='select-location-container-input'
                />
                <SelectLocationMap
                    handleChange={this.handleLocationInput}
                    selectedPosition={!!stringValue && coordinatesValue}
                />
            </div>
        )
    }
}
