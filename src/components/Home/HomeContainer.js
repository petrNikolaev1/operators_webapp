import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import HomeMap from '@/components/Home/HomeMap'
import '@/assets/styles/Home.scss'
import GoogleMapHoc from "../../hocs/GoogleMapHoc";
import connect from "react-redux/es/connect/connect";
import {Reply} from '@material-ui/icons';


@connect(
    store => ({
        language: store.stringReducer.language,
        drivers: store.homeMapReducer.drivers,
    }), {}
)
export default class HomeContainer extends Component {
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
                <HomeMap/>
            </div>
        )
    }
}
