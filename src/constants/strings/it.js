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
        APPROVE_SUCCESS: 'Ordine confermato con successo!',
        REJECT_SUCCESS: 'Ordine rifiutato con successo!',
        REGISTER_DRIVER_SUCCESS: 'Il driver è stato registrato con successo!',
        REGISTER_OPERATOR_SUCCESS: 'L\'operatore è stato registrato con successo!',
    },

    Error: {
        NO_OPTIMAL_DRIVERS: 'Purtroppo, questo ordine non può essere completato in tempo. Sarebbe respinto.',
        APPROVE_ERROR: 'Impossibile confermare l\'ordine. Potrebbero esserci problemi di rete.',
        REJECT_ERROR: 'Impossibile declinare l\'ordine. Potrebbero esserci problemi di rete.',
        REGISTER_DRIVER_ERROR: 'Impossibile registrare il driver. Potrebbero esserci problemi di rete.',
        REGISTER_OPERATOR_ERROR: 'Impossibile registrare l\'operatore. Potrebbero esserci problemi di rete.'
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
        REGISTRATION: 'Registrazione del personale',
        NAME: 'Nome',
        NAME_NOTIFICATION: 'Per favore inserisci il tuo nome',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Formato email non valido',
        PASSWORD: 'Password',
        PASSWORD_NOTIFICATION: 'La lunghezza minima della password -\n 6 simboli',
        REGISTER: 'Crea un account',
        STAFF_TYPE: 'Tipo di personale',
        SELECT_STAFF_TYPE_PLACEHOLDER: 'Seleziona il tipo di personale registrato',
        DRIVER: 'Automobilista',
        OPERATOR: 'Operatore',
        DROPZONE_PLACEHOLDER: 'Trascina un file qui o fai clic per selezionare un file da caricare',
        DROPZONE_NOTIFICATION: 'Sono supportate solo le immagini * .jpeg e * .png',

    }
};
