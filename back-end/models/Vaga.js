import { readAll, read, create, update, deleteRecord } from "../config/database.js";


const lerVagas = async () => {
    try {
        return await readAll('vagas');
    } catch (error) {
        console.error('Erro ao ler vagas: ', error);
        throw error;
    }
}

const listarVagasPorEmpresa = async (empresaId) => {
    try {
        return await readAll('vagas', `empresa_id = ${empresaId}`)
    } catch (error) {
        console.error('Erro ao listar vagas por empresa: ', error);
        throw error;
    }
}

const obterVagaPorId = async (vagaId) => {
    try {
        return await read('vagas', `id = ${vagaId}`);
    } catch (error) {
        console.error('Erro ao obter vaga por id: ', error);
        throw error;
    }
}

const criarVaga = async (vagaData) => {
    try {
        return await create('vagas', vagaData);
    } catch (error) {
        console.error('Erro ao criar vaga: ', error);
        throw error;
    }
}

const atualizarVaga = async (vagaId, vagaData) => {
    try {
        return await update('vagas', vagaData, `id = ${vagaId}`)
    } catch (error) {
        console.error('Erro ao atualizar vaga: ', error);
        throw error;
    }
}

const excluirVaga = async (vagaId) => {
    try {
        return await deleteRecord('vagas', `id = ${vagaId}`);
    } catch (error) {
        console.error('Erro ao excluir vaga: ', error);
        throw error;
    }
}



export { lerVagas, listarVagasPorEmpresa, obterVagaPorId, criarVaga, atualizarVaga, excluirVaga }