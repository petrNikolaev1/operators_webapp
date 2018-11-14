import React, {Component, Fragment} from 'react'
import classNames from 'classnames'
import Dropzone from "react-dropzone";

import '@/assets/styles/Dropzone.scss'

export default class DropZone extends Component {

    onDrop = (sslCertificateAccepted) => {
        const {handleChange} = this.props;
        const valid = !!sslCertificateAccepted.length;

        clearTimeout(this.notificationsResetTimeout);

        if (valid) {
            handleChange({
                value: sslCertificateAccepted[0],
                valid: true,
                empty: false,
                notificationShown: false
            })
        } else {
            this.notificationsResetTimeout = setTimeout(() => {
                handleChange({notificationShown: false})
            }, 5000);

            handleChange({
                valid: false,
                empty: true,
                notificationShown: true
            })
        }
    };

    render() {
        const {
            data, style, transitionEnd, value, placeholder, warning, valid,
            dropzonePlaceholderClass, dropzoneContainerClass, dropzoneSuccessClass,
            dropzoneSuccessLabelClass, dropzoneSuccessValueClass, labelClass,
        } = this.props;

        if (!!data) {
            var {label} = data;
        }

        return (
            <Fragment>
                {label &&
                <label style={style} onTransitionEnd={transitionEnd}
                       className={classNames('default-dropzone-label', `${labelClass}`)}>
                    {data.label}
                </label>}

                <div style={style} onTransitionEnd={transitionEnd}
                     className={classNames('default-dropzone-container-main')}>
                    <Dropzone
                        disableClick={false}
                        onDrop={this.onDrop}
                        accept="image/jpeg, image/png"
                        className={classNames('default-dropzone-container', `${dropzoneContainerClass}`, {'warning': warning})}
                    >

                        {!valid &&
                        <div className={classNames('default-dropzone-placeholder', `${dropzonePlaceholderClass}`)}>
                            {placeholder}
                        </div>}

                        {!!valid &&
                        <div className={classNames('default-dropzone-success', `${dropzoneSuccessClass}`)}>
                            <div
                                className={classNames('default-dropzone-success-label', `${dropzoneSuccessLabelClass}`)}>
                                Загруженный файл:
                            </div>
                            <div
                                className={classNames('default-dropzone-success-value', `${dropzoneSuccessValueClass}`)}>
                                {value.name}
                            </div>
                        </div>}

                    </Dropzone>
                </div>
            </Fragment>
        )
    }
}
