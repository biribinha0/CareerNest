import { obterCadidaturaPorId, verificarCandidatura, listarCandidaturasPorEmpresa, listarCandidaturasPorCandidato, listarCandidaturasPorVaga, registrarCandidatura, atualizarCandidatura, cancelarCandidatura } from "../models/Candidatura.js";
import { obterVagaPorId } from "../models/Vaga.js"
import { criarNotificacao } from "../models/Notificacoes.js";


const listarCandidaturasPorCandidatoController = async (req, res) => {
    try {
        const candidatoId = req.params.id
        const candidaturas = await listarCandidaturasPorCandidato(candidatoId);
        res.status(200).json(candidaturas);
    } catch (error) {
        console.error("Erro ao listar candidaturas por candidato: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar candidaturas por candidato' })
    }
}

const verificarCandidaturaController = async (req, res) => {
    const { id_candidato, id_vaga } = req.params;

    try {
        const jaExiste = await verificarCandidatura(id_candidato, id_vaga);

        if (jaExiste) {
            return res.status(200).json({ candidatoJaInscrito: true });
        } else {
            return res.status(200).json({ candidatoJaInscrito: false });
        }
    } catch (error) {
        console.error('Erro ao verificar candidatura:', error);
        return res.status(500).json({ error: 'Erro no servidor' });
    }
};

const listarCandidaturasPorEmpresaController = async (req, res) => {
    try {
        const empresaId = req.params.id;
        const candidaturas = await listarCandidaturasPorEmpresa(empresaId);

        const candidatosUnicos = [];
        const idsVistos = new Set();

        for (const candidatura of candidaturas) {
            if (!idsVistos.has(candidatura.candidato_id)) {
                idsVistos.add(candidatura.candidato_id);
                candidatosUnicos.push(candidatura);
            }
        }

        res.status(200).json(candidatosUnicos);
    } catch (error) {
        console.error("Erro ao listar candidaturas por empresa: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar candidaturas por empresa' })
    }
}

const obterCadidaturaPorIdController = async (req, res) => {
    try {
        const candidaturaId = req.params.id
        const candidatura = await obterCadidaturaPorId(candidaturaId);
        res.status(200).json(candidatura);
    } catch (error) {
        console.error("Erro ao obter candidatura por ID: ", error);
        res.status(500).json({ mensagem: 'Erro ao obter candidatura por ID' })
    }
}

const listarCandidaturasPorVagaController = async (req, res) => {
    try {
        const vagaId = req.params.id
        const candidaturas = await listarCandidaturasPorVaga(vagaId);
        res.status(200).json(candidaturas);
    } catch (error) {
        console.error("Erro ao listar candidaturas por vaga: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar candidaturas por vaga' })
    }
}

const registrarCandidaturaController = async (req, res) => {
    try {
        const { vaga_id, candidato_id } = req.body;
        const candidaturaData = {
            vaga_id: vaga_id,
            candidato_id: candidato_id
        }
        const candidaturaId = await registrarCandidatura(candidaturaData);
        const vaga = await obterVagaPorId(vaga_id);
        await criarNotificacao(vaga.empresa_id, `Um candidato se inscreveu na vaga "${vaga.titulo}".`);

        res.status(200).json({ mensagem: 'Candidatura registrada com sucesso', candidaturaId });
    } catch (error) {
        console.error("Erro ao registrar candidatura: ", error);
        res.status(500).json({ mensagem: 'Erro ao registrar candidatura' })
    }
}

const atualizarCandidaturaController = async (req, res) => {
    try {
        const candidaturaId = req.params.id;
        const { status } = req.body;
        const candidaturaData = {
            status: status
        }
        await atualizarCandidatura(candidaturaId, candidaturaData);
        res.status(200).json({ mensagem: 'Candidatura atualizada com sucesso' })
    } catch (error) {
        console.error('Erro ao atualizar candidatura');
        res.status(500).json({ mensagem: 'Erro ao atualizar candidatura' })
    }
}

const cancelarCandidaturaController = async (req, res) => {
    try {
        const candidaturaId = req.params.id;
        await cancelarCandidatura(candidaturaId);
        res.status(200).json({ mensagem: 'Candidatura cancelada com sucesso' })
    } catch (error) {
        console.error('Erro ao cancelar candidatura');
        res.status(500).json({ mensagem: 'Erro ao cancelar candidatura' })
    }
}

export { obterCadidaturaPorIdController, verificarCandidaturaController, listarCandidaturasPorEmpresaController, listarCandidaturasPorCandidatoController, listarCandidaturasPorVagaController, registrarCandidaturaController, cancelarCandidaturaController, atualizarCandidaturaController }