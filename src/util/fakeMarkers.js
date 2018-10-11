export let homes = [
    {lat: -22.756786, lng: -43.412433, info: 'Santo Antonio da Prata, Belford Roxo office'},
    {lat: -12.963729, lng: -38.493386, info: 'Baixa de Quintas, Salvador office'},
    {lat: -15.753671, lng: -47.911241, info: 'Brasília, DF office'},
    {lat: -5.133836, lng: -42.79628, info: 'Parque São João, Teresina office'},
    {lat: -3.756869, lng: -38.488833, info: 'Edson Queiroz, Fortaleza office'},
    {lat: 44.593441, lng: 33.552595, info: 'Sevastopol office'},
    {lat: 53.899606, lng: 27.555566, info: 'Minsk office'},
    {lat: 54.686228, lng: 25.285483, info: 'Vilnius office'},
    {lat: 56.970804, lng: 24.133028, info: 'Vidzemes priekšpilsēta, Rīga office'}
];


export let drivers = [
    {lat: -2.756786, lng: -3.412433, info: 'Alex'},
    {lat: -9.963729, lng: -38.493386, info: 'Sudarzhan'},
    {lat: -76.753671, lng: -47.911241, info: 'Leela'},
    {lat: -34.133836, lng: -42.79628, info: 'Ilia'},
    {lat: -35.756869, lng: -38.488833, info: 'Ararat'},
    {lat: 47.593441, lng: 33.552595, info: 'Dmitri'},
    {lat: 12.899606, lng: 27.555566, info: 'Margarita'},
    {lat: 87.686228, lng: 25.285483, info: 'Kamal'},
    {lat: 65.970804, lng: 24.133028, info: 'Semyon'},
    {lat: -2.756786, lng: -11.412433, info: 'Rani'},
    {lat: -9.963729, lng: -77.493386, info: 'Shamil'},
    {lat: -76.753671, lng: -63.911241, info: 'Saveli'},
    {lat: -34.133836, lng: -55.79628, info: 'Anatoly'},
    {lat: -35.756869, lng: 9.488833, info: 'Andrey'},
    {lat: 47.593441, lng: 25.552595, info: 'Vadim'},
    {lat: 12.899606, lng: 7.555566, info: 'Stepan'},
    {lat: 87.686228, lng: 1.285483, info: 'Samir'},
    {lat: 65.970804, lng: 51.133028, info: 'Surya'},
    {lat: 44.756786, lng: -11.412433, info: 'Rati'},
    {lat: 22.963729, lng: -77.493386, info: 'Ruf'},
    {lat: 7.753671, lng: -63.911241, info: 'Stasya'},
    {lat: 56.133836, lng: -55.79628, info: 'Uliana'},
    {lat: 31.756869, lng: 9.488833, info: 'Platon'},
    {lat: 4.593441, lng: 25.552595, info: 'Arisha'},
    {lat: 12.899606, lng: 79.555566, info: 'Indira'},
    {lat: 87.686228, lng: 53.285483, info: 'Rostislav'},
    {lat: 65.970804, lng: 41.133028, info: 'Ksenia'}
];


export const mapNewPositions = (positions) => {
    return positions.map((position, index) => {
        return getDirection(position, index)
    })
};

export const assignNewPositions = () => {
    drivers = mapNewPositions(drivers)
};

export const getRndInt = (min = 0.00001, max = 0.00003) => {
    return Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
};

export const getDirection = (position, index,) => {
    const randomNum = getRndInt();
    const {lat: latOld, lng: lngOld} = position;
    switch (index % 8) {
        case 0:
            return {lat: latOld + randomNum, lng: lngOld};
        case 1:
            return {lat: latOld + randomNum, lng: lngOld + randomNum};
        case 2:
            return {lat: latOld, lng: lngOld + randomNum};
        case 3:
            return {lat: latOld - randomNum, lng: lngOld + randomNum};
        case 4:
            return {lat: latOld - randomNum, lng: lngOld};
        case 5:
            return {lat: latOld - randomNum, lng: lngOld - randomNum};
        case 6:
            return {lat: latOld, lng: lngOld - randomNum};
        case 7:
            return {lat: latOld + randomNum, lng: lngOld - randomNum};
    }
};


