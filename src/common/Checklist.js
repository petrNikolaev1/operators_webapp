import React, {Component, Fragment} from 'react';
import classNames from 'classnames'
import {Done} from '@material-ui/icons';

import '@/assets/styles/Checklist.scss'

export default class Checklist extends Component {

    componentDidMount() {
        const {value, handleChange} = this.props;
        if (!(value && !!value.options) || !handleChange) return;

        const isSelected = value.options.some(option => option.selected);

        this.props.handleChange({
            options: value.options,
            valid: isSelected,
            empty: !isSelected,
        })

    }

    handleSelect = (id, options, num) => {
        if (!this.props.handleChange) return;

        const selectedNum = options.filter(option => option.selected).length;

        const optionsNew = options.map((option, index) => index === id ? {
            ...option,
            selected: option.selected ? false : (selectedNum < num)
        } : option);

        const isSelected = optionsNew.some(option => option.selected);

        this.props.handleChange({
            options: optionsNew,
            valid: isSelected,
            empty: !isSelected,
        })
    };

    renderOptions = (options, num = options.length) => {
        return options.map((option, index) => {
            return (
                <label key={index} className='item'>
                    <input
                        disabled={this.props.disabled}
                        type="checkbox"
                        onChange={() => this.handleSelect(index, options, num)}
                        checked={option.selected}
                    />
                    <span className="checkmark">{option.selected && <Done className={'checkmark-icon'}/>}</span>
                    <span className='item-value'>{this.props.strings[option.value]}</span>
                </label>
            )
        })
    };

    render() {
        const {value, formClass, disabled} = this.props;
        if (!(!!value && !!value.options)) return null;
        return (
            <div className={classNames(formClass, {'disabled': disabled})}>
                {this.renderOptions(value.options)}
            </div>)
    }
}
