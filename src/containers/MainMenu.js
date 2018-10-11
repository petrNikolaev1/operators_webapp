import React, {Component, Fragment} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import OrderList from "@/components/Orders/OrderList";
import Login from "@/components/Login";
import connect from "react-redux/es/connect/connect";
import Loading from "@/common/Loading";
import SelectRoute from "@/components/SelectRoute"

@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        loginShow: store.viewReducer.loginShow
    }), {}
)
export default class MainMenu extends Component {
    render() {
        const {loadingShow, loginShow} = this.props;
        return (
            <Fragment>
                {/*{loginShow && <Login/>}*/}
                {/*{!loginShow && <div className='main-menu-container'>*/}
                {/*<InfoPanel/>*/}
                {/*<OrderList/>*/}
                {/*</div>}*/}
                {/*{loadingShow && <Loading/>}*/}
                <SelectRoute origin={{lat: 52.359573, lng: 4.835453}}
                             destination={{lat: 50.141228, lng: 8.673017}}/>
            </Fragment>
        )
    }
}
