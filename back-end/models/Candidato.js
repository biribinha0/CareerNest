import { create, deleteRecord, read, readAll, update } from '../config/database.js';

const listarCandidatos = async () => {
    try {
        return await readAll('candidatos');
    } catch (error) {
        console.error('Erro ao listar candidatos: ', error);
        throw error;
    }
};

const obterCandidatoPorId = async (id) => {
    try {
        return await read('candidatos', `id = ${id}`);
    } catch (error) {
        console.error('Erro ao obter candidato por ID: ', error);
        throw error;
    }
};

const criarCandidato = async (candidatoData) => {
    try {
        return await create('candidatos', candidatoData);
    } catch (error) {
        console.error('Erro ao criar candidato: ', error);
        throw error;
    }
};

const atualizarCandidato = async (id, candidatoData) => {
    try {
        await update('candidatos', candidatoData, `id = ${id}`);
    } catch (error) {
        console.error('Erro ao editar candidato: ', error);
        throw error;
    }
};

const excluirCandidato = async (id) => {
    try {
        await deleteRecord('candidatos', `id = ${id}`);
    } catch (error) {
        console.error('Erro ao excluir candidato: ', error);
        throw error;
    }
}

export {listarCandidatos, obterCandidatoPorId, criarCandidato, atualizarCandidato, excluirCandidato}