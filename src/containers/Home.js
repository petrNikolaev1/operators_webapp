import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import HomeMap from '@/components/HomeMap'
import '@/assets/styles/Home.scss'
import RouteOptions from "../components/RouteOptions";
import connect from "react-redux/es/connect/connect";
import {Reply} from '@material-ui/icons';


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
                <div className='title'>
                    <h1>
                        Tracking Menu
                    </h1>
                    <Link to="/" className='home-container-back'>
                        <Reply/>
                        Back to main screen
                    </Link>
                </div>
                <HomeMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`}
                    loadingElement={(<div style={{height: `100%`}}/>)}
                    containerElement={(<div className='home-container-map'/>)}
                    mapElement={(<div style={{height: `100%`}}/>)}
                />

            </div>
        )
    }
}
