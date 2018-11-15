export const rotationAngle = (a, b) => {
    const lat_1 = a.lat();
    const lat_2 = b.lat();

    const lon_1 = a.lng();
    const lon_2 = b.lng();

    // const lat_1 = a[0];
    // const lat_2 = b[0];

    // const lon_1 = a[1];
    // const lon_2 = b[1];

    return Math.degrees(
        Math.atan2(
            Math.cos(Math.radians(lat_2)) *
            Math.sin(Math.radians(lon_2 - lon_1)),

            Math.cos(Math.radians(lat_1)) *
            Math.sin(Math.radians(lat_2)) -
            Math.sin(Math.radians(lat_1)) *
            Math.cos(Math.radians(lat_2)) *
            Math.cos(Math.radians(lon_2 - lon_1))
        )) +
        (lon_2 < lon_1 ? 360 : 0)
};


Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};