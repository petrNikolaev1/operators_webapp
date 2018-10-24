import React, {Component} from 'react'
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import {DRIVER_REFRESH_RATE} from "@/constants";
import '@/assets/styles/DriverProgress.scss'
import {secondsToHours, metersToKm} from "@/util/units";

export default class DriverProgress extends Component {
    state = {
        time: 0
    };

    componentDidMount() {
        this.refreshProgress = setInterval(() => this.setState({time: Date.now()}), DRIVER_REFRESH_RATE)
    }

    componentWillUnmount() {
        clearInterval(this.refreshProgress);
    }

    render() {
        const {progress, duration, distance} = this.props;
        const fractionPassed = progress.percent / 100;
        const fractionLeft = 1 - fractionPassed;


        const timePassed = secondsToHours(Math.round(fractionPassed * duration));
        const distancePassed = metersToKm(Math.round(fractionPassed * distance));

        const timeLeft = secondsToHours(Math.round(fractionLeft * duration));
        const distanceLeft = metersToKm(Math.round(fractionLeft * distance));

        const percent = Math.floor(progress.percent);

        return (
            <div className='driver-progress'>
                <div className='driver-progress-table'>
                    <div className='driver-progress-table-row'>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Estimated time left:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {timeLeft[0]} hours {timeLeft[1]} mins
                            </div>
                        </div>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Time taken:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {timePassed[0]} hours {timePassed[1]} mins
                            </div>
                        </div>
                    </div>
                    <div className='driver-progress-table-row'>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Distance left:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {distanceLeft} km
                            </div>
                        </div>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Distance passed
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {distancePassed} km
                            </div>
                        </div>
                    </div>
                </div>
                <Progress
                    className='driver-progress-bar'
                    percent={percent}
                    theme={
                        {
                            active: {
                                symbol: percent + '%',
                                trailColor: '#DFEDEE',
                                color: '#01BABF',
                            },
                        }
                    }
                />
            </div>
        )
    }

}