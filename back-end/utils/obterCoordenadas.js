import fetch from "node-fetch";

export const obterCoordenadas = async (enderecoCompleto) => {
    const tentarBuscar = async (query) => {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.length > 0) {
            return {
                latitude: parseFloat(data[0].lat),
                longitude: parseFloat(data[0].lon)
            };
        }
        return null;
    };

    // Tenta buscar endereço completo
    let coordenadas = await tentarBuscar(enderecoCompleto);

    // Se falhar, tenta sem o bairro (remove a 3ª vírgula) - imcompatibilidade de endereços entre viacep e nominatim
    if (!coordenadas) {
        const partes = enderecoCompleto.split(',');
        if (partes.length >= 4) {
            const enderecoSemBairro = `${partes[0].trim()}, ${partes[1].trim()}, ${partes[3].trim()}`;
            coordenadas = await tentarBuscar(enderecoSemBairro);
        }
    }

    //  Se ainda assim falhar, lança erro
    if (!coordenadas) {
        throw new Error("Não foi possível obter coordenadas para o endereço informado.");
    }

    return coordenadas;
};
