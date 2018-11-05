import React, {Component, Fragment} from 'react'
import {ChevronLeft, ChevronRight, Close} from '@material-ui/icons';

import '@/assets/styles/Customer.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import Form from "@/forms/Form";
import constants from '@/constants'
import Notification from '@/common/Notification'
import Footer from "@/common/Footer";

const pages = [
    {title: 'Основная информация', forms: ['description', 'weight', 'worth']},
    {title: 'Место отправления заказа', forms: ['origin']},
    {title: 'Место доставки заказа', forms: ['destination']},
    {title: 'Срок доставки заказа', forms: ['dueDate']},
];

@showBeforeHOC('order-creation')
export default class Customer extends Component {
    state = {
        forms: {
            description: {
                data: {label: 'Описание'},
                type: constants.STRING_INPUT,
                notification: 'Неверно указано описание'
            },
            worth: {
                data: {label: 'Ценность (USD)'},
                type: constants.AMOUNT_INPUT,
                notification: 'Неверно указана стоимость'
            },
            weight: {
                data: {label: 'Вес (кг)'},
                type: constants.WEIGHT_INPUT,
                notification: 'Неверно указан вес'
            },
            origin: {
                data: {label: 'Адрес отправления заказа'},
                type: constants.SELECT_LOCATION,
                notification: 'Пожалуйста, выберите точный адрес',
                big: true
            },
            destination: {
                data: {label: 'Адрес доставки заказа'},
                type: constants.SELECT_LOCATION,
                notification: 'Пожалуйста, выберите точный адрес',
                big: true
            },
            dueDate: {
                data: {label: 'Дата доставки заказа'},
                type: constants.DATETIME,
                notification: 'Пожалуйста, укажите корректную дату.\nМинимальный срок выполнения заказа - 4 часа',
                labelClass: 'react-datetime-label-create-order'
            },
        },
        currentPage: 1,
        footerMounted: true,
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
            const {notification, notificationShown, big, special} = forms[key];
            return (
                <Fragment key={index}>
                    {!special ? !big ?
                        <div className='order-creation-container-body-table-row'>
                            <div
                                className='order-creation-container-body-table-row-item order-creation-container-body-table-row-form'
                            >
                                <Form
                                    {...forms[key]}
                                    handleChange={this.handleForm(key)}
                                    mounted={true}
                                />
                            </div>
                            <div
                                className='order-creation-container-body-table-row-item order-creation-container-body-table-row-notification'
                            >
                                {<Notification
                                    mounted={notificationShown}
                                    text={notification}
                                    notificationClass="order-creation-notification"
                                />}
                            </div>
                        </div>
                        :
                        <div className='order-creation-container-body-table-full'>
                            <Form
                                {...forms[key]}
                                handleChange={this.handleForm(key)}
                                mounted={true}
                            />
                        </div>
                        :
                        <div className={`order-creation-container-body-table-${special}`}>
                            <Form
                                {...forms[key]}
                                handleChange={this.handleForm(key)}
                                mounted={true}
                            />
                        </div>
                    }
                </Fragment>
            )
        })
    };

    getCurrentPageForms = () => {
        const {currentPage, forms} = this.state;
        const currentFormsKeys = pages[currentPage - 1].forms;
        return currentFormsKeys.reduce((res, cur) => (res[cur] = forms[cur], res), {})
    };

    checkEmpty = () => {
        const emptyForms = Object.keys(this.getCurrentPageForms()).filter(key => this.state.forms[key].empty);

        this.setState(prevState => {
            const formsWithWarnings = Object.keys(prevState.forms)
                .reduce((res, key) => (emptyForms.includes(key) ? res[key] = {
                    ...prevState.forms[key],
                    warning: true
                } : res[key] = prevState.forms[key], res), {});

            return ({
                forms: formsWithWarnings
            })
        });

        clearTimeout(this.warningsResetTimeout);
        this.warningsResetTimeout = setTimeout(() => {
            this.setState(prevState => {
                return ({
                    forms: Object.keys(prevState.forms)
                        .reduce((res, key) => (emptyForms.includes(key) ? res[key] = {
                            ...prevState.forms[key],
                            warning: false
                        } : res[key] = prevState.forms[key], res), {})
                })
            })
        }, 500);

        return !!emptyForms.length
    };

    checkValid = () => {
        const invalidForms = Object.keys(this.getCurrentPageForms()).filter(key => !this.state.forms[key].valid);

        this.setState(prevState => {
            const formsWithWarnings = Object.keys(prevState.forms)
                .reduce((res, key) => (invalidForms.includes(key) ? res[key] = {
                    ...prevState.forms[key],
                    notificationShown: true
                } : res[key] = prevState.forms[key], res), {});

            return ({
                forms: formsWithWarnings
            })
        });

        clearTimeout(this.notificationsResetTimeout);
        this.notificationsResetTimeout = setTimeout(() => {
            this.setState(prevState => {
                return ({
                    forms: Object.keys(prevState.forms)
                        .reduce((res, key) => (invalidForms.includes(key) ? res[key] = {
                            ...prevState.forms[key],
                            notificationShown: false
                        } : res[key] = prevState.forms[key], res), {})
                })
            })
        }, 2000);

        return !!invalidForms.length
    };

    handleNextPage = () => {
        if (this.checkEmpty() || this.checkValid()) return;
        const {currentPage} = this.state;
        if (currentPage > pages.length - 1) return;
        this.setState({currentPage: currentPage + 1})
    };

    handlePrevPage = () => {
        const {currentPage} = this.state;
        if (currentPage < 2) return;
        this.setState({currentPage: currentPage - 1})
    };

    footerEnabled = () => Object.values(this.state.forms).every(form => form.valid);

    render() {
        const {currentPage, footerMounted} = this.state;

        const forms = this.getCurrentPageForms();
        const firstForm = Object.values(forms)[0]
        // console.log('RENDER', firstForm)

        return (
            <div className="order-creation-container">
                <div className='order-creation-container-header'>
                    <div className="order-creation-container-header-label">
                        Оформление заказа
                    </div>
                    <div className="order-creation-container-header-img">
                        <Close className='close-icon'/>
                    </div>
                </div>

                <div className='order-creation-container-page-header'>
                    <div className="order-creation-container-page-header-label">
                        {pages[currentPage - 1].title}
                    </div>
                    {firstForm.big &&
                    <Notification
                        text={firstForm.notification}
                        mounted={firstForm.notificationShown}
                        notificationClass="order-creation-notification-big"
                    />}
                </div>
                <div className='order-creation-container-body'>
                    <div className='order-creation-container-body-table'>
                        {this.renderForms(forms)}
                    </div>
                </div>
                <div className='order-creation-container-nav-container'>
                    <div className='order-creation-container-nav-left'/>
                    <div className='order-creation-container-nav'>
                        <div className='order-creation-container-nav-arrow' onClick={this.handlePrevPage}>
                            {currentPage > 1 && <ChevronLeft className='arrow-icon'/>}
                        </div>
                        <div className='order-creation-container-nav-label'>
                            {`${currentPage}/${pages.length}`}
                        </div>
                        <div className='order-creation-container-nav-arrow' onClick={this.handleNextPage}>
                            {currentPage < pages.length && <ChevronRight className='arrow-icon'/>}
                        </div>
                    </div>
                    <div className='order-creation-container-nav-right'/>
                </div>
                {footerMounted &&
                <Footer
                    mounted={this.footerEnabled()}
                    unmount={this.unmountFooter}
                    handleClick={this.onFooter}
                    text="Оформить заказ"
                />}
            </div>

        )
    }
}
