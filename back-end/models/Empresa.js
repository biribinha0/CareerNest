import { create, deleteRecord, read, readAll, update } from '../config/database.js';

const listarEmpresas = async () => {
    try {
        return await readAll('empresas');
    } catch (error) {
        console.error('Erro ao listar empresas: ', error);
        throw error;
    }
};

const obterEmpresaPorId = async (id) => {
    try {
        return await read('empresas', `id = ${id}`);
    } catch (error) {
        console.error('Erro ao obter empresa por ID: ', error);
        throw error;
    }
};

const criarEmpresa = async (empresaData) => {
    try {
        return await create('empresas', empresaData);
    } catch (error) {
        console.error('Erro ao criar empresa: ', error);
        throw error;
    }
};

const atualizarEmpresa = async (id, empresaData) => {
    try {
        await update('empresas', empresaData, `id = ${id}`);
    } catch (error) {
        console.error('Erro ao editar empresa: ', error);
        throw error;
    }
};

const excluirEmpresa = async (id) => {
    try {
        await deleteRecord('empresas', `id = ${id}`);
    } catch (error) {
        console.error('Erro ao excluir empresa: ', error);
        throw error;
    }
}

export {listarEmpresas, obterEmpresaPorId, criarEmpresa, atualizarEmpresa, excluirEmpresa}