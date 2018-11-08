import React, {Component} from 'react'
import {Reply, ExitToApp, ExpandMore} from '@material-ui/icons';

import '@/assets/chatStyles/Back.scss'
import {Link} from 'react-router-dom'

export default class Back extends Component {

    render() {

        return (
            <div className="back">
                <Link className="back-button" to='/operator/'>
                    <Reply className='back-button-img'/> Back
                </Link>
            </div>
        )
    }
}
