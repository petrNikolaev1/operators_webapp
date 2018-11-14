import constants from "@/constants";
import {Link} from "react-router-dom";
import React from "react";

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
        ENTER: 'Войти',
        INVALID: 'Неправильный логин/пароль',
        NOT_ALL_FIELDS: 'Пожалуйста, заполните все поля'
    },

    InfoPanel: {
        SELECT_NO_LANG: 'Такого языка нет',
        SELECT_LANG_PLACEHOLDER: 'Выберите язык интерфейса'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Адрес отправления',
        fullTo: 'Адрес получателя',
        status: 'Статус',
        weight: 'Вес посылки',
        worth: 'Стоимость посылки',
        description: 'Описание',
        birthDate: 'Дата создания заявки',
        title: 'Информация о водителях',
        approve: 'Выбрать',
        reject: 'Назад',
        choose_placeholder: 'Выберите водителей',
        SELECT_NO_DRIVERS: 'Таких водителей нет'
    },

    Pagination: {
        first: 'Начало',
        previous: 'Назад',
        next: 'Вперед',
        last: 'Конец'
    },

    SelectRoute: {
        distance: 'Дистанция',
        time: 'Время',
        approve: 'Выбрать',
        cancel: 'Назад'
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
        SETTINGS: 'Настройки',
        BACK: 'Вернуться в главное меню',
        ADMIN_PANEL: 'Панель администрации',
        SELECT_NUMBER: 'Выберите число водителей',
        PERSONAL_INFO: 'Персональная информация',
        FULL_NAME: 'ФИО',
        LICENSE_NUMBER: 'Номер лицензии',
        POSITION: 'Должность',
        ACCESS_LEVEL: 'Уровень доступа',
        LOGOUT: 'Выйти'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'Ожидает подтверждения',
        [constants.IN_PROGRESS]: 'Доставляется',
        [constants.DELIVERED]: 'Доставлен',
        [constants.REJECTED]: 'Отклонен',
    },

    CreateOrder: {
        CREATE_ORDER: 'Создать заказ'
    },

    StaffRegistration:{
        REGISTRATION: 'Регистрация',
        NAME: 'Имя',
        NAME_NOTIFICATION: 'Пожалуйста, укажите имя',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Неверный формат e-mail',
        PASSWORD: 'Пароль',
        PASSWORD_NOTIFICATION: 'Минимальная длина пароля -\n 6 символов',
        REGISTER: 'Зарегистрироваться',
        STAFF_TYPE: 'Тип сотрудника',
        SELECT_STAFF_TYPE_PLACEHOLDER: 'Выберите тип регистрируемого сотрудника',
        DRIVER: 'Водитель',
        OPERATOR: 'Оператор',
        PHOTO: 'Фото',
        DROPZONE_PLACEHOLDER: 'Перетащите сюда файл или кликните, чтобы выбрать файл для загрузки',
        DROPZONE_NOTIFICATION: 'Поддерживаются только изображения формата *.jpeg и *.png',

    },

};
