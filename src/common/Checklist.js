import React, {Component} from 'react';
import className from 'classnames'
import {Done} from '@material-ui/icons';

import '@/assets/styles/Checklist.scss'

export default class Checklist extends Component {

    componentDidMount() {
        const {value, handleChange} = this.props;
        if (!(value && !!value.value) || !handleChange) return;

        const isSelected = value.value.some(option => option.selected);

        this.props.handleChange({
            value: value.value,
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
            value: optionsNew,
            valid: isSelected,
            empty: !isSelected,
        })
    };

    renderOptions = (options, num = options.length) => {
        return options.map((option, index) => {
            return (
                <div key={index} className='item' onClick={() => this.handleSelect(index, options, num)}>
                    <span className="item-box">{option.selected && <Done className={'item-box-icon'}/>}</span>
                    <span className='item-value'>{option.value}</span>
                </div>
            )
        })
    };

    render() {
        const {value, formClass, disabled} = this.props;
        if (!(value && !!value)) return null;
        return (
            <div className='checklist-horizontal'>
                <div  className='checklist-horizontal-item'>
                    <div className="checklist-horizontal-item-box"/>
                    {/*<div className='checklist-horizontal-item-value'>{'Apple'}</div>*/}
                </div>
                <div  className='checklist-horizontal-item'>
                    <div className="checklist-horizontal-item-box"/>
                    {/*<div className='checklist-horizontal-item-value'>{'orange'}</div>*/}
                </div>
                <div  className='checklist-horizontal-item'>
                    <div className="checklist-horizontal-item-box"/>
                    {/*<div className='checklist-horizontal-item-value'>{'banana'}</div>*/}
                </div>
            </div>
        )
    }
}
