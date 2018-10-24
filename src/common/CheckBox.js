import React, {Component} from 'react';
import className from 'classnames'
import {Done} from '@material-ui/icons';

// import '../assets/styles/CheckBox.scss'

export default class CheckBox extends Component {

    handleSelect = (id, options, num) => {
        const selectedNum = options.filter(option => option.selected).length;

        const optionsNew = options.map((option, index) => index === id ? {
            ...option,
            selected: option.selected ? false : (selectedNum < num)
        } : option);

        const isSelected = optionsNew.some(option => option.selected);

        this.props.handleChange({
            value: optionsNew,
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
                    <span className="checkmark">{option.selected && <Done className={'icon'}/>}</span>
                    <span className='item-value'>{option.value}</span>
                </label>
            )
        })
    };

    render() {
        const {style, transitionEnd, value, containerClass, formClass, disabled} = this.props;
        return (
            <div style={style} onTransitionEnd={transitionEnd} className={containerClass}>
                <div className={className(formClass, {'disabled': disabled})}>
                    {this.renderOptions(value.value, value.num)}
                </div>
            </div>
        )
    }
}
