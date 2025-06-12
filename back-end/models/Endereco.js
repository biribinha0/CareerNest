import { create, read, update, deleteRecord } from "../config/database.js";

const criarEndereco = async (enderecoData) => {
    try {
        return await create('enderecos', enderecoData);
    } catch (error) {
        await deleteRecord(enderecoData.idCandidato);
        console.error('Erro ao criar endereço: ', error)
        throw error;
    }
};

const obterEnderecoPorCandidato = async (idCandidato) => {
    try {
        return await read('enderecos', `candidato_id = ${idCandidato}`);
    } catch (error) {
        console.error("Erro ao obter endereço por ID do candidato: ", error);
        throw error;
    }
};

const obterEnderecoPorEmpresa = async (idEmpresa) => {
    try {
        return await read('enderecos', `empresa_id = ${idEmpresa}`);
    } catch (error) {
        console.error("Erro ao obter endereço por ID da empresa: ", error);
        throw error;
    }
};

const atualizarEnderecoCandidato = async (idCandidato, enderecoData) => {
    try {
        return await update('enderecos', enderecoData, `candidato_id = ${idCandidato}`);
    } catch (error) {
        console.error("Erro ao atualizar endereço do candidato: ", error);
        throw error;
    }
};

const atualizarEnderecoEmpresa = async (idEmpresa, enderecoData) => {
    try {
        return await update('enderecos', enderecoData, `empresa_id = ${idEmpresa}`);
    } catch (error) {
        console.error("Erro ao atualizar endereço da empresa: ", error);
        throw error;
    }
};

const excluirEndereco = async (condicaoWhere) => {
    try {
        return await deleteRecord('enderecos', condicaoWhere);
    } catch (error) {
        console.error("Erro ao excluir endereço: ", error);
        throw error;
    }
}

export { criarEndereco, obterEnderecoPorCandidato, obterEnderecoPorEmpresa, atualizarEnderecoCandidato, atualizarEnderecoEmpresa, excluirEndereco };

