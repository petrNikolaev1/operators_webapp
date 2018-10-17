import {drivers} from "../util/fakeMarkers";

export const driversOptions = drivers.map((drivers, index) => {
    return {label: drivers[Object.keys(drivers)[0]], value: index, formalLabel: Object.keys(drivers)[0]}
});