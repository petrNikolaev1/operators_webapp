import React, {Component} from 'react'

import '@/assets/styles/Notification.scss'

export default class Notification extends Component {

    constructor(props) {
        super(props);
        const {mounted} = this.props;
        this.state = {
            show: mounted,
            style: {
                opacity: 0,
                transition: 'all 2s ease',
            },
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.mounted !== this.props.mounted || nextState.style.opacity !== this.state.style.opacity ||
            nextState.show !== this.state.show || nextProps.text !== this.props.text
    }

    componentDidUpdate(prevProps) {
        const {mounted: mountedOld, text: textOld} = prevProps;
        const {mounted: mountedNew, text: textNew} = this.props;
        if (mountedNew === mountedOld && textNew === textOld) return;
        if (!mountedNew) return this.unMountStyle();
        this.setState({
            show: true
        });
        if (textNew !== textOld) {
            this.setState({style: {opacity: 0}})
        }
        setTimeout(this.mountStyle, 10)
    }

    unMountStyle = () => {
        this.setState({
            style: {
                opacity: 0,
                transition: 'all 1s ease',
            }
        })
    };

    mountStyle = () => {
        this.setState({
            style: {
                opacity: 1,
                transition: 'all 1s ease',
            }
        })
    };

    componentDidMount() {
        if (this.state.show) {
            setTimeout(this.mountStyle, 10)
        }
    }

    transitionEnd = () => {
        if (!this.props.mounted) {
            this.setState({
                show: false
            });
        }
    };

    render() {
        const {text, notificationClass} = this.props;
        const {show, style} = this.state;

        return (
            show ?
                <span
                    ref={(hint) => this.hint = hint}
                    style={{...style}}
                    onTransitionEnd={this.transitionEnd}
                    className={notificationClass}>
                    {text.split('\n').map((item, key) => (<span key={key}>{item}<br/></span>))}
                </span>
                : null
        )
    }
}
