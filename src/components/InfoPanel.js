import {Settings, Home, Chat} from '@material-ui/icons';
import React, {PureComponent} from 'react';

import '@/assets/styles/Panel.scss';
import translate from '@/hocs/Translate'
import logo from '@/assets/img/logo1_colored.svg'
import Select from "@/common/Select";
import {langsOptions, langToSelectedOption} from "@/util/lang.js";
import connect from "react-redux/es/connect/connect";
import {changeLang} from "@/actions/stringActions";
import {Link} from 'react-router-dom'

@connect(
    store => ({
        language: store.stringReducer.language
    }), {changeLang}
)
@translate('InfoPanel')
export default class InfoPanel extends PureComponent {
    render() {
        const {strings, language, changeLang} = this.props;
        return (
            <div className="top-panel-container">
                <div className="top-panel-container-item top-panel-container-logo">
                    <div className='top-panel-container-item top-panel-container-logo-container'><img src={logo}
                                                                                                      alt="logo"/></div>
                </div>
                <div className="top-panel-container-item top-panel-container-version">
                    <div className="top-panel-container-version-label">OperationsControl</div>
                    &nbsp;
                    <div className='top-panel-container-version-value'>
                        0.1.0
                    </div>
                </div>
                <div className='top-panel-container-item top-panel-container-lang'>
                    <Select
                        onChange={changeLang}
                        selectedOption={langToSelectedOption(language)}
                        isSerchable={true}
                        noOptionsMessage={strings.SELECT_NO_LANG}
                        placeholder={strings.SELECT_LANG_PLACEHOLDER}
                        options={langsOptions}
                        formClassName='default-select'
                    />
                </div>
                <Link className="top-panel-container-item top-panel-container-home" to='/operator/chat/'>
                    <Chat/>
                </Link>
                <Link className="top-panel-container-item top-panel-container-home" to='/operator/home/'>
                    <Home/>
                </Link>
                <Link className="top-panel-container-item top-panel-container-settings" to='/operator/settings/'>
                    <Settings/>
                </Link>
            </div>
        )
    }
}
