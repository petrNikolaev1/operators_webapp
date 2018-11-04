import React from 'react';
import {Close} from '@material-ui/icons';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {classnames} from './helpers';
import '@/assets/styles/LocationInputSearch.scss'
import {getGoogleMaps} from "@/util/googleMapsRequests";
import {getAddress, getCoordinates} from "../util/googleMapsRequests";

export default class LocationSearchInput extends React.Component {
    componentDidMount() {
        const {googleCallbackName} = this.props;
        getGoogleMaps().then(() => {
            !!window[googleCallbackName] && window[googleCallbackName]()
        })
    }

    handleChange = stringValue => {
        this.props.handleChange({
            stringValue,
            // coordinatesValue: null,
            errorMessage: '',
        });
    };

    handleSelect = selected => {
        this.props.handleChange({stringValue: selected});

        geocodeByAddress(selected)
            .then(address => this.props.handleChange({
                coordinatesValue: address[0].geometry.location,
                stringValue: address[0].formatted_address
            }))
            .catch(error => {
                console.log('Location Search Input Error occurred while geocoding', error);
            });
    };

    handleCloseClick = () => {
        this.props.handleChange({
            stringValue: '',
            coordinatesValue: null,
        });
    };

    handleError = (status, clearSuggestions) => {
        console.log('Location Search Input Error', status);
        this.setState({errorMessage: status}, () => {
            clearSuggestions();
        });
    };

    render() {
        const {googleCallbackName, containerClass, value} = this.props;
        const {stringValue} = value;

        return (
            <PlacesAutocomplete
                onChange={this.handleChange}
                value={stringValue}
                onSelect={this.handleSelect}
                onError={this.handleError}
                shouldFetchSuggestions={stringValue.length > 2}
                highlightFirstSuggestion={true}
                googleCallbackName={googleCallbackName}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
                    return (
                        <div className={classnames("location-search-input-container", `${containerClass}`)}>
                            <div className="location-search-input-container-form">
                                <input
                                    {...getInputProps({
                                        placeholder: 'Search Places...',
                                        className: 'location-search-input-container-form-input',
                                    })}
                                />
                                {stringValue.length > 0 && (
                                    <Close
                                        className="location-search-input-container-form-close"
                                        onClick={this.handleCloseClick}
                                    />
                                )}
                            </div>
                            {suggestions.length > 0 && (
                                <div className='location-search-input-container-suggestions-container'>
                                    <div className="location-search-input-container-suggestions">
                                        {suggestions.map(suggestion => {
                                            const className = classnames('location-search-input-container-suggestions-item', {
                                                'location-search-input-container-suggestions-item-active': suggestion.active,
                                            });

                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {className})}
                                                >
                                                    <strong>
                                                        {suggestion.formattedSuggestion.mainText}
                                                    </strong>
                                                    {' '}
                                                    <small>
                                                        {suggestion.formattedSuggestion.secondaryText}
                                                    </small>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                }}
            </PlacesAutocomplete>
        );
    }
}
