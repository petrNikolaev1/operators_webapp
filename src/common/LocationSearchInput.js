import React from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {classnames} from './helpers';
import '@/assets/styles/LocationInputSearch.scss'
import {getGoogleMaps} from "@/util/googleMapsRequests";

export default class LocationSearchInput extends React.Component {
    state = {
        address: '',
        errorMessage: '',
        latitude: null,
        longitude: null,
        isGeocoding: false,
    };

    componentDidMount() {
        const {googleCallbackName} = this.props;
        getGoogleMaps().then(() => {
            !!window[googleCallbackName] && window[googleCallbackName]()
        })
    }

    handleChange = address => {
        this.setState({
            address,
            latitude: null,
            longitude: null,
            errorMessage: '',
        });
    };

    handleSelect = selected => {
        this.setState({isGeocoding: true, address: selected});
        geocodeByAddress(selected)
            .then(res => getLatLng(res[0]))
            .then(({lat, lng}) => {
                this.setState({
                    latitude: lat,
                    longitude: lng,
                    isGeocoding: false,
                });
            })
            .catch(error => {
                this.setState({isGeocoding: false});
                console.log('error', error);
            });
    };

    handleCloseClick = () => {
        this.setState({
            address: '',
            latitude: null,
            longitude: null,
        });
    };

    handleError = (status, clearSuggestions) => {
        console.log('Error from Google Maps API', status);
        this.setState({errorMessage: status}, () => {
            clearSuggestions();
        });
    };

    render() {
        const {googleCallbackName} = this.props;
        const {address, latitude, longitude, isGeocoding,} = this.state;

        return (
            <div>
                <PlacesAutocomplete
                    onChange={this.handleChange}
                    value={address}
                    onSelect={this.handleSelect}
                    onError={this.handleError}
                    shouldFetchSuggestions={address.length > 2}
                    highlightFirstSuggestion={true}
                    googleCallbackName={googleCallbackName}
                >
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
                        return (
                            <div className="Demo__search-bar-container">
                                <div className="Demo__search-input-container">
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Search Places...',
                                            className: 'Demo__search-input',
                                        })}
                                    />
                                    {this.state.address.length > 0 && (
                                        <button
                                            className="Demo__clear-button"
                                            onClick={this.handleCloseClick}
                                        >
                                            x
                                        </button>
                                    )}
                                </div>
                                {suggestions.length > 0 && (
                                    <div className="Demo__autocomplete-container">
                                        {suggestions.map(suggestion => {
                                            const className = classnames('Demo__suggestion-item', {
                                                'Demo__suggestion-item--active': suggestion.active,
                                            });

                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {className})}
                                                >
                                                    <strong>
                                                        {suggestion.formattedSuggestion.mainText}
                                                    </strong>{' '}
                                                    <small>
                                                        {suggestion.formattedSuggestion.secondaryText}
                                                    </small>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }}
                </PlacesAutocomplete>

                {((latitude && longitude) || isGeocoding) && (
                    <div>
                        <h3 className="Demo__geocode-result-header">Geocode result</h3>
                        {isGeocoding ? <div>Loading</div> :
                            <div>
                                <div className="Demo__geocode-result-item--lat">
                                    <label>Latitude:</label>
                                    <span>{latitude}</span>
                                </div>
                                <div className="Demo__geocode-result-item--lng">
                                    <label>Longitude:</label>
                                    <span>{longitude}</span>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
        );
    }
}
