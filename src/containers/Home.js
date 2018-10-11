import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import HomeMap from '@/components/HomeMap'
import '@/assets/styles/Home.scss'
import RouteOptions from "../components/RouteOptions";
import connect from "react-redux/es/connect/connect";


@connect(
    store => ({
        language: store.stringReducer.language
    }), {}
)
export default class Home extends Component {
    render() {
        const {language} = this.props;

        return (
            <div className='home-container'>
                <h1>
                    Home
                </h1>
                <HomeMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`}
                    loadingElement={(<div style={{height: `100%`}}/>)}
                    containerElement={(<div className='home-container-map'/>)}
                    mapElement={(<div style={{height: `100%`}}/>)}
                />
                <Link to="/">
                    <button>Back to main screen</button>
                </Link>
            </div>
        )
    }
}
