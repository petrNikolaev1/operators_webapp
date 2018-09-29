export const setCaretPosition = (ctrl, pos) => {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        const range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

export const getCaretPosition = (ctrl) => {
    if (document.selection) {
        ctrl.focus();
        let range = document.selection.createRange();
        let rangelen = range.text.length;
        range.moveStart('character', -ctrl.value.length);
        return range.text.length - rangelen;
    }
    else if (ctrl.selectionStart || ctrl.selectionStart === '0') {
        return ctrl.selectionStart
    } else {
        return 0;
    }
};