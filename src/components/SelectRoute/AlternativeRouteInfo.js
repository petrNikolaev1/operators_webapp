import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";

import "@/assets/styles/SelectRoute.scss";
import translate from '@/hocs/Translate';
import {hideSelectRoute, showSelectDrivers} from "@/actions/viewActions";


@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute,
        show: store.routesReducer.confirmShown,
        loadingShow: store.viewReducer.loadingShow,
    }), {hideSelectRoute, showSelectDrivers}
)
@translate('SelectRoute')
export default class AlternativeRouteInfo extends Component {

    onApprove = () => {
        const {hideSelectRoute, showSelectDrivers, orderId} = this.props;
        showSelectDrivers(orderId)
    };

    render() {
        const {selectedRoute, strings, hideSelectRoute} = this.props;

        return (
            <Fragment>
                {!!selectedRoute && <div className='select-route-container-info'>
                    <div>
                        {strings.distance}: {selectedRoute.distance.text}
                    </div>
                    <div>
                        {strings.time}: {selectedRoute.duration.text}
                    </div>
                    <div className='btns'>
                        <div className='btns-item btns-approve' onClick={this.onApprove}>
                            {strings.approve}
                        </div>
                        <div className='btns-item btns-cancl' onClick={hideSelectRoute}>
                            {strings.cancl}
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }
}

