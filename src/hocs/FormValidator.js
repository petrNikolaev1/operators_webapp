import React, {Component} from 'react'

import {setCaretPosition} from "util/caret";

export default (ChildComponent) => (validatorObj, reactInputMask) => {
    return class FormValidator extends Component {

        onChange = (event) => {
            const value = event.target.value;
            let res = {};

            // To allow typing the value.
            if (!validatorObj.preValidate(value)) return;
            res.value = value;

            // To determine whether the value is empty.
            res.empty = value === '';

            // To determine whether the value is valid.
            res.valid = !!validatorObj.postValidate(value);

            this.props.handleChange(res)
        };

        componentDidMount() {
            const {value, handleChange} = this.props;
            const inputValue = value.value || '';

            let res = {};

            // The value is already considered as acceptable.
            res.value = inputValue;

            // To determine whether the value is empty.
            res.empty = inputValue === '';

            // To determine whether the value is valid.
            res.valid = !!validatorObj.postValidate(inputValue);

            handleChange(res)
        };

        focusOnInput = () => {
            if (!this.input) return;
            setCaretPosition(this.input, this.input.value.length);
            this.input.focus()
        };

        setInputRef = (input) => {
            this.input = input;
        };

        render() {
            return (
                <ChildComponent
                    {...this.props}
                    focusOnInput={this.focusOnInput}
                    setInputRef={this.setInputRef}
                    maskOnChange={this.onChange}
                    reactInputMask={reactInputMask}
                />
            )
        }
    }
}