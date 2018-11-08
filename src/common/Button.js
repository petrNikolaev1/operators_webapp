import React, {Component} from 'react'

import '@/assets/styles/Button.scss'

export default class Button extends Component {
    render() {
        const {onClick, label} = this.props;
        return (
            <div className="button-container" onClick={onClick}>
                {label}
            </div>
        )
    }
}
