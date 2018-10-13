import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import MainMenu from '@/containers/MainMenu'
import Settings from '@/containers/Settings'
import Home from '@/components/Home/HomeContainer'

export default () =>
    (<Switch>
        <Route exact path='/' component={MainMenu}/>
        <Route path='/settings/' component={Settings}/>
        <Route path='/home/' component={Home}/>
    </Switch>)

