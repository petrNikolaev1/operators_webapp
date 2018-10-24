import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import cookies from 'js-cookie'

import '@/assets/styles/Login.scss'
import translate from '@/hocs/Translate'
import logo from '@/assets/img/logo2white.svg'
import connect from "react-redux/es/connect/connect";
import {hideLogin} from '@/actions/viewActions'
import {apiReq} from '@/actions/serverActions'

@connect(
    store => ({
        fail: store.viewReducer.fail,
        login: store.loginReducer,
    }), {apiReq}
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
        const {login: loginNew} = props;
        if (!loginOld.loaded && loginNew.loaded && !!loginNew.error) {
            return {
                login: loginNew,
                notify: 'Invalid login/password'
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
        event.preventDefault();
        if (!this.preValidate()) return this.setState({notify: 'Please, fill all fields'});
        const {email, password} = this.state;
        this.props.apiReq('login', {email, password});
    };

    render() {
        const {strings, apiReq, login} = this.props;
        const {from} = this.props.location.state || {from: {pathname: "/"}};
        const {email, password, notify} = this.state;


        if (!!cookies.get('token')) {
            return <Redirect to={from}/>
        }

        return (
            <div className='login-container'>
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
