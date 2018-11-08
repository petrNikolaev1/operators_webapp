import React, {Component} from 'react'
import {Visibility, VisibilityOff} from '@material-ui/icons';
import FormValidator from "./FormValidator";
import {passwordInput} from "@/util/formCheckers";

const PasswordInput = (ChildComponent) => {
    return class PasswordMask extends Component {
        state = {
            hidden: true,
        };

        changeVisibility = () => {
            this.setState((prevState) => {
                return {
                    hidden: !prevState.hidden
                }
            })
        };

        render() {
            const {hidden} = this.state;
            return (
                <ChildComponent
                    {...this.props}
                    hidden={hidden}
                    icon={hidden ? <Visibility className='visibility-icon'/> :
                        <VisibilityOff className='visibility-icon'/>}
                    handleIconClick={this.changeVisibility}
                />
            )
        }
    }
};

const PasswordMask = (ChildComponent) => FormValidator(PasswordInput(ChildComponent))(passwordInput);

export {PasswordMask}
