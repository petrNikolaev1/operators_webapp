import React, {Component} from 'react'

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


            if (res.valid) {
                clearTimeout(this.notificationsResetTimeout);
                res.onBlurNotificationShown = !res.valid;
            }

            this.props.handleChange(res)
        };

        componentDidMount() {
            const {value, handleChange} = this.props;
            const inputValue = value || '';

            let res = {};

            // The value is already considered as acceptable.
            res.value = inputValue;

            // To determine whether the value is empty.
            res.empty = inputValue === '';

            // To determine whether the value is valid.
            res.valid = !!validatorObj.postValidate(inputValue);

            handleChange(res)
        };

        componentWillUnmount(){
            clearTimeout(this.notificationsResetTimeout);
        }

        onBlur = () => {
            const {valid, empty, handleChange} = this.props;
            clearTimeout(this.notificationsResetTimeout);
            if (!empty && !valid) {
                this.notificationsResetTimeout = setTimeout(() => {
                    handleChange({onBlurNotificationShown: false})
                }, 2000)
            }
            !empty && handleChange({onBlurNotificationShown: !valid})
        };

        render() {
            return (
                <ChildComponent
                    {...this.props}
                    onBlur={this.onBlur}
                    maskOnChange={this.onChange}
                    reactInputMask={reactInputMask}
                />
            )
        }
    }
}
