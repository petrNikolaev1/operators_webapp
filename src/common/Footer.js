import React, {Component} from 'react';
import Assign from '@material-ui/icons/AssignmentTurnedIn';
import classNames from 'classnames';

import '@/assets/styles/Footer.scss'

export default class Footer extends Component {

    constructor(props) {
        super(props);
        const {mounted, animationDisabled} = this.props;
        this.state = {
            show: mounted,
            style: {
                opacity: animationDisabled ? 1 : 0,
                transition: 'all 2s ease',
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.mounted !== this.props.mounted || nextState.style.opacity !== this.state.style.opacity ||
            nextState.show !== this.state.show
    }

    componentDidUpdate(prevProps) {
        const {mounted: mountedOld} = prevProps;
        const {mounted: mountedNew} = this.props;
        if (mountedNew === mountedOld) return;
        if (!mountedNew) return this.unMountStyle();
        this.setState({
            show: true
        });
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
        if (this.state.show && !this.props.animationDisabled) {
            setTimeout(this.mountStyle, 10)
        }
    }

    transitionEnd = () => {
        if (!this.props.mounted) {
            this.setState({
                show: false
            });
            this.props.unmount()
        }
    };

    render() {
        const {handleClick, text, footerContainerClass, footerLabelClass, footerImgClass} = this.props;
        return (
            this.state.show ?
                <div onClick={handleClick}
                     style={this.state.style}
                     onTransitionEnd={this.transitionEnd}
                     className={classNames('footer-container-default', `${footerContainerClass}`)}>
                    <div className={classNames('footer-container-default-img', `${footerImgClass}`)}>
                        <Assign/>
                    </div>
                    <div className={classNames('footer-container-default-label', `${footerLabelClass}`)}>
                        {text}
                    </div>
                </div>
                : null
        )
    }
}
