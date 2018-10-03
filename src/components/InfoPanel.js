/*
Component representing the top panel showing the system info.
 */
import Cog from '@material-ui/icons/Settings';
import React, {PureComponent} from 'react';

import '@/assets/styles/Panel.scss';
import logo from '@/assets/img/logo1.svg'

export default class TopPanel extends PureComponent {
    render() {
        return (
            <div className="top-panel-container">
                <div className="top-panel-container-item top-panel-container-logo">
                    <div className='top-panel-container-item top-panel-container-logo-container'><img src={logo} alt="logo"/></div>
                </div>
                <div className="top-panel-container-item top-panel-container-version">
                    <div className="top-panel-container-version-label">OperationsControl</div>
                    &nbsp;
                    <div className='top-panel-container-version-value'>
                        0.1.0
                    </div>
                </div>
                <div className="top-panel-container-item top-panel-container-settings"><Cog/>
                </div>
            </div>
        )
    }
}