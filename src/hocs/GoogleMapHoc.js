import React, {Component} from 'react';
import {withGoogleMap} from "react-google-maps";

import Loading from '@/common/Loading'
import {getGoogleMaps, initGoogleMaps} from "@/util/googleMapsRequests";
import connect from "react-redux/es/connect/connect";

export default (mapClassName) => (ChildComponent) => {

    class Sample extends Component {
        render() {
            return (
                <Loading
                    {...this.props}
                />
            )
        }
    }


    @withGoogleMap
    class GoogleMapWrappedLower extends Component {
        render() {
            return (
                <ChildComponent
                    {...this.props}
                />
            )
        }
    }


    @connect(
        store => ({
            language: store.stringReducer.language,
        }), {}
    )
    class GoogleMapWrappedHigher extends Component {
        state = {googleMapsLoaded: false};

        componentDidMount() {
            const {language} = this.props;
            if (!window.google) initGoogleMaps(language);
            getGoogleMaps()
                .then(() => this.setState({googleMapsLoaded: true}))
        }

        renderGoogleMaps = () => {
            return (
                <GoogleMapWrappedLower
                    {...this.props}
                    loadingElement={(<Loading/>)}
                    containerElement={(<div className={mapClassName}/>)}
                    mapElement={(<div style={{height: `100%`}}/>)}
                />
            )
        };

        renderLoading = () => {
            return (
                <Loading/>
            )
        };

        render() {
            const {googleMapsLoaded} = this.state;

            return googleMapsLoaded ? this.renderGoogleMaps() : this.renderLoading();
        }
    }

    // return Sample


    return GoogleMapWrappedHigher
}
