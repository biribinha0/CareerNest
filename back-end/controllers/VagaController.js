import { lerVagas, listarVagasPorEmpresa, obterVagaPorId, criarVaga, atualizarVaga, excluirVaga } from "../models/Vaga.js";
import { LerVagasComDistancia } from "../utils/vagasComDistancia.js";
import { listarCandidaturasPorVaga } from "../models/Candidatura.js"

import { criarNotificacao } from "../models/Notificacoes.js";

const lerVagasController = async (req, res) => {
    try {
        const vagas = await lerVagas();
        res.status(200).json(vagas)
    } catch (error) {
        console.error("Erro ao listar vagas: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar vagas' })
    }
}


const listarVagasPorDistancia = async (req, res) => {
    try {
        const candidatoId = req.params.id // jwt do candidato
        const vagasComDistancia = await LerVagasComDistancia(candidatoId);
        res.json(vagasComDistancia)
    } catch (error) {
        console.error("Erro ao listar vagas com distância:", error);
        res.status(500).json({ mensagem: "Erro ao listar vagas." });
    }
}

const listarVagasPorEmpresaController = async (req, res) => {
    try {
        const vagasEmpresa = await listarVagasPorEmpresa(req.params.id);

        const vagasComContagem = await Promise.all(

            vagasEmpresa.map(async (vaga) => {
                const candidaturas = await listarCandidaturasPorVaga(vaga.id) || [];
                const quantidade_candidaturas = candidaturas.length;

                return {
                    ...vaga,
                    candidatos_qntd: quantidade_candidaturas
                }
            })
        )
        res.status(200).json(vagasComContagem)
    } catch (error) {
        console.error("Erro ao listar vagas por empresa:", error);
        res.status(500).json({ mensagem: "Erro ao listar vagas." });
    }
}

const filtrarVagasController = async (req, res) => {
    try {
        const {
            titulo,
            curso,
            tipo,
            remuneracaoMin,
            distanciaMax,
            localizacao,
        } = req.query

        let vagas = await LerVagasComDistancia(req.params.idCandidato);

        //filtrar por título
        if (titulo) {
            vagas = vagas.filter(v => v.titulo.toLowerCase().includes(titulo.toLowerCase()))
        }

        //filtro por curso
        if (curso) {
            vagas = vagas.filter(v => JSON.stringify(v.curso_desejado).includes(curso));
        }

        //filtro por localizacao
         if (localizacao) {
            vagas = vagas.filter(v => JSON.stringify(v.localizacao).includes(localizacao));
        }

        //filtro por tipo
        if (tipo) {
            vagas = vagas.filter(v => v.tipo.toLowerCase() === tipo.toLowerCase());
        }

        //filtro por remuneração minima
        if (remuneracaoMin) {
            vagas = vagas.filter(v => parseFloat(v.remuneracao) >= parseFloat(remuneracaoMin))
        }

        //filtro por distancia
        if (distanciaMax) {
            vagas = vagas.filter(v => v.distancia_km <= parseFloat(distanciaMax));
        }

        res.status(200).json(vagas)
    } catch (error) {
        console.error("Erro ao filtrar vagas:", error);
        res.status(500).json({ mensagem: "Erro ao filtrar vagas" });
    }
}
const filtroController = async (req, res) => {
    try {
        const {
            titulo,
            curso,
            tipo,
            localizacao,
        } = req.query

        let vagas = await lerVagas();

        //filtrar por título
        if (titulo) {
            vagas = vagas.filter(v => v.titulo.toLowerCase().includes(titulo.toLowerCase()))
        }

        //filtro por curso
        if (curso) {
            vagas = vagas.filter(v => JSON.stringify(v.curso_desejado).includes(curso));
        }

        //filtro por localizacao
         if (localizacao) {
            vagas = vagas.filter(v => JSON.stringify(v.localizacao).includes(localizacao));
        }

        //filtro por tipo
        if (tipo) {
            vagas = vagas.filter(v => v.tipo.toLowerCase() === tipo.toLowerCase());
        }

        res.status(200).json(vagas)
    } catch (error) {
        console.error("Erro ao filtrar vagas:", error);
        res.status(500).json({ mensagem: "Erro ao filtrar vagas" });
    }
}

const obterVagaPorIdController = async (req, res) => {
    try {
        const vaga = await obterVagaPorId(req.params.id);
        res.status(200).json(vaga)
    } catch (error) {
        console.error("Erro ao obter vaga por ID: ", error);
        res.status(500).json({ mensagem: 'Erro ao obter vaga por ID' })
    }
}


const criarVagaController = async (req, res) => {
    try {
        console.log('Dados recebidos:', req.body);
        const {
            empresa_id,
            titulo,
            descricao,
            funcao,
            atividades,
            requisitos,
            beneficios,
            remuneracao,
            carga_horaria,
            tipo,
            idiomas,
            curso_desejado,
            localizacao
        } = req.body;

        const vagaData = {
            empresa_id: empresa_id,
            titulo: titulo,
            descricao: descricao,
            funcao: funcao,
            atividades: atividades,
            requisitos: requisitos,
            beneficios: beneficios,
            remuneracao: remuneracao,
            carga_horaria: carga_horaria,
            tipo: tipo,
            idiomas: idiomas,
            curso_desejado: curso_desejado,
            localizacao: localizacao
        };

        const vagaId = await criarVaga(vagaData);
        console.log('ID da vaga criada:', vagaId);

        await criarNotificacao(empresa_id, `Sua vaga "${titulo}" foi publicada com sucesso.`);

        res.status(201).json({ mensagem: 'Vaga criada com sucesso', vagaId });
    } catch (error) {
        console.error('Erro ao criar vaga: ', error);
        res.status(500).json({ mensagem: 'Erro ao criar vaga' });
    }
};


const atualizarVagaController = async (req, res) => {
    try {
        const vagaId = req.params.id;
        const {
            empresa_id,
            titulo,
            descricao,
            funcao,
            atividades,
            requisitos,
            beneficios,
            remuneracao,
            carga_horaria,
            tipo,
            idiomas,
            curso_desejado
        } = req.body;

        const vagaData = {
            empresa_id: empresa_id,
            titulo: titulo,
            descricao: descricao,
            funcao: funcao,
            atividades: JSON.stringify(atividades),
            requisitos: JSON.stringify(requisitos),
            beneficios: JSON.stringify(beneficios),
            remuneracao: remuneracao,
            carga_horaria: carga_horaria,
            tipo: tipo,
            idiomas: JSON.stringify(idiomas),
            curso_desejado: JSON.stringify(curso_desejado)
        };

        await atualizarVaga(vagaId, vagaData);
        await criarNotificacao(empresa_id, `Sua vaga "${titulo}" foi atualizada com sucesso.`);
        res.status(200).json({ mensagem: 'Vaga atualizada com sucesso' })
    } catch (error) {
        console.error('Erro ao atualizar vaga: ', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar vaga' })
    }
}

const excluirVagaController = async (req, res) => {
    try {
        const vagaId = req.params.id;
        const vaga = await obterVagaPorId(vagaId);
        if (!vaga) {
            return res.status(404).json({ mensagem: 'Vaga não encontrada' });
        }
        await excluirVaga(vagaId);
        await criarNotificacao(vaga.empresa_id, `Sua vaga "${vaga.titulo}" foi excluída.`);
        res.status(200).json({ mensagem: 'Vaga excluída com sucesso' })
    } catch (error) {
        console.error('Erro ao excluir vaga');
        res.status(500).json({ mensagem: 'Erro ao excluir vaga' })
    }
};


export { lerVagasController, listarVagasPorDistancia, listarVagasPorEmpresaController, filtrarVagasController, filtroController, obterVagaPorIdController, criarVagaController, atualizarVagaController, excluirVagaController }