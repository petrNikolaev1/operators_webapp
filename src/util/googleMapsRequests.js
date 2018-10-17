export const getRoute = (google, payload) => {
    const {origin, destination} = payload;
    const DirectionsService = new window.google.maps.DirectionsService();
    return new Promise((resolve, reject) => {
        DirectionsService.route({
            origin: new window.google.maps.LatLng(origin),
            destination: new window.google.maps.LatLng(destination),
            travelMode: window.google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                resolve(result)
            } else {
                reject()
            }
        })
    })
};

export const initGoogleMaps = (language = 'en') => {
    delete window.google;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`;
    script.async = true;
    document.body.appendChild(script);
};

let i = 0;

export const getGoogleMaps = () => {
    return new Promise((resolve, reject) => {
        if (!!window.google) {
            resolve(window.google)
        } else {
            return new Promise((resolve, reject) => setTimeout(resolve, 100))
                .then(getGoogleMaps)
                .then(resolve)
        }
    })
};
