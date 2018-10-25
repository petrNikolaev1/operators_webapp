import constants from "@/constants";

export default {

    OrderList: {
        ID: 'id',
        FROM: 'Котак бас',
        TO: 'Жеткізу орны',
        STATUS: 'Күйі',
        BIRTH_DATE: 'Өтініш күні',
        REFRESH: 'Жаңарту',
        EMPTY: 'Мұндай тапсырыстар жоқ',
        ERROR: 'Тапсырыстар тізімін алу кезінде қате пайда болды'
    },

    OrderItem: {
        ID: 'id',
        FROM: 'Ұшу щещес',
        TO: 'Жеткізу орны',
        STATUS: 'Күйі',
        FULL_TO: 'Толық котак жеме',
        FUll_FROM: 'Жеткізу мекен-жайы',
        WEIGHT: 'Салмақ',
        WORTH: 'Құны',
        DESCRIPTION: 'Сипаттама',
        PHONE_NUM: 'Телефон нөмірі',
        DUE_DATE: 'Жеткізу',
        BIRTH_DATE: 'Қолданба сыгын',
        APPROVE: 'Қабылдау',
        REJECT: 'Қабылдамау',
        ORDER_MODAL_TITLE: 'Ақпаратқа тапсырыс беру',
        [constants.PENDING_CONFIRMATION]: 'Растауды күту',
        [constants.IN_PROGRESS]: 'Жеткізіледі',
        [constants.DELIVERED]: 'Жеткізілді',
        [constants.REJECTED]: 'Қабылданбады'
    },

    Login: {
        LOGIN: 'Логин',
        PASSWORD: 'Пароль',
        ENTER: 'Войти',
        INVALID: 'Жарамсыз логин / пароль',
        NOT_ALL_FIELDS: 'Барлық өрістерді толтырыңыз'
    },

    InfoPanel:{
        SELECT_NO_LANG: 'Мұндай тіл жоқ',
        SELECT_LANG_PLACEHOLDER: 'Интерфейс тілі таңдаңыз'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Мекен-жайы',
        fullTo: 'Алушының мекен-жайы',
        status: 'Күйі',
        weight: 'Бөліктің салмағы',
        worth: 'Жүк тасымалдау құны',
        description: 'Сипаттама',
        birthDate: 'Өтінім жасау күні',
        title: 'Ақпаратқа тапсырыс беру',
        approve: 'Қабылдау үшін',
        reject: 'Қабылдамау',
        choose_placeholder: 'Драйверлерді таңдаңыз',
        SELECT_NO_DRIVERS: 'Жүргізуші жоқ'
    },

    Pagination: {
        first: 'Басы',
        previous: 'Жоғарғы',
        next: 'Келесі',
        last: 'Cоңғы'
    },

    SelectRoute: {
        distance: 'Қашықтық',
        time: 'Уақыт',
        approve: 'Қабылдау',
        cancel: 'Болдырмау',
    },

    Success: {
        APPROVE_SUCCESS: 'Тапсырыс сәтті расталған!'
    }

};
