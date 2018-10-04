import React, {Component} from "react";

import '@/assets/styles/Login.scss'
import translate from '@/hocs/Translate'
import logo from '@/assets/img/logo2white.svg'
import connect from "react-redux/es/connect/connect";
import {hideLogin} from '@/actions/viewActions'

@connect(
    store => ({}), {hideLogin}
)
@translate('Login')
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.hideLogin()
    };

    render() {
        const {strings} = this.props;
        return (
            <div className='login-container'>
                <div className='login-container-icon'><img src={logo} alt="logo"/></div>
                <form className='login-container-form'>
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
                    <button className='login-container-form-enter' onClick={this.onSubmit}>
                        {strings.ENTER}
                    </button>
                </form>
            </div>
        );
    }
}
