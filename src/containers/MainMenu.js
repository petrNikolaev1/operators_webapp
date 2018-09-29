import React, {Component, Fragment} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import 'assets/styles/MainMenu.css'
import logo2 from 'assets/img/logo2.svg'

class MainMenu extends Component {
    render() {
        return (
            <div className='main-menu-container'>
                <div className='main-menu-container-text'>
                    Let`s build the best interface ever!
                </div>
                <img src={logo2}/>
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