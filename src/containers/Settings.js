import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Reply, ExitToApp, ExpandMore} from '@material-ui/icons';
import Select from '@/common/Select'
import OperatorPhoto from '@/assets/img/personal_photo.jpg'
import {logout} from "@/actions/serverActions";
import Button from "@/common/Button";
import {showCustomerRegistration} from '@/actions/viewActions'
import CustomerRegistration from "@/components/StaffRegistration";

import '@/assets/styles/Settings.scss'
import classNames from "classnames";
import connect from "react-redux/es/connect/connect";
import translate from "@/hocs/Translate";

@connect(
    store => ({
        login: store.loginReducer,
        customerRegistrationShown: store.viewReducer.customerRegistrationShown,
    }), {logout, showCustomerRegistration}
)
@translate('Settings')
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
        const {logout, strings, showCustomerRegistration, customerRegistrationShown} = this.props;

        return (
            <Fragment>
                <div className="settings">
                    <div className='settings-title'>
                        <div className='settings-title-label'>
                            {strings.SETTINGS}
                        </div>
                        <Link to="/operator/" className='settings-back-to-menu'>
                            <Reply/>
                            {strings.BACK}
                        </Link>
                    </div>
                    <div className='settings-info'>
                        <div className="settings-info-title" onClick={this.showAdministrationPanel}>
                            <div className="settings-info-title-text">
                                {strings.ADMIN_PANEL}
                            </div>
                            <div className="settings-info-title-expand">
                                <ExpandMore
                                    className={classNames('home-block-title-expand', {'reversed': administrationPanelOpened})}
                                />
                            </div>
                        </div>
                        {administrationPanelOpened &&
                        <Fragment>
                            <div className='settings-info-drivers'>
                                <div className='settings-info-drivers-label'>
                                    {strings.SELECT_NUMBER}
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
                            <div className="settings-info-register">
                                <Button onClick={showCustomerRegistration} label="Register new employee"
                                        className="settings-info-register-button">
                                </Button>
                            </div>
                        </Fragment>}
                        <div className="settings-info-title" onClick={this.showPersonalInfo}>
                            <div className="settings-info-title-text">
                                {strings.PERSONAL_INFO}
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
                                        {strings.FULL_NAME}
                                </span>
                                    <span className="settings-info-operator-personal-info-entry-value">
                                    Matyashov Nikolay Alekseevich
                                </span>
                                </div>
                                <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    {strings.LICENSE_NUMBER}
                                </span>
                                    <span className="settings-info-operator-personal-info-entry-value">
                                    A982FBV0
                                </span>
                                </div>
                                <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    {strings.POSITION}
                                </span>
                                    <span className="settings-info-operator-personal-info-entry-value">
                                    Junior operator
                                </span>
                                </div>
                                <div className="settings-info-operator-personal-info-entry">
                                <span className="settings-info-operator-personal-info-entry-name">
                                    {strings.ACCESS_LEVEL}
                                </span>
                                    <span className="settings-info-operator-personal-info-entry-value">
                                    Yellow
                                </span>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="btn">
                        <Link to={'/operator/'} onClick={logout} className='btn-logout'>
                            {strings.LOGOUT}
                            <ExitToApp/>
                        </Link>
                    </div>
                </div>
                {customerRegistrationShown && <CustomerRegistration/>}
            </Fragment>
        )
    }
}
