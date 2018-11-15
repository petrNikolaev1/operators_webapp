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
import {getVehiclesRoutes} from "@/actions/routesActions";
import {apiReq} from "@/actions/serverActions";
import constants from "@/constants";

@connect(
    store => ({
        drivers: store.homeMapReducer,
        vehicles: store.vehiclesReducer,
    }), {homeSelectDriver, getVehiclesRoutes, apiReq}
)
export default class HomeContainer extends Component {
    state = {
        driversInfoShown: false,
        selectedDriver: '',
    };

    updateVehiclesPoitions = () => {
        this.props.apiReq(constants.vehicles, undefined, this.props);
    };

    componentDidMount() {
        this.updateVehiclesPoitions()
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.vehicles.loaded || !props.vehicles.res) return null;
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
        const {drivers, homeSelectDriver, vehicles} = this.props;
        console.log(drivers && drivers.selectedDriver)

        const loaded = vehicles.loaded && vehicles.routesLoaded && !!vehicles.res;
        if (loaded) {
            var vehiclesWithTasks = vehicles.res
                .filter(vehicle => !!vehicle.task);
        }

        console.log('RENDER', drivers)

        const driversBlockOpened = driversInfoShown && !!drivers.selectedDriver;

        return (
            <div className='home'>
                <div className='home-title'>
                    <div className='home-title-label'>
                        Tracking Menu
                    </div>
                    <Link to="/operator/" className='home-back'>
                        <Reply/>
                        Back to main screen
                    </Link>
                </div>
                {loaded &&
                <div className='home-block'>
                    <div className='home-block-title'>
                        <div className='home-block-title-label'>Drivers</div>
                        <div className='home-block-title-select'>
                            <Select
                                onChange={homeSelectDriver}
                                selectedOption={drivers.selectedDriver}
                                isSerchable={true}
                                noOptionsMessage={'There is no such driver'}
                                placeholder={'Select a driver'}
                                options={vehiclesWithTasks.map(vehicle => ({
                                    label: vehicle.drivers[0].name, value: vehicle.drivers[0].id
                                }))}
                                formClassName='default-select'
                            />
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
                            {...vehiclesWithTasks.find(vehicle => vehicle.drivers[0].id === drivers.selectedDriver.value)}
                        />
                    </div>}
                </div>}
                <HomeMap/>
            </div>
        )
    }
}
