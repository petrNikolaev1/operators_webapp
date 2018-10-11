import React, {Component, Fragment} from 'react';
import _ from 'lodash';
import Route from './Route'
import CustomMarker from './Marker'
import {Marker, InfoWindow} from 'react-google-maps';
import connect from "react-redux/es/connect/connect";

import {setAnimatedRoute, startRouteAnimation, testPosition} from './b'
import {selectRoute, resetRoute} from "../actions/routesActions";

@connect(
    store => ({}), {selectRoute}
)
export default class Routes extends Component {

    state = {
        infoWindowOpen: -1,
        time: 0,
    };

    componentDidMount() {
        const {directions, selectRoute} = this.props;
        const data = directions.routes[0].legs[0];
        selectRoute({...data, id: 0})


        const start = Date.now();
        // setAnimatedRoute(directions.routes[0].legs[0]);
        console.log(Date.now() - start);
        console.log('LETS START!!!!')
        // startRouteAnimation(this.testMarker, () => this.setState({time: Date.now()}))
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    closeInfoWindow = () => {
        this.setState({infoWindowOpen: -1})
    };

    openInfoWindow = (infoWindowOpen) => {
        if (infoWindowOpen === this.state.infoWindowOpen) {
            this.setState({infoWindowOpen: -1})
        } else {
            this.setState({infoWindowOpen})
        }
    };

    render() {
        const {infoWindowOpen} = this.state;
        const {directions} = this.props;
        const data_first = directions.routes[0].legs[0];
        const startAddress = directions.routes[0].legs[0].start_address;
        const endAddress = directions.routes[0].legs[0].end_address;

        const testPosition2 = data_first.steps[8].start_point;
        console.log(data_first)

        console.log('test', directions)

        return (
            <Fragment>
                {directions && directions.routes.map((route, index) => {
                        // console.log('---------------------------')
                        // console.log(route)
                        // console.log('---------------------------')

                        const data = route.legs[0];
                        const path = data.steps.reduce((res, current) => res.concat(current.path), []);
                        return (
                            <Route
                                data={data}
                                key={index}
                                path={path}
                                index={index}
                                onClick={this.selectRoute}
                            />)
                    }
                )
                }
                <CustomMarker infoWindowOpen={infoWindowOpen === 0} index={0} position={data_first.start_location}
                              label='A'
                              info={startAddress} closeInfoWindow={this.closeInfoWindow}
                              openInfoWindow={this.openInfoWindow}/>

                <CustomMarker infoWindowOpen={infoWindowOpen === 1} index={1} position={data_first.end_location}
                              label='B'
                              info={endAddress} closeInfoWindow={this.closeInfoWindow}
                              openInfoWindow={this.openInfoWindow}/>
                <Marker ref={marker => this.testMarker = marker} position={testPosition}/>
            </Fragment>
        )
    }
}

