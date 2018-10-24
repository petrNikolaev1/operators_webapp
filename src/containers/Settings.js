import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Reply, ExitToApp, ExpandMore} from '@material-ui/icons';
import Select from '@/common/Select'
import OperatorPhoto from '@/assets/img/personal_photo.jpg'
import {logout} from "@/actions/serverActions";

import '@/assets/styles/Settings.scss'
import classNames from "classnames";
import connect from "react-redux/es/connect/connect";

@connect(
    store => ({
        login: store.loginReducer,
    }), {logout}
)

export default class Settings extends Component {
    state = {
        administrationPanelShown: false,
        personalInfoShown: false,
    };

    showPersonalInfo = () => {
        this.setState(prevState => ({personalInfoShown: !prevState.personalInfoShown}))
    };

    showAdministrationPanel = () => {
        this.setState(prevState => ({administrationPanelShown: !prevState.administrationPanelShown}))
    };

    render() {
        const {administrationPanelShown, personalInfoShown} = this.state;

        const administrationPanelOpened = administrationPanelShown;
        const personalInfoOpened = personalInfoShown;
        const {logout} = this.props;

        return (
            <div className="settings">
                <div className='settings-title'>
                    <div className='settings-title-label'>
                        Settings
                    </div>
                    <Link to="/" className='settings-back-to-menu'>
                        <Reply/>
                        Back to main menu
                    </Link>
                </div>
                <div className='settings-info'>
                    <div className="settings-info-title" onClick={this.showAdministrationPanel}>
                        <div className="settings-info-title-text">
                            Administration panel
                        </div>
                        <div className="settings-info-title-expand">
                            <ExpandMore
                                className={classNames('home-block-title-expand', {'reversed': administrationPanelOpened})}
                            />
                        </div>
                    </div>
                    {administrationPanelOpened &&
                    <div className='settings-info-drivers'>
                        <div className='settings-info-drivers-label'>
                            Select number of drivers
                        </div>
                        <div className='settings-info-drivers-select'>
                            <Select
                                isSerchable={true}
                                noOptionsMessage={'No Options'}
                                placeholder={'3'}
                                //TODO options={}
                                formClassName='default-select'
                            />
                        </div>
                    </div>}
                    <div className="settings-info-title" onClick={this.showPersonalInfo}>
                        <div className="settings-info-title-text">
                            Personal information
                        </div>
                        <div className="settings-info-title-expand">
                            <ExpandMore
                                className={classNames('home-block-title-expand', {'reversed': personalInfoOpened})}
                            />
                        </div>
                    </div>
                    {personalInfoOpened &&
                    <div className='settings-info-operator'>
                        <div className="settings-info-operator-photo">
                            <img src={OperatorPhoto} alt="OperatorPhoto"/>
                        </div>
                        <div className="settings-info-operator-personal-info">
                            <div className="settings-info-operator-personal-info-entry">

                                <span className="settings-info-operator-personal-info-entry-name">
                                    Full Name:
                                    {/*TODO: Add to constants, change language*/}
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    Matyashov Nikolay Alekseevich
                                </span>
                            </div>
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Licence Number:
                                    {/*TODO: Add to constants, change language*/}
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    A982FBV0
                                </span>
                            </div>
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Position:
                                    {/*TODO: Add to constants, change language*/}
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    Junior operator
                                </span>
                            </div>
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Access Level:
                                    {/*TODO: Add to constants, change language*/}
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    Yellow
                                </span>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="btn">
                    <Link to={'/'} onClick={logout} className='btn-logout'>
                        Logout
                        <ExitToApp/>
                    </Link>
                </div>
            </div>
        )
    }
}
