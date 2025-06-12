import {read, readAll, create, deleteRecord, update } from "../config/database.js";

const obterCadidaturaPorId = async (candidaturaId) => {
     try {
        return await read('candidaturas', `id = ${candidaturaId}`);
    } catch (error) {
        console.error('Erro ao obter candidatura por id: ', error);
        throw error
    }
}

const listarCandidaturasPorCandidato = async (candidatoId) => {
    try {
        return await readAll('candidaturas', `candidato_id = ${candidatoId}`);
    } catch (error) {
        console.error('Erro ao listar candidaturas por candidato: ', error);
        throw error
    }
}

const listarCandidaturasPorVaga = async (vagaId) => {
    try {
        return await readAll('candidaturas', `vaga_id = ${vagaId}`);
    } catch (error) {
        console.error('Erro ao listar candidaturas por vaga: ', error);
        throw error
    }
}

const listarCandidaturasPorEmpresa = async (empresaId) => {
    try {
        return await readAll(
            'candidaturas c INNER JOIN vagas v ON c.vaga_id = v.id',
            `v.empresa_id = ${empresaId}`
        );
    } catch (error) {
        console.error('Erro ao listar candidaturas por empresa: ', error);
        throw error;
    }
};

const verificarCandidatura = async (candidatoId, vagaId) => {
      try {
        return await read('candidaturas', `candidato_id = ${candidatoId} AND vaga_id = ${vagaId}`);
    } catch (error) {
        console.error('Erro ao listar candidaturas por vaga: ', error);
        throw error
    }
}


const registrarCandidatura = async (candidaturaData) => {
    try {
        return await create('candidaturas', candidaturaData);
    } catch (error) {
        console.error('Erro ao registrar candidatura: ', error);
        throw error
    }
}

const cancelarCandidatura = async (idCandidatura) => {
     try {
        return await deleteRecord('candidaturas', `id = ${idCandidatura}`);
    } catch (error) {
        console.error('Erro ao excluir candidatura: ', error);
        throw error
    }
}

const atualizarCandidatura = async(idCandidatura, candidaturaData) => {
    try {
        return await update ('candidaturas', candidaturaData, `id = ${idCandidatura}`)
    } catch (error) {
        console.error('Erro ao atualizar candidatura: ', error);
        throw error
    }
}


export { listarCandidaturasPorCandidato, listarCandidaturasPorEmpresa, verificarCandidatura, listarCandidaturasPorVaga, registrarCandidatura, atualizarCandidatura, obterCadidaturaPorId, cancelarCandidatura }