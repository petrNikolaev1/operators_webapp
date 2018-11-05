export const getRoute = (google, payload) => {
    const {origin, destination, provideRouteAlternatives} = payload;
    const DirectionsService = new window.google.maps.DirectionsService();
    return new Promise((resolve, reject) => {
        DirectionsService.route({
            origin: new window.google.maps.LatLng(origin),
            destination: new window.google.maps.LatLng(destination),
            travelMode: window.google.maps.TravelMode.DRIVING,
            provideRouteAlternatives
        }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                resolve(result)
            } else {
                reject()
            }
        })
    })
};

export const getAddress = latLng => {
    return new Promise((resolve, reject) => {
        new window.google.maps.Geocoder().geocode({
            latLng,
        }, (result, status) => {
            if (status === window.google.maps.GeocoderStatus.OK && validateAddress(result[0])) {
                resolve(result[0])
            } else {
                reject(result)
            }
        })
    })
};


export const getCoordinates = address => {
    return new Promise((resolve, reject) => {
        new window.google.maps.Geocoder().geocode({
            address,
        }, (result, status) => {
            if (status === window.google.maps.GeocoderStatus.OK) {
                resolve(result[0])
            } else {
                reject(result)
            }
        })
    })
};

export const validateAddress = address => {
    return !!address.address_components.find(address_component => address_component.types.includes('street_number'))
};


export const initGoogleMaps = (language = 'en') => {
    delete window.google;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw&v=3.exp&libraries=geometry,drawing,places&language=${language}`;
    script.async = true;
    document.body.appendChild(script);
};


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
