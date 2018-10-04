/*
Hoc for showing a child component before.
 */

import React, {Component} from 'react';
import ReactResizeDetector from 'react-resize-detector';


export default (WrapperClass, transitionEnabled = true) => (ChildComponent) => {

    return class showBeforeHOC extends Component {

        centerStyle = {
            top: '50%',
            left: '50%',
            position: 'fixed',
        };

        verOverflowStyle = {
            top: '10vh',
            marginBottom: '10vh',
            left: '50%',
            position: 'absolute',
        };

        state = {
            yOffset: null,
            xOffset: null,
            posStyle: this.centerStyle,
            windowHeight: null,
            transitionStyle: null,
        };


        transform = () => {
            const {xOffset, yOffset, windowHeight: windowHeightOld} = this.state;
            const height = this.divElement.clientHeight;
            const width = this.divElement.clientWidth;
            const roundedHalfHeight = Math.round(height / 20) * 10;
            const roundedHalfWidth = Math.round(width / 20) * 10;
            const windowHeight = window.innerHeight;
            if (roundedHalfWidth === xOffset && roundedHalfHeight === yOffset
                && windowHeight === windowHeightOld) return;
            if (windowHeight - height < 50) {
                return this.setState({
                    xOffset: roundedHalfWidth,
                    yOffset: 0,
                    posStyle: this.verOverflowStyle,
                    windowHeight: windowHeight
                })
            }
            this.setState({
                xOffset: roundedHalfWidth,
                yOffset: roundedHalfHeight,
                posStyle: this.centerStyle,
                windowHeight: windowHeight
            });
        };

        componentDidMount() {
            this.transform();
            if (transitionEnabled) {
                this.transitionTimeout =
                    setTimeout(() => this.setState({transitionStyle: {transition: 'transform 0.5s ease-in-out'}}), 10);
            }
            window.addEventListener("resize", this.transform);
        }

        componentWillUnmount() {
            clearTimeout(this.transitionTimeout);
            window.removeEventListener("resize", this.transform);
        }

        render() {
            const {xOffset, yOffset, posStyle, transitionStyle} = this.state;
            const transformStyle = {transform: `translate(-${xOffset}px, -${yOffset}px)`};
            const wrapperClass = `${WrapperClass} -show`;
            const style = {...posStyle, ...transformStyle, ...transitionStyle};

            return (
                <div className={wrapperClass} style={style}
                     ref={(divElement) => this.divElement = divElement}>
                    <ChildComponent {...this.props}/>
                    <ReactResizeDetector handleWidth handleHeight onResize={this.transform}/>
                </div>
            )
        }
    }
}