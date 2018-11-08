import React, {Component} from 'react'
import classNames from 'classnames'
import onClickOutside from "react-onclickoutside";

import '@/assets/styles/CustomerRegistration.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import Form from "@/forms/Form";
import constants from '@/constants'
import Notification from '@/common/Notification'
import Footer from "@/common/Footer";
import {hideCustomerRegistration} from '@/actions/viewActions'
import connect from "react-redux/es/connect/connect";
import {apiReq} from '@/actions/serverActions'
import translate from "@/hocs/Translate";
import Header from "@/common/Header";

@connect(
    store => ({}), {hideCustomerRegistration, apiReq}
)
@translate('CustomerRegistration')
@showBeforeHOC('customer-registration')
@onClickOutside
export default class CustomerRegistration extends Component {
    constructor(props) {
        super(props);
        const {strings} = props;
        this.state = {
            forms: {
                name: {
                    data: {label: strings.NAME},
                    type: constants.STRING_INPUT,
                    notification: strings.NAME_NOTIFICATION
                },
                email: {
                    data: {label: strings.EMAIL},
                    type: constants.EMAIL_INPUT,
                    notification: strings.EMAIL_NOTIFICATION
                },
                password: {
                    data: {label: strings.PASSWORD},
                    type: constants.PASSWORD_INPUT,
                    notification: strings.PASSWORD_NOTIFICATION
                },

            },
            footerMounted: true,
        };
    }

    handleClickOutside = () => {
        const {hideCustomerRegistration} = this.props;
        hideCustomerRegistration()
    };

    mountFooter = () => {
        this.setState({footerMounted: true})
    };

    unmountFooter = () => {
        this.setState({footerMounted: false})
    };

    componentDidUpdate(prevProps, prevState) {
        const {footerMounted} = this.state;

        if (!footerMounted) {
            this.mountFooter();
        }
    }

    handleForm = key => value => {
        this.setState(prevState => ({
            forms: {
                ...prevState.forms,
                [key]: {
                    ...prevState.forms[key],
                    ...value
                }
            }
        }))
    };

    renderForms = (forms) => {
        return Object.keys(forms).map((key, index) => {
            const {notification, onBlurNotificationShown} = forms[key];
            return (
                <div className='customer-registration-container-body-table-row' key={index}>
                    <div
                        className='customer-registration-container-body-table-row-item customer-registration-container-body-table-row-form'
                    >
                        <Form
                            {...forms[key]}
                            key={key}
                            handleChange={this.handleForm(key)}
                            mounted={true}
                        />
                    </div>
                    <div
                        className='customer-registration-container-body-table-row-item customer-registration-container-body-table-row-notification'
                    >
                        {<Notification
                            mounted={onBlurNotificationShown}
                            text={notification}
                            notificationClass="order-creation-notification"
                        />}
                    </div>
                </div>
            )
        })
    };

    footerEnabled = () => Object.values(this.state.forms).every(form => form.valid);

    onFooter = () => {
        if (!this.footerEnabled()) return;
        const {forms} = this.state;
        this.props.apiReq('register',
            {
                email: forms.email.value,
                name: forms.name.value,
                password: forms.password.value,
                password_confirm: forms.password.value
            }
        );
        this.props.hideCustomerRegistration()
    };

    render() {
        const {hideCustomerRegistration, strings, showBeforeClass} = this.props;
        const {footerMounted, forms} = this.state;

        const bodyClass = classNames('customer-registration-container-body', {'customer-registration-container-body-rounded': !footerMounted || !this.footerEnabled()});

        return (
            <div className={classNames("customer-registration-container", showBeforeClass)}>
                <Header label={strings.REGISTRATION}
                        onClose={hideCustomerRegistration}
                        headerContainerClass='customer-registration-container-header-rounded'
                />
                <div className={bodyClass}>
                    <div className='customer-registration-container-body-table'>
                        {this.renderForms(forms)}
                    </div>
                </div>
                {footerMounted &&
                <Footer
                    mounted={this.footerEnabled()}
                    unmount={this.unmountFooter}
                    handleClick={this.onFooter}
                    text={strings.REGISTER}
                    footerContainerClass='customer-registration-container-footer-rounded'
                />}
            </div>
        )
    }
}
