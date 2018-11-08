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


export const spreadLatLng = latLng => ({lat: latLng.lat(), lng: latLng.lng()});

export const getLat = pos => typeof pos.lat === 'function' ? pos.lat() : pos.lat;
export const getLng = pos => typeof pos.lng === 'function' ? pos.lng() : pos.lng;

export const findIndexInPath = (path, position) => {
    const index = path.findIndex(pos => getLat(pos) === getLat(position) && getLng(pos) === getLng(position));
    return index === -1 ? undefined : index
};

export const getStart = props => {
    const {origin_latitude, origin_longitude} = props.origin;
    return {lat: origin_latitude, lng: origin_longitude};
};

export const getEnd = props => {
    const {destination_latitude, destination_longitude,} = props.destination;
    return {lat: destination_latitude, lng: destination_longitude};
};

export const getCurrent = props => {
    const {location} = props;
    return {lat: location.latitude, lng: location.longitude};
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

export const getCountry = address => {
    const res = address.address_components.find(address_component => address_component.types.includes('country') && address_component.types.includes('political'));
    return !!res ? res.long_name : ''
};

export const getCity = address => {
    const res = address.address_components.find(address_component => address_component.types.includes('locality') && address_component.types.includes('political'));
    return !!res ? res.long_name : ''
};

export const getCountryCity = address => {
    const country = getCountry(address);
    const city = getCity(address);
    return !!country ? country + ', ' + city : city;
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
