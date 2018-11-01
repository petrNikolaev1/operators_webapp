import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import equal from 'deep-equal'
import "react-sweet-progress/lib/style.css";

import HomeMap from '@/components/Home/HomeMap'
import '@/assets/styles/Home.scss'
import connect from "react-redux/es/connect/connect";
import {Reply, ExpandMore} from '@material-ui/icons';
import Select from '@/common/Select'
import {homeSelectDriver} from "@/actions/routesActions";
import DriverProgress from "./DriverProgress";


@connect(
    store => ({
        drivers: store.homeMapReducer.drivers,
    }), {homeSelectDriver}
)
export default class HomeContainer extends Component {
    state = {
        driversInfoShown: false,
        selectedDriver: '',
    };

    static getDerivedStateFromProps(props, state) {
        if (!props.drivers.loaded || !props.drivers.res) return null;
        const {selectedDriver: selectedDriverOld, driversInfoShown: driversInfoShownOld} = state;
        const {selectedDriver: selectedDriverNew} = props.drivers;

        if ((!selectedDriverOld && !!selectedDriverNew) || (!equal(selectedDriverOld, selectedDriverNew) && !!selectedDriverOld && !!selectedDriverNew)) {
            return {
                selectedDriver: selectedDriverNew,
                driversInfoShown: true,
            };
        }
        return null;
    }

    showDriverInfo = () => {
        this.setState(prevState => ({driversInfoShown: !prevState.driversInfoShown}))
    };

    render() {
        const {driversInfoShown} = this.state;
        const {drivers, homeSelectDriver} = this.props;
        console.log(drivers && drivers.selectedDriver)

        const driversBlockOpened = driversInfoShown && !!drivers.selectedDriver;

        return (
            <div className='home'>
                <div className='home-title'>
                    <div className='home-title-label'>
                        Tracking Menu
                    </div>
                    <Link to="/" className='home-back'>
                        <Reply/>
                        Back to main screen
                    </Link>
                </div>
                {drivers.loaded &&
                <div className='home-block'>
                    <div className='home-block-title'>
                        <div className='home-block-title-label'>Drivers</div>
                        <div className='home-block-title-select'>
                            {drivers.loaded &&
                            <Select
                                onChange={driver => drivers.selectedDriver && drivers.selectedDriver.value === driver.value ? null :
                                    homeSelectDriver({driverId: driver.value})}
                                selectedOption={drivers.selectedDriver}
                                isSerchable={true}
                                noOptionsMessage={'There is no such driver'}
                                placeholder={'Select a driver'}
                                options={drivers.driversOptions}
                                formClassName='default-select'
                            />}
                        </div>
                        <div className='home-block-title-expand-container'>
                            {!!drivers.selectedDriver &&
                            <ExpandMore
                                className={classNames('home-block-title-expand', {'reversed': driversBlockOpened})}
                                onClick={this.showDriverInfo}
                            />}
                        </div>
                    </div>
                    {driversBlockOpened &&
                    <div className='home-block-info'>
                        {drivers.selectedDriver.detailedInfo}
                        <DriverProgress
                            className='home-block-info-progress'
                            {...drivers.selectedDriver}
                        />
                    </div>}
                </div>}
                <HomeMap/>
            </div>
        )
    }
}
