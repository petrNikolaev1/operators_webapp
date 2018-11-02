export const mapMessage = message => ({
    id: message.id,
    time: message.posted_date,
    chat_id: message.driver.id,
    from_id: !message.is_driver_initiator && !!message.operator ? message.operator.id : message.driver.id,
    from_name: !message.is_driver_initiator && !!message.operator ? message.operator.name : message.driver.name,
    is_driver_initiator: message.is_driver_initiator,
    text: message.text
});

export const validateMessage = message => Object.values(message).every(value => value !== undefined && value !== null);

export const CHAT_HISTORY_WINDOW_SIZE = 10;

export const getLimitAndPage = current_size => {
    let page = Math.floor(current_size / CHAT_HISTORY_WINDOW_SIZE);

    let limit = CHAT_HISTORY_WINDOW_SIZE;
    let uselessLimit = 0;

    if (page !== 0) {
        uselessLimit = current_size % CHAT_HISTORY_WINDOW_SIZE;
    }

    let usefulLimit = CHAT_HISTORY_WINDOW_SIZE - uselessLimit;

    // console.log(limit, page, uselessLimit);
    // console.log('------------')

    return {limit, page, uselessLimit}
};
