import React, {Component} from 'react';
import {Polyline} from 'react-google-maps';
import connect from "react-redux/es/connect/connect";

import {selectRoute} from "@/actions/routesActions";
import {colors, selectedColor} from '@/util/rainbow'

@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute
    }),
    {selectRoute}
)
export default class Route extends Component {
    render() {
        const {path, index, selectedRoute, selectRoute, data} = this.props;
        const isSelected = !!selectedRoute && selectedRoute.id === index;
        return (
            <Polyline
                onClick={() => selectRoute({...data, id: index})}
                path={path}
                options={{
                    strokeColor: isSelected ? selectedColor : colors[index],
                    strokeOpacity: isSelected ? 1.0 : 0.5,
                    strokeWeight: 6,
                    zIndex: isSelected ? 1 : 0
                }}
            />
        )
    }
}

