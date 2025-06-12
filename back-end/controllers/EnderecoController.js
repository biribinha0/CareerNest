import { read } from "../config/database.js"

const obterEnderecoDoCandidatoController = async (req, res) => {
    try {
        const candidatoEndereco = await read('enderecos', `candidato_id = ${req.params.id}`);
        res.status(200).json(candidatoEndereco);
    } catch (error) {
        console.error("Erro ao obter endereco do candidato: ", error);
        res.status(500).json({ mensagem: 'Erro ao obter endereco do candidato' })
    }
}

const obterEnderecoDaEmpresaController = async (req, res) => {
    try {
        const empresaEndereco = await read('enderecos', `empresa_id = ${req.params.id}`);
        res.status(200).json(empresaEndereco);
    } catch (error) {
        console.error("Erro ao obter endereco da empresa: ", error);
        res.status(500).json({ mensagem: 'Erro ao obter endereco da empresa' })
    }
}

export {obterEnderecoDoCandidatoController, obterEnderecoDaEmpresaController}