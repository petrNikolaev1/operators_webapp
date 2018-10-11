import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";

import "@/assets/styles/SelectRoute.scss";
import translate from '@/hocs/Translate';
import {showConfirm} from "@/actions/routesActions";
import Confirm from './Confirm';
import Loading from "@/common/Loading";



@connect(
    store => ({
        selectedRoute: store.routesReducer.selectedRoute,
        show: store.routesReducer.confirmShown,
        loadingShow: store.viewReducer.loadingShow
    }), {showConfirm}
)
@translate('Map')
export default class RouteInfo extends Component {

    render() {
        const {selectedRoute, strings, showConfirm, show, loadingShow} = this.props;

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
                        <div className='btns-item btns-approve' onClick={() => showConfirm()}>
                            {strings.approve}
                        </div>
                        <div className='btns-item btns-cancl'>
                            {strings.cancl}
                        </div>
                    </div>
                    {loadingShow && <Loading/>}
                    {show === 1 && <Confirm/>}
                </div>}
            </Fragment>
        )
    }
}

