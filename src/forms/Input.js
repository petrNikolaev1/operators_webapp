import React, {Component, Fragment} from 'react'
import classNames from 'classnames'

import '@/assets/styles/Input.scss'
import FormValidator from '@/hocs/FormValidator'
import {
    stringInput, emailInput, amountInput, weightInput
} from '@/util/formCheckers'
import {capitalizeFirstLetter} from "@/util/strings";

class Input extends Component {

    componentDidMount() {
        const {setInputRef} = this.props;
        setInputRef && setInputRef(this.input);
    }

    componentWillUnmount() {
        const {setInputRef} = this.props;
        setInputRef && setInputRef(undefined);
    }

    render() {
        const {
            data, style, transitionEnd,
            value, maskOnChange, placeholder, disabled,
            inputClass, inputContainerClass, labelClass,
            warning
        } = this.props;

        const inputValue = value || '';

        return (
            <Fragment>
                <label style={style} onTransitionEnd={transitionEnd}
                       className={classNames('input-label-default', `${labelClass}`)}>
                    {data.label}
                </label>
                <div style={style} onTransitionEnd={transitionEnd}
                     className={classNames('input-container-default', `${inputContainerClass}`, {'warning': warning})}>
                    <input
                        disabled={disabled}
                        className={classNames('input-default', `${inputClass}`)}
                        ref={input => this.input = input}
                        value={inputValue}
                        onChange={maskOnChange}
                        placeholder={placeholder}
                    />
                </div>
            </Fragment>
        )
    }
}

export const StringInput = FormValidator(Input)(stringInput);
export const EmailInput = FormValidator(Input)(emailInput);
export const AmountInput = FormValidator(Input)(amountInput);
export const WeightInput = FormValidator(Input)(weightInput);
