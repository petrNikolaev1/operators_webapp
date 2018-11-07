export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export const kkmRegOfdSuccessMsg = Command => {
    switch (Command) {
        case "Open":
            return 'Регистрация ККТ прошла успешно!';
        case 'Close':
            return 'ФН закрыт успешно!';
        default:
            return 'Перерегистрация ККТ прошла успешно!';
    }
};