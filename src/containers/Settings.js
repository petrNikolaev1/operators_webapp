import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Reply, ExitToApp} from '@material-ui/icons';
import Select from '@/common/Select'
import OperatorPhoto from '@/assets/img/personal_photo.jpg'

import '@/assets/styles/Settings.scss'

export default class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <div className='settings-title'>
                    <div className='settings-title-label'>
                        Settings
                    </div>
                    <div className="settings-title-buttons">
                        <div className="settings-title-buttons-link">
                            <Link to="/" className='settings-back-to-menu'>
                                Back to main menu
                                <Reply/>
                            </Link>
                        </div>
                        <div className="settings-title-buttons-link">
                            <Link to="/login" className='settings-logout'>
                                Logout
                                <ExitToApp/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='settings-info'>
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
                    </div>
                    <div className="settings-info-title">
                        Personal information
                    </div>
                    <div className='settings-info-operator'>
                        <div className="settings-info-operator-photo">
                            <img src={OperatorPhoto} alt="OperatorPhoto"/>
                        </div>
                        <div className="settings-info-operator-personal-info">
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Full Name:
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    Matyashov Nikolay Alekseevich
                                </span>
                            </div>
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Licence Number:
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    A982FBV0
                                </span>
                            </div>
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Position:
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    Junior operator
                                </span>
                            </div>
                            <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    Access Level:
                                </span>
                                <span className="settings-info-operator-personal-info-entry-value">
                                    Yellow
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
