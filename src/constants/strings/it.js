import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
        FROM: 'Indirizzo di partenza',
        TO: 'Indirizzo di consegna',
        STATUS: 'Stato',
        BIRTH_DATE: 'Data di nascita',
        REFRESH: 'Aggiornare',
        EMPTY: 'Nessun ordine del genere',
        ERROR: 'Si è verificato un errore durante il recupero dell\'elenco degli ordini'
    },

    OrderItem: {
        ID: 'id',
        FROM: 'Indirizzo di partenza',
        TO: 'Indirizzo di consegna',
        STATUS: 'Stato',
        FUll_FROM: 'Indirizzo di partenza completo',
        FUll_TO: 'Indirizzo di consegna completo',
        WEIGHT: 'Peso',
        WORTH: 'Costo',
        DESCRIPTION: 'Descrizione',
        PHONE_NUM: 'Numero di telefono',
        DUE_DATE: 'Data di consegna',
        BIRTH_DATE: 'Data di nascita',
        APPROVE: 'Approvare',
        REJECT: 'Rifiutare',
        ORDER_MODAL_TITLE: 'Informazioni sull\'ordine',
        [constants.PENDING_CONFIRMATION]: 'In attesa di',
        [constants.IN_PROGRESS]: 'Consegna',
        [constants.DELIVERED]: 'Consegnato',
        [constants.REJECTED]: 'Respinto'
    },

    Login: {
        LOGIN: 'Login',
        PASSWORD: 'Password',
        ENTER: 'Entrare',
        INVALID: 'Login / password non validi',
        NOT_ALL_FIELDS: 'Per favore compila tutti i campi'
    },

    InfoPanel: {
        SELECT_NO_LANG: 'Non esiste un tale linguaggio',
        SELECT_LANG_PLACEHOLDER: 'Seleziona la lingua dell\'interfaccia'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Indirizzo di partenza',
        fullTo: 'Indirizzo del destinatario',
        status: 'Stato',
        weight: 'Peso del pacco',
        worth: 'Spese di spedizione',
        description: 'Descrizione',
        birthDate: 'Data di creazione dell\'applicazione',
        title: 'Informazioni per l\'ordine',
        approve: 'Per accettare',
        reject: 'Rifiutare',
        choose_placeholder: 'selezionare i driver',
        SELECT_NO_DRIVERS: 'Il driver non esiste'
    },

    Pagination: {
        first: 'Primo',
        previous: 'Precedente',
        next: 'Seguente',
        last: 'Ultimo'
    },

    SelectRoute: {
        distance: 'Distanza',
        time: 'Tempo',
        approve: 'Approvare',
        cancel: 'Annulla'
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
        SETTINGS: 'Impostazioni',
        BACK: 'Ritorna al menu principale',
        ADMIN_PANEL: 'Pannello di amministrazione',
        SELECT_NUMBER: 'Seleziona il numero di driver',
        PERSONAL_INFO: 'Informazione personale',
        FULL_NAME: 'Nome e cognome',
        LICENSE_NUMBER: 'Numero di licenza',
        POSITION: 'Ufficio',
        ACCESS_LEVEL: 'Livello di accesso',
        LOGOUT: 'Disconnettersi'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'In attesa di',
        [constants.IN_PROGRESS]: 'Consegna',
        [constants.DELIVERED]: 'Consegnato',
        [constants.REJECTED]: 'Respinto'
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
