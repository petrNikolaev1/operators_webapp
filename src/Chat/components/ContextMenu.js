import React, {Component, Fragment} from 'react'

import '@/assets/chatStyles/ContextMenu.scss'

/*
Component representing custom Context Menu for different interactions with messages (reply, edit, copy e.g.)
 */

export default class ContextMenu extends Component {

    copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    };

    editOption = (isVisible, handleContextMenuEdit, editable) => {
        if (isVisible) {
            return (
                <div
                    onClick={handleContextMenuEdit}
                    className={editable ? 'context-menu-option' : 'context-menu-option context-menu-option-disabled'}>
                    Edit
                </div>
            )
        }
        return null
    };

    replyOption = (isVisible, handleContextMenuReply) => {
        if (isVisible) {
            return (
                <div
                    onClick={handleContextMenuReply}
                    className='context-menu-option'>
                    Reply
                </div>
            )
        }
    };

    render() {
        const {handleContextMenuEdit, editable, text, isEditVisible, isReplyVisible, handleContextMenuReply} = this.props;
        return (
            <Fragment>
                {this.editOption(isEditVisible, handleContextMenuEdit, editable)}
                {this.replyOption(isReplyVisible, handleContextMenuReply)}
                <div className="context-menu-option" onClick={() => this.copyToClipboard(text)}>Copy</div>
            </Fragment>
        )
    }
}
