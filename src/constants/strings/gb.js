import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
        FROM: 'Departure address',
        TO: 'Delivery address',
        STATUS: 'Status',
        BIRTH_DATE: 'Creation date',
        REFRESH: 'Refresh',
        EMPTY: 'No such orders',
        ERROR: 'An error occurred while getting the list of orders'
    },

    OrderItem: {
        ID: 'id',
        FROM: 'Departure address',
        TO: 'Delivery address',
        STATUS: 'Status',
        FUll_FROM: 'Full departure address',
        FUll_TO: 'Full delivery address',
        WEIGHT: 'Weight',
        WORTH: 'Worth',
        DESCRIPTION: 'Description',
        PHONE_NUM: 'Phone number',
        DUE_DATE: 'Delivery date',
        BIRTH_DATE: 'Birth date',
        APPROVE: 'Approve',
        REJECT: 'Reject',
        ORDER_MODAL_TITLE: 'Information about order',
        [constants.PENDING_CONFIRMATION]: 'Pending',
        [constants.IN_PROGRESS]: 'Delivering',
        [constants.DELIVERED]: 'Delivered',
        [constants.REJECTED]: 'Rejected'
    },

    Login: {
        LOGIN: 'Login',
        PASSWORD: 'Password',
        ENTER: 'Enter',
        INVALID: 'Invalid login/password',
        NOT_ALL_FIELDS: 'Please, fill all fields'
    },

    InfoPanel:{
        SELECT_NO_LANG: 'No such language',
        SELECT_LANG_PLACEHOLDER: 'Choose interface language'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Departure address',
        fullTo: 'Destination address',
        status: 'Status',
        weight: 'Weight of the parcel',
        worth: 'Cost of the parcel',
        description: 'Description',
        birthDate: 'Creation date',
        title: 'Title',
        approve: 'Approve',
        reject: 'Reject',
        choose_placeholder: 'Choose drivers',
        SELECT_NO_DRIVERS: 'Driver do not exist'
    },

    Pagination: {
        first: 'First',
        previous: 'Previous',
        next: 'Next',
        last: 'Last'
    },

    SelectRoute: {
        distance: 'Distance',
        time: 'Time',
        approve: 'Approve',
        cancel: 'Cancel'
    },

    Success: {
        APPROVE_SUCCESS: 'Order successfully confirmed!'
    },

    Settings: {
        SETTINGS: 'Settings',
        BACK: 'Back to main menu',
        ADMIN_PANEL: 'Administration panel',
        SELECT_NUMBER: 'Select number of drivers',
        PERSONAL_INFO: 'Personal information',
        FULL_NAME: 'Full name',
        LICENSE_NUMBER: 'License number',
        POSITION: 'Position',
        ACCESS_LEVEL: 'Access level',
        LOGOUT: 'Logout'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'Pending',
        [constants.IN_PROGRESS]: 'Delivering',
        [constants.DELIVERED]: 'Delivered',
        [constants.REJECTED]: 'Rejected'
    },

    CreateOrder: {
        CREATE_ORDER: 'Create order'
    },

    CustomerRegistration:{
        REGISTRATION: 'CustomerRegistration',
        NAME: 'Name',
        NAME_NOTIFICATION: 'Please, enter your name',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Invalid email format',
        PASSWORD: 'Password',
        PASSWORD_NOTIFICATION: 'The minimum password length -\n 6 symbols',
        REGISTER: 'Create an account'
    }
};