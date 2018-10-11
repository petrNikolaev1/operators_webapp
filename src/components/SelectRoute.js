import React, {Component} from 'react';

import RouteInfo from './RouteInfo'
import RouteOptions from './RouteOptions'
import "@/assets/styles/SelectRoute.scss"
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";

@connect(
    store => ({
        language: store.stringReducer.language
    }), {}
)
@showBeforeHOC('add-device-menu')
export default class SelectRoute extends Component {

    render() {
        const {origin, destination, language} = this.props;

        return (
            <div className='select-route-container'>
                <RouteInfo/>
                <RouteOptions
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`}
                    loadingElement={(<div style={{height: `100%`}}/>)}
                    containerElement={(<div className='select-route-container-map'/>)}
                    mapElement={(<div style={{height: `100%`}}/>)}
                    origin={origin} destination={destination}/>
            </div>
        )
    }
}
