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