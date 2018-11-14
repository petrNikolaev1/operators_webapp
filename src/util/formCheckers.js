export const stringInput = {
    preValidate: value => value.length < 75,
    postValidate: value => value.length > 0,
};

export const usernameInput = {
    preValidate: value => /^(\S{0,50})$/.test(value),
    postValidate: value => /^(\S{1,50})$/.test(value),
};

export const passwordInput = {
    preValidate: value => /^(\S{0,50})$/.test(value),
    postValidate: value => /^(\S{6,50})$/.test(value),
};

export const weightInput = {
    preValidate: value => /^\d*(\.\d{0,3})?$/.test(value),
    postValidate: value => /^\d+(\.\d{1,3})?$/.test(value),
};

export const amountInput = {
    preValidate: value => /^\d*(\.\d{0,2})?$/.test(value),
    postValidate: value => /^\d+(\.\d{1,2})?$/.test(value),
};

export const emailInput = {
    preValidate: value => /^(\S{0,75})$/.test(value),
    postValidate: value => /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
};
