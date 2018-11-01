import React, {Component, Fragment} from 'react'

import OperatorPhoto from '@/assets/img/personal_photo.jpg'
import '@/assets/chatStyles/LoggedIn.scss'
import Select from "@/common/Select";

export default class LoggedIn extends Component {
    render() {
        return (
            <Fragment>
                <div className='logged-in'>
                    <div className='logged-in-photo' style={{backgroundImage: `url(${OperatorPhoto})`}}/>
                    <div className='logged-in-username'>
                        {`Николай Матяшов`}
                    </div>
                </div>
                <div className="search">
                    <Select
                        // onChange={changeLang}
                        // selectedOption={langToSelectedOption(language)}
                        isSerchable={true}
                        noOptionsMessage={'No options'}
                        placeholder={'Search'}
                        // options={langsOptions}
                        formClassName='default-select'
                    />
                </div>
            </Fragment>
        )
    }
}

