import React, {Component, Fragment} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import 'assets/styles/MainMenu.css'
import TopPanel from "components/InfoPanel";

class MainMenu extends Component {
    render() {
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