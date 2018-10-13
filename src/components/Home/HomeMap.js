import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";

import {homes, mapNewPositions, drivers} from '@/util/fakeMarkers'
import {assignNewPositions} from "../../util/fakeMarkers";
import homeIcon from '@/assets/img/home.svg'
import driverIcon from '@/assets/img/driver.svg'
import Marker from '@/components/CustomMarker'
import GoogleMapHoc from "@/hocs/GoogleMapHoc";
import connect from "react-redux/es/connect/connect";
import Driver from '@/components/Home/Driver'


@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        loginShow: store.viewReducer.loginShow,
        language: store.stringReducer.language,
        drivers: store.homeMapReducer.drivers,
    }), {}
)
@GoogleMapHoc('home-container-map')
export default class HomeMap extends Component {
    state = {
        time: 0,
        drivers: {},
        selectedDriver: -1,
    };

    static getDerivedStateFromProps(props, state) {
        const {drivers: driversNew} = props;
        const {drivers: driversOld} = state;
        if (driversNew.loaded && !driversOld.loaded) {
            return {
                drivers: driversNew
            };
        }
        return null;
    }

    handleSelectedDriver = (selectedDriver) => {
        if (this.state.selectedDriver === selectedDriver) {
            this.setState({selectedDriver: -1})
        } else {
            this.setState({selectedDriver})
        }
    };

    componentDidMount() {
        // this.interval = setInterval(() => this.setState({time: Date.now()}), 50);
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    render() {
        const {drivers, selectedDriver} = this.state;

        console.log(drivers);

        // assignNewPositions();

        return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={new window.google.maps.LatLng(49.622673, 6.166863)}
            >
                {homes.map((home, index) => {
                    return (
                        <Marker
                            position={home} info={home.info} key={index}
                        />
                    )
                })}
                {drivers.loaded && drivers.res.map((driver, index) => {
                    return (
                        <Driver
                            handleSelectedDriver={this.handleSelectedDriver}
                            isSelected={selectedDriver === index}
                            driver={driver}
                            index={index}
                            key={index}
                        />
                    )
                })}
            </GoogleMap>
        )
    }
}





