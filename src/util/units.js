export const secondsToHours = seconds => ([Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60)]);

export const metersToKm = meters => Math.round(meters / 1000);


export const momentLocale = lang => {
    switch (lang) {
        case 'gb':
            return 'en-gb';
        case 'kz':
            return 'kk';
        default:
            return lang
    }
};
