import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";
import connect from "react-redux/es/connect/connect";

export default (ChildComponent) => {

    @withScriptjs
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
            language: store.stringReducer.language
        }), {}
    )
    class GoogleMapWrappedHigher extends Component {
        render() {
            const {language} = this.props;
            console.log('language', language)
            return (
                <GoogleMapWrappedLower
                    {...this.props}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`}
                    loadingElement={(<div style={{height: `100%`}}/>)}
                    // containerElement={(<div className='select-route-container-map'/>)}
                    containerElement={(<div style={{height: `400px`, width: '400px'}}/>)}
                    mapElement={(<div style={{height: `400px`, width: '400px'}}/>)}
                />
            )
        }
    }

    return GoogleMapWrappedHigher
}




