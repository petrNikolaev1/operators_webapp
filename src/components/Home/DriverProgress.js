import React, {Component} from 'react'
import {Chat} from '@material-ui/icons';
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Link} from "react-router-dom";

import {DRIVER_REFRESH_RATE} from "@/constants";
import '@/assets/styles/DriverProgress.scss'
import {secondsToHours, metersToKm} from "@/util/units";
import {selectChat} from '@/actions/chatActions'
import connect from "react-redux/es/connect/connect";

@connect(
    store => ({}), {selectChat}
)
export default class DriverProgress extends Component {
    render() {
        const {selectChat, task, drivers} = this.props;
        console.log(task)
        const {distanceTotal, durationTotal, percentTravelled} = task;

        const fractionPassed = percentTravelled;
        const fractionLeft = 1 - fractionPassed;

        const timePassed = Math.round(percentTravelled * durationTotal);
        const distancePassed = Math.round(percentTravelled * distanceTotal);

        const timePassedConverted = secondsToHours(timePassed);
        const distancePassedConverted = metersToKm(distancePassed);

        const timeLeft = durationTotal - timePassed;
        const distanceLeft = distanceTotal - distancePassed;

        const timeLeftConverted = secondsToHours(timeLeft);
        const distanceLeftConverted = metersToKm(distanceLeft);

        const percent = Math.floor(percentTravelled * 100);

        return (
            <div className='driver-progress'>
                <div className='driver-progress-table'>
                    <div className='driver-progress-table-row'>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Estimated time left:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {timeLeftConverted[0]} hours {timeLeftConverted[1]} mins
                            </div>
                        </div>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Time taken:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {timePassedConverted[0]} hours {timePassedConverted[1]} mins
                            </div>
                        </div>
                    </div>
                    <div className='driver-progress-table-row'>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Distance left:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {distanceLeftConverted} km
                            </div>
                        </div>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Distance passed
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {distancePassedConverted} km
                            </div>
                        </div>
                    </div>
                </div>
                <div className='driver-progress-right'>
                    <Link to='/operator/chat' className='driver-progress-right-btn'
                          onClick={() => selectChat(drivers[0].id)}>
                        <Chat className='driver-progress-right-btn-icon'/>
                        Go to chat
                    </Link>
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
            </div>
        )
    }

}
