import React, {Component, Fragment} from 'react';
import _ from 'lodash';
import Route from './Route'
import Marker from './Marker'
import connect from "react-redux/es/connect/connect";

import {selectRoute, resetRoute} from "../actions/routesActions";

@connect(
    store => ({}), {selectRoute}
)
export default class Routes extends Component {

    state = {
        infoWindowOpen: -1
    };

    componentDidMount() {
        const {directions, selectRoute} = this.props;
        const data = directions.routes[0].legs[0]
        selectRoute({...data, id: 0})
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

        return (
            <Fragment>
                {directions && directions.routes.map((route, index) => {
                        const data = route.legs[0];
                        const path = data.steps.reduce((sum, current) => _.concat(sum, current.path), []);
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
                <Marker infoWindowOpen={infoWindowOpen === 0} index={0} position={data_first.start_location} label='A'
                        info={startAddress} closeInfoWindow={this.closeInfoWindow}
                        openInfoWindow={this.openInfoWindow}/>

                <Marker infoWindowOpen={infoWindowOpen === 1} index={1} position={data_first.end_location} label='B'
                        info={endAddress} closeInfoWindow={this.closeInfoWindow}
                        openInfoWindow={this.openInfoWindow}/>
            </Fragment>
        )
    }
}

