import React, {Component} from 'react'

import '@/assets/chatStyles/PeopleList.scss'
import UserItem from "../components/UserItem";

/*
Container that is responsible for interactions with the
list of chat users and its correct representation.
 */

export default class PeopleList extends Component {

    render() {

        return (
            <div className="people-list" id="people-list">
                <ul className="list">
                    <UserItem id={1} key={1} username={'Аза'}/>
                    <UserItem id={2} key={2} username={'И'}/>
                    <UserItem id={3} key={3} username={'Минтимер'}/>
                    <UserItem id={4} key={4} username={'Тимур'}/>
                </ul>
            </div>
        )
    }
}
