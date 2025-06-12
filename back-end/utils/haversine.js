export const calcularDistancia = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // raio da Terra em km
    const rad = Math.PI / 180 //converter graus em radianos

    const deltaLat = (lat2 - lat1) * rad
    const deltaLon = (lon2 - lon1) * rad;

    const termoHaversine =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(lat1 * rad) * Math.cos(lat2 * rad) *
        Math.sin(deltaLon / 2) ** 2;

    const anguloCentral = 2 * Math.atan(Math.sqrt(termoHaversine), Math.sqrt(1 - termoHaversine));

    return R * anguloCentral //distancia final em km
}