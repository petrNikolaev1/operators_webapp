import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

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

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.hideLogin()
    }

    render() {
        const {strings} = this.props
        return (
            <div className='Login'>
                <div className='Login-icon'><img src={logo} alt="logo"/></div>
                <form className='Login-form' onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder={strings.LOGIN}
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder={strings.PASSWORD}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        className='Login-button'
                        block
                        bsSize="xlarge"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        {strings.ENTER}
                    </Button>
                </form>
            </div>
        );
    }
}