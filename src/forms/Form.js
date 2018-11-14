import React, {Component, Fragment} from 'react'

import {StringInput, AmountInput, WeightInput, EmailInput, PasswordInput} from '@/forms/Input'
import Select from '@/forms/Select'
import DropZone from '@/forms/DropZone'
import SelectLocation from '@/forms/SelectLocation'
import DateTime from '@/forms/DateTime'
import constants from '@/constants'

export default class Form extends Component {

    constructor(props) {
        super(props);
        const {mounted, type} = this.props;
        this.state = {
            show: mounted,
            type,
            style: {
                opacity: 0,
                transition: 'all 2s ease',
            }
        }
    }

    componentDidUpdate(prevProps) {
        const {mounted: mountedNew, type: typeNew} = this.props;
        const {mounted: mountedOld, type: typeOld} = prevProps;
        if (mountedNew === mountedOld && typeNew === typeOld) return;

        if (!mountedNew) {
            this.setState({type: typeNew});
            this.unMountStyle();
            return
        }

        this.setState({
            show: true,
            type: typeNew
        });

        if (typeNew !== typeOld) {
            this.setState({style: {opacity: 0}})
        }

        setTimeout(this.mountStyle, 10)
    }

    componentDidMount() {
        if (this.state.show) {
            setTimeout(this.mountStyle, 10)
        }
    }

    unMountStyle = () => {
        if (this.state.style.opacity === 0) return;
        this.setState({
            style: {
                opacity: 0,
                transition: 'all 1s ease',
            }
        })
    };

    mountStyle = () => {
        if (this.state.style.opacity === 1) return;
        this.setState({
            style: {
                opacity: 1,
                transition: 'all 1s ease',
            }
        })
    };

    transitionEnd = () => {
        const {value, handleChange} = this.props;
        if (!this.props.mounted) {
            this.setState({
                show: false
            });
        }
    };

    render() {
        const {containerClass} = this.props;

        if (!this.state.show) {
            return (
                <Fragment>
                    <div style={this.state.style} onTransitionEnd={this.transitionEnd}
                         className={containerClass}>
                    </div>
                    <div style={this.state.style} onTransitionEnd={this.transitionEnd}
                         className={containerClass}>
                    </div>
                </Fragment>
            )
        }

        switch (this.state.type) {
            case constants.SELECT_LOCATION:
                return (
                    <SelectLocation
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.STRING_INPUT:
                return (
                    <StringInput
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.AMOUNT_INPUT:
                return (
                    <AmountInput
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.WEIGHT_INPUT:
                return (
                    <WeightInput
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.DATETIME:
                return (
                    <DateTime
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.EMAIL_INPUT:
                return (
                    <EmailInput
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.PASSWORD_INPUT:
                return (
                    <PasswordInput
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.SELECT:
                return (
                    <Select
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.DROPZONE:
                return (
                    <DropZone
                        {...this.props}
                        style={this.state.style}
                        transitionEnd={this.transitionEnd}
                    />
                );
            case constants.TRANSPARENT_FORM:
                return (
                    <Fragment>
                        <div className={containerClass}/>
                        <div className={containerClass}/>
                    </Fragment>
                );
            default:
                return null
        }
    }
}
