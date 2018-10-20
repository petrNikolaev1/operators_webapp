import {drivers} from "../util/fakeMarkers";

export const driversOptions = drivers.map((drivers, index) => {
    return {label: drivers[Object.keys(drivers)[0]], value: index, formalLabel: Object.keys(drivers)[0]}
});

export const driversToOptions = drivers => drivers
    .map((driver, index) => ({
        label: driver.info,
        value: index,
        detailedInfo: driver.detailedInfo,
        progress: driver.progress,
        duration: driver.duration,
        distance: driver.distance,
    }));
