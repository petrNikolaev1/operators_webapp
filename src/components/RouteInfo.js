import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import "@/assets/styles/SelectRoute.scss"


@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute
    }), {}
)

export default class RouteInfo extends Component {

    render() {
        const {selectedRoute} = this.props;
        console.log(selectedRoute)
        return (
            <Fragment>
                {!!selectedRoute && <div className='select-route-container-info'>
                    {selectedRoute.distance.text}
                    {selectedRoute.duration.text}
                </div>}
            </Fragment>
        )
    }
}

