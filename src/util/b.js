import math from 'mathjs'

var autoDriveSteps = [];
var speedFactor = 1; // 10x faster animated drive

export const setAnimatedRoute = (leg) => {
    autoDriveSteps = leg.steps.reduce((res, current) => res.concat(current.path.reduce((res, current) => res.concat(getPointBetween(res[res.length - 1], current), current), [])), []);
    console.log('len', autoDriveSteps.length)
};

let min = 100000;

const MIN = 0.000009999999996068709;

// const MIN = 0.00002;


export const getPointBetween = (a, b) => {
    if (!a) return b;

    const dist = math.distance([a.lat(), a.lng()], [b.lat(), b.lng()]);
    const ratio = parseInt(dist / MIN, 10);

    const res = new Array(ratio + 1);
    res[0] = a;

    for (let i = 1; i < ratio; i++) {
        res[i] = new window.google.maps.LatLng(res[i - 1].lat() + (b.lat() - res[i - 1].lat()) / (ratio - i + 1),
            res[i - 1].lng() + (b.lng() - res[i - 1].lng()) / (ratio - i + 1))
    }

    res[ratio] = b;

    return res
};

export let testPosition = 0;

export const startRouteAnimation = (autoDriveSteps = autoDriveSteps, rerender) => {
    var autoDriveTimer = setInterval(function () {
        if (autoDriveSteps.length === 0) {
            clearInterval(autoDriveTimer);
        } else {
            testPosition = autoDriveSteps[0];
            autoDriveSteps.shift();
        }
        rerender()
    }, 30)
};
