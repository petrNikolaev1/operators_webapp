import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import cookies from 'js-cookie'

import '@/assets/styles/Login.scss'
import translate from '@/hocs/Translate'
import logo from '@/assets/img/logo2white.svg'
import connect from "react-redux/es/connect/connect";
import {hideLogin} from '@/actions/viewActions'
import {apiReq} from '@/actions/serverActions'
import {hideLoading} from '@/actions/viewActions'
import {resetChatHistory} from "@/actions/chatActions";
import constants from "../constants";
import OrdersFilter from "./Orders/OrdersFilter";

@connect(
    store => ({
        fail: store.viewReducer.fail,
        login: store.loginReducer,
        chats: store.chatReducer.chats,
    }), {apiReq, resetChatHistory,hideLoading}
)
@translate('Login')
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            notify: '',
            login: '',
        };
    }

    static getDerivedStateFromProps(props, state) {
        const {notify, login: loginOld} = state;
        const {strings, login: loginNew} = props;
        if (!loginOld.loaded && loginNew.loaded && !!loginNew.error) {
            return {
                login: loginNew,
                notify: strings.INVALID
            }
        }
        return {
            login: loginNew
        }
    }

    preValidate = () => {
        const {email, password} = this.state;
        return !!email && !!password
    };

    postValidate = () => {

    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (event) => {
        const {strings, chats, apiReq} = this.props;
        event.preventDefault();
        if (!this.preValidate()) return this.setState({notify: strings.NOT_ALL_FIELDS});
        const {email, password} = this.state;

        apiReq('login', {email, password}, {
                ...this.props, initChatHistories: () => chats.forEach(chat => apiReq(
                constants.messages, {limit: 10, page: 0, driverId: chat.chat_id}, undefined, {chat_id: chat.chat_id})
                )
            }
        );
    };

    render() {
        const {strings, apiReq, login} = this.props;
        const {from} = this.props.location.state || {from: {pathname: "/"}};
        const {email, password, notify} = this.state;


        if (!!login.profile && !!cookies.get('token')) {
            return <Redirect to={from}/>
        }

        return (
            <div className='login-container'>
                <OrdersFilter/>
                <div className='login-container-icon'><img src={logo} alt="logo"/></div>
                <form className='login-container-form' onSubmit={this.onSubmit}>
                    <div className='login-container-form-notify'>{notify}</div>
                    <div className='login-container-form-item'>
                        <div className='login-container-form-item-label'>
                            {strings.LOGIN}
                        </div>
                        <input className='login-container-form-item-input'
                               name='email'
                               autoFocus
                               placeholder={strings.LOGIN}
                               value={this.state.email}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className='login-container-form-item'>
                        <div className='login-container-form-item-label'>
                            {strings.PASSWORD}
                        </div>
                        <input className='login-container-form-item-input'
                               name='password'
                               value={this.state.password}
                               onChange={this.onChange}
                               placeholder={strings.PASSWORD}
                               type="password"
                        />
                    </div>
                    <button type="submit" className='login-container-form-enter'>
                        {strings.ENTER}
                    </button>
                </form>
            </div>
        );
    }
}
