export let homes = [
    {lat: -22.756786, lng: -43.412433},
    {lat: -12.963729, lng: -38.493386},
    {lat: -15.753671, lng: -47.911241},
    {lat: -5.133836, lng: -42.79628},
    {lat: -3.756869, lng: -38.488833},
    {lat: 44.593441, lng: 33.552595},
    {lat: 53.899606, lng: 27.555566},
    {lat: 54.686228, lng: 25.285483},
    {lat: 56.970804, lng: 24.133028}
];


export let drivers = [
    {lat: -2.756786, lng: -3.412433},
    {lat: -9.963729, lng: -38.493386},
    {lat: -76.753671, lng: -47.911241},
    {lat: -34.133836, lng: -42.79628},
    {lat: -35.756869, lng: -38.488833},
    {lat: 47.593441, lng: 33.552595},
    {lat: 12.899606, lng: 27.555566},
    {lat: 87.686228, lng: 25.285483},
    {lat: 65.970804, lng: 24.133028},
    {lat: -2.756786, lng: -11.412433},
    {lat: -9.963729, lng: -77.493386},
    {lat: -76.753671, lng: -63.911241},
    {lat: -34.133836, lng: -55.79628},
    {lat: -35.756869, lng: 9.488833},
    {lat: 47.593441, lng: 25.552595},
    {lat: 12.899606, lng: 7.555566},
    {lat: 87.686228, lng: 1.285483},
    {lat: 65.970804, lng: 51.133028},
    {lat: 44.756786, lng: -11.412433},
    {lat: 22.963729, lng: -77.493386},
    {lat: 7.753671, lng: -63.911241},
    {lat: 56.133836, lng: -55.79628},
    {lat: 31.756869, lng: 9.488833},
    {lat: 4.593441, lng: 25.552595},
    {lat: 12.899606, lng: 79.555566},
    {lat: 87.686228, lng: 53.285483},
    {lat: 65.970804, lng: 41.133028}
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


