import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
        FROM: 'Место отправления',
        TO: 'Место доставки',
        STATUS: 'Статус',
        BIRTH_DATE: 'Дата заявки',
        REFRESH: 'Обновить',
        EMPTY: 'Нет таких заказов',
        ERROR: 'Возникла ошибка при получении списка заказов',
    },

    OrderItem: {
        ID: 'Номер',
        FROM: 'Место отправления',
        TO: 'Место доставки',
        STATUS: 'Статус',
        FUll_FROM: 'Адрес отправки',
        FUll_TO: 'Адрес доставки',
        WEIGHT: 'Вес',
        WORTH: 'Стоимость',
        DESCRIPTION: 'Описание',
        PHONE_NUM: 'Номер телефона',
        DUE_DATE: 'Срок выполнения заявки',
        BIRTH_DATE: 'Дата заявки',
        APPROVE: 'Принять',
        REJECT: 'Отклонить',
        ORDER_MODAL_TITLE: 'Информация о заказе',
        [constants.PENDING_CONFIRMATION]: 'Ожидает подтверждения',
        [constants.IN_PROGRESS]: 'Доставляется',
        [constants.DELIVERED]: 'Доставлен',
        [constants.REJECTED]: 'Отклонен',
    },

    Login: {
        LOGIN: 'Логин',
        PASSWORD: 'Пароль',
        ENTER: 'Войти'
    },

    InfoPanel: {
        SELECT_NO_LANG: 'Такого языка нет',
        SELECT_LANG_PLACEHOLDER: 'Выберите язык интерфейса'
    },

    OrderDrivers: {
        id: 'id',
        fullFrom: 'Адрес отправления',
        fullTo: 'Адрес получателя',
        status: 'Статус',
        weight: 'Вес посылки',
        worth: 'Стоимость посылки',
        description: 'Описание',
        birthDate: 'Дата создания заявки',
        title: 'Информация о водителях',
        approve: 'Принять',
        reject: 'Отклонить',
        choose_placeholder: 'Выберите водителей'
    },

    Pagination: {
        first: 'Начало',
        previous: 'Назад',
        next: 'Вперед',
        last: 'Конец'
    },

    Map: {
        distance: 'Дистанция',
        time: 'Время',
        approve: 'Принять',
        cancl: 'Отмена',
        confirm: 'Путь успешно выбран'
    }
};
