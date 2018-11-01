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
    {
        info: 'Тимур',
        detailedInfo: 'Валиев Тимур Маратович',
        origin: {lat: 50.427470, lng: 30.447890},
        destination: {lat: 44.593441, lng: 33.552595},
        progressPercent: 0,
        id: 1
    },
    {
        info: 'Азат',
        detailedInfo: 'Бельгибаев Азат Алтынбекович',
        origin: {lat: 49.855211, lng: 24.045811},
        destination: {lat: 55.733955, lng: 37.588165},
        progressPercent: 0,
        id: 2

    },
    {
        info: 'Ильгизар',
        detailedInfo: 'Мурзаков Ильгизар Ринатович',
        origin: {lat: 55.788243, lng: 49.123909},
        destination: {lat: 53.244196, lng: 34.364079},
        progressPercent: 0,
        id: 3
    },
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
            return {...position, lat: latOld + randomNum, lng: lngOld};
        case 1:
            return {...position, lat: latOld + randomNum, lng: lngOld + randomNum};
        case 2:
            return {...position, lat: latOld, lng: lngOld + randomNum};
        case 3:
            return {...position, lat: latOld - randomNum, lng: lngOld + randomNum};
        case 4:
            return {...position, lat: latOld - randomNum, lng: lngOld};
        case 5:
            return {...position, lat: latOld - randomNum, lng: lngOld - randomNum};
        case 6:
            return {...position, lat: latOld, lng: lngOld - randomNum};
        case 7:
            return {...position, lat: latOld + randomNum, lng: lngOld - randomNum};
    }
};


