import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
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

    InfoPanel: {
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
        APPROVE_SUCCESS: 'Тапсырыс сәтті расталған!',
        REJECT_SUCCESS: 'Тапсырыс сәтті қабылданбады!',
        REGISTER_DRIVER_SUCCESS: 'Жүргізуші сәтті тіркелді!',
        REGISTER_OPERATOR_SUCCESS: 'Оператор сәтті тіркелді!',
    },

    Error: {
        NO_OPTIMAL_DRIVERS: 'Өкінішке орай, бұл тапсырыс уақытында аяқталмайды. Ол қабылданбады.',
        APPROVE_ERROR: 'Тапсырысты растау сәтсіз аяқталды. Желілік мәселелер болуы мүмкін.',
        REJECT_ERROR: 'Тапсырысты қабылдамады. Желілік мәселелер болуы мүмкін.',
        REGISTER_DRIVER_ERROR: 'Жүргізушіді тіркеу сәтсіз аяқталды. Желілік мәселелер болуы мүмкін.',
        REGISTER_OPERATOR_ERROR: 'Операторды тіркеу сәтсіз аяқталды. Желілік мәселелер болуы мүмкін.'
    },

    Settings: {
        SETTINGS: 'Параметрлер',
        BACK: 'Негізгі мәзірге оралу',
        ADMIN_PANEL: 'Басқару тақтасы',
        SELECT_NUMBER: 'Драйверлер санын таңдаңыз',
        PERSONAL_INFO: 'Жеке ақпарат',
        FULL_NAME: 'Толық аты',
        LICENSE_NUMBER: 'Лицензия нөмірі',
        POSITION: 'Жағдайы',
        ACCESS_LEVEL: 'Кіру деңгейі',
        LOGOUT: 'Шығу'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'Растауды күту',
        [constants.IN_PROGRESS]: 'Жеткізіледі',
        [constants.DELIVERED]: 'Жеткізілді',
        [constants.REJECTED]: 'Қабылданбады'
    },

    StaffRegistration:{
        REGISTRATION: 'Қызметкерлерді тіркеу',
        NAME: 'Атауы',
        NAME_NOTIFICATION: 'Атыңызды енгізіңіз',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Жарамсыз e-mail пішімі',
        PASSWORD: 'Пароль',
        PASSWORD_NOTIFICATION: 'Ең аз пароль ұзындығы -\n 6 таңба',
        REGISTER: 'Аккаунты жасау',
        STAFF_TYPE: 'Қызметкердің түрі',
        SELECT_STAFF_TYPE_PLACEHOLDER: 'Тіркелген қызметкерлердің түрін таңдаңыз',
        DRIVER: 'Жүргізуші',
        OPERATOR: 'Оператор',
        DROPZONE_PLACEHOLDER: 'Файлды осы жерде сүйреңіз немесе жүктеп салатын файлды таңдау үшін басыңыз.',
        DROPZONE_NOTIFICATION: 'Тек * .jpeg және * .png бейнелеріне қолдау көрсетіледі',

    }

};
