import { readAll } from "../config/database.js";
import { calcularDistancia } from "../utils/haversine.js";
import { obterEnderecoPorCandidato, obterEnderecoPorEmpresa } from "../models/Endereco.js";

export const LerVagasComDistancia = async (candidatoId) => {

    const vagas = await readAll('vagas');

    const enderecoCadidato = await obterEnderecoPorCandidato(candidatoId);

    const vagasComDistancia = await Promise.all(vagas.map(async vaga => {
        const enderecoEmpresa = await obterEnderecoPorEmpresa(vaga.empresa_id);

        const distancia = calcularDistancia(
            enderecoCadidato.latitude,
            enderecoCadidato.longitude,
            enderecoEmpresa.latitude,
            enderecoEmpresa.longitude
        );

        return {
            ...vaga,
            distancia_km: distancia.toFixed(2)
        };
    }));

    return vagasComDistancia
}