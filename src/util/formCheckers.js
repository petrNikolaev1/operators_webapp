export const plainStringInput = {
    preValidate: value => value.length < 75,
    postValidate: value => value.length > 0,
};

export const plainPathInput = {
    preValidate: value => value.length < 200,
    postValidate: value => value.length > 0,
};

export const plainUsernameInput = {
    preValidate: value => /^(\S{0,50})$/.test(value),
    postValidate: value => /^(\S{1,50})$/.test(value),
};

export const passwordInput = {
    preValidate: value => /^(\S{0,50})$/.test(value),
    postValidate: value => /^(\S{1,50})$/.test(value),
};

export const plainINN_Input = {
    preValidate: value => /^(\d{0,12})$/.test(value),
    postValidate: value => /^(\d{12})$/.test(value),
};

export const plainINN_EntityInput = {
    preValidate: value => /^(\d{0,10})$/.test(value),
    postValidate: value => /^(\d{10})$/.test(value),
};

export const plainKKT_Num_Input = {
    preValidate: value => /^(\d{0,16})$/.test(value),
    postValidate: value => /^(\d{16})$/.test(value),
};

export const plainPortLongInput = {
    preValidate: value => /^(\d{0,8})$/.test(value),
    postValidate: value => /^(\d{1,8})$/.test(value),
};

export const plainPortShortInput = {
    preValidate: value => /^(\d{0,4})$/.test(value),
    postValidate: value => /^(\d{1,4})$/.test(value),
};

export const plainEmailInput = {
    preValidate: value => value.length < 75,
    postValidate: value => /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
};
