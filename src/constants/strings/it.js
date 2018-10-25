import constants from "@/constants";

export default {

    OrderList: {
        ID: 'id',
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

    InfoPanel:{
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
        APPROVE_SUCCESS: 'Ordine confermato con successo!'
    }

};
