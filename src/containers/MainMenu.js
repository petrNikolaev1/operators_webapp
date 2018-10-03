import React, {Component, Fragment} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Translate from '@/hocs/Translate'
import '@/assets/styles/MainMenu.scss'
import TopPanel from "@/components/InfoPanel";

@Translate('NumPad')
class MainMenu extends Component {

    render() {
        const {strings} = this.props;
        return (
            <div className='main-menu-container'>
                <TopPanel/>
            </div>
        )
    }
}

const
    mapStateToProps = (state) => {
        return {}
    };


const
    mapDispatchToProps = (dispatch) => {
        return {}
    };

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)