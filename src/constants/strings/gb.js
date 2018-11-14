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
        APPROVE_SUCCESS: 'Заказ успешно подтвержден!',
        REJECT_SUCCESS: 'Заказ успешно отклонен!',
        REGISTER_DRIVER_SUCCESS: 'Водитель успешно зарегистрирован!',
        REGISTER_OPERATOR_SUCCESS: 'Оператор успешно зарегистрирован!',
    },

    Error: {
        NO_OPTIMAL_DRIVERS: 'К сожалению, данный заказ не может быть выполнен в срок. Его придется отклонить',
        APPROVE_ERROR: 'Не удалось подтвердить заказ. Возможны проблемы с сетью',
        REJECT_ERROR: 'Не удалось отклонить заказ. Возможны проблемы с сетью',
        REGISTER_DRIVER_ERROR: 'Не удалось зарегистрировать водителя. Возможны проблемы с сетью',
        REGISTER_OPERATOR_ERROR: 'Не удалось зарегистрировать оператора. Возможны проблемы с сетью'
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

    StaffRegistration:{
        REGISTRATION: 'StaffRegistration',
        NAME: 'Name',
        NAME_NOTIFICATION: 'Please, enter your name',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Invalid email format',
        PASSWORD: 'Password',
        PASSWORD_NOTIFICATION: 'The minimum password length -\n 6 symbols',
        REGISTER: 'Create an account',
        STAFF_TYPE: 'Staff type',
        SELECT_STAFF_TYPE_PLACEHOLDER: 'Select the type of a registered staff',
        DRIVER: 'Driver',
        OPERATOR: 'Operator',
        DROPZONE_PLACEHOLDER: 'Перетащите сюда файл или кликните, чтобы выбрать файл для загрузки',
        DROPZONE_NOTIFICATION: 'Only *.jpeg and *.png images are supported',

    }
};
