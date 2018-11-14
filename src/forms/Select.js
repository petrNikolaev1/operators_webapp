import React, {Component, Fragment} from 'react'
import Select, {components} from 'react-select';

import '@/assets/styles/Select.scss'
import classNames from "classnames";

export default class SelectComponent extends Component {

    state = {
        isMenuOpen: false,
    };

    onOpen = () => {
        const {onOpen} = this.props;
        this.setState({
            isMenuOpen: true
        });
        if (onOpen) onOpen()
    };

    onClose = () => {
        this.setState({
            isMenuOpen: false
        })
    };

    option = (props) => {
        return (
            <components.Option {...props}>
                {!!props.data.icon ? props.data.icon(false) : null}
                {props.label}
            </components.Option>
        );
    };

    singleValue = ({children, ...props}) => (
        <components.SingleValue {...props}>
            {children}
            {!!props.data.icon ? props.data.icon(true) : null}
        </components.SingleValue>
    );

    onChange = value => {
        const {handleChange} = this.props;
        const valid = !(!value || (value instanceof Array && !value.length));

        handleChange({value, valid, empty: !valid})
    };


    render() {
        const {
            noOptionsMessage, options, placeholder, isDisabled,
            isSearchable, handleChange, selectedOption, formClassName,
            data, labelClass, style, transitionEnd, warning,
            selectContainerClass,
        } = this.props;

        if (!!data) {
            var {label} = data;
        }

        const selectImgClass = `${formClassName || 'default-select'}-container ${this.state.isMenuOpen ? 'open' : 'close'}`;

        return (
            <Fragment>
                {label &&
                <label style={style} onTransitionEnd={transitionEnd}
                       className={classNames('select-label-default', `${labelClass}`)}>
                    {data.label}
                </label>}
                <div
                    className={classNames('default-select-container', `${selectContainerClass}`, {'warning': warning})}
                    style={style} onTransitionEnd={transitionEnd}
                >
                    <Select
                        value={selectedOption}
                        onChange={this.onChange}
                        components={{Option: this.option, SingleValue: this.singleValue}}

                        isSearchable={isSearchable}
                        autoSize={false}
                        onMenuOpen={this.onOpen}
                        onMenuClose={this.onClose}

                        noOptionsMessage={() => noOptionsMessage}

                        placeholder={placeholder}

                        classNamePrefix={formClassName || 'default-select'}
                        className={selectImgClass}

                        options={options}
                        isDisabled={isDisabled}
                    />
                </div>
            </Fragment>
        )
    }
}
