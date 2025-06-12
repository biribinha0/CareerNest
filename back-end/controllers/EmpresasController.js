import { listarEmpresas, obterEmpresaPorId, atualizarEmpresa, excluirEmpresa } from "../models/Empresa.js";
import { generateHashedPassword } from "../utils/hashPassword.js"


const listarEmpresasController = async (req, res) => {
    try {
        const empresas = await listarEmpresas();
        res.status(200).json(empresas);
    } catch (error) {
        console.error("Erro ao listar empresas: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar empresas' })
    }
};

const obterEmpresaPorIdController = async (req, res) => {
    try {
        const empresa = await obterEmpresaPorId(req.params.id);
        if (empresa) {
            res.status(200).json(empresa);
        }
    } catch (error) {
        console.log('Erro ao obter empresa por ID: ', error);
        res.status(500).json({ mensagem: 'Erro ao obter empresa por ID' });
    }
};


const atualizarEmpresaController = async (req, res) => {
  try {
    const empresaId = req.params.id;

  
    const empresaExistente = await obterEmpresaPorId(empresaId);
    if (!empresaExistente) {
      return res.status(404).json({ mensagem: 'Empresa não encontrada' });
    }

    const {
      cnpj = empresaExistente.cnpj,
      nome = empresaExistente.nome,
      email = empresaExistente.email,
      telefone = empresaExistente.telefone,
      setor = empresaExistente.setor,
      descricao = empresaExistente.descricao,
    } = req.body;

    const empresaData = {
      cnpj,
      nome,
      email,
      telefone,
      setor,
      descricao,
    };

    await atualizarEmpresa(empresaId, empresaData);
    res.status(200).json({ mensagem: 'Empresa atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar empresa: ', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar empresa' });
  }
};


const excluirEmpresaController = async (req, res) => {
    try {
        const empresaId = req.params.id;
        await excluirEmpresa(empresaId);
        res.status(200).json({ mensagem: 'Empresa excluída com sucesso' })
    } catch (error) {
        console.error('Erro ao excluir empresa');
        res.status(500).json({ mensagem: 'Erro ao excluir empresa' })
    }
};


export { listarEmpresasController, obterEmpresaPorIdController, atualizarEmpresaController, excluirEmpresaController }