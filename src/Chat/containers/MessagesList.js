import React, {Component, Fragment} from 'react'


import '@/assets/chatStyles/MessagesList.scss'
import ChatHeader from "../components/ChatHeader";
import MessageItem from "../components/MessageItem";
import ChatControl from "../components/ChatControl";

/*
Container that is responsible for representing chat appropriately:
in accordance with the chosen user and previously sent messages, typed data, etc...
 */


export default class MessagesList extends Component {

    render() {
        return (
            <Fragment>
                <ChatHeader/>

                <div className="chat-history">
                    <ul>
                        <MessageItem
                            username={'Николай'}
                            time={1540581363963}
                            author={'Петр'}
                            text={'Привет, братан! Запили интерфейс чатика плиз!'}
                            color={'#01BABF'} // $dooglysColor
                            edited={false}
                        />
                        <MessageItem
                            username={'Николай'}
                            time={1540581363963}
                            author={'Николай'}
                            text={'Никаких проблем, коллега! Все будет готово!'}
                            color={'#68cf4c'} // $messageMyColor
                            edited={false}
                        />
                        <MessageItem
                            username={'Николай'}
                            time={1540581363963}
                            author={'Петр'}
                            text={'Красавчик! Умница!'}
                            color={'#01BABF'} // $dooglysColor
                            edited={true}
                        />
                        <MessageItem
                            username={'Николай'}
                            time={1540581363963}
                            author={'Николай'}
                            text={'Да как тут откажешь! Работа, конечно, тяжелая, зато платят мало..'}
                            color={'#68cf4c'} // $messageMyColor
                            edited={false}
                        />
                    </ul>
                </div>

                <ChatControl/>
            </Fragment>
        )
    }
}
