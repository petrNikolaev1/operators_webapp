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
