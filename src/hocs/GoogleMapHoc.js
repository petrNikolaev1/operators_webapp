import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";
import connect from "react-redux/es/connect/connect";
import Loading from '@/common/Loading'

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
            return (
                <GoogleMapWrappedLower
                    {...this.props}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`}
                    // loadingElement={(<div style={{height: `100%`}}/>)}
                    loadingElement={(<Loading/>)}
                    containerElement={(<div className='select-route-container-map'/>)}
                    mapElement={(<div style={{height: `100%`}}/>)}
                />
            )
        }
    }

    return GoogleMapWrappedHigher
}




