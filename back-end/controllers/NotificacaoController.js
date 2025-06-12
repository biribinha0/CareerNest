import {
    listarNotificacoesPorEmpresa,
    marcarNotificacoesComoVistas
} from '../models/Notificacoes.js';

const listarNotificacoes = async (req, res) => {
    const { id } = req.params; // empresa_id
    try {
        const notificacoes = await listarNotificacoesPorEmpresa(id);
        res.json(notificacoes);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar notificações.' });
    }
};
const listarNotificacoesNaoLidas = async (req, res) => {
    const { id } = req.params; // empresa_id
    try {
        const notificacoes = await listarNotificacoesPorEmpresa(id);
        const naoLidas = notificacoes.filter(n => n.visualizado == 0)
        res.json(naoLidas);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar notificações não lidas.' });
    }
};

const marcarComoVistas = async (req, res) => {
    const { idEmpresa } = req.params;
    try {
        await marcarNotificacoesComoVistas(idEmpresa);
        res.json({ mensagem: 'Notificações marcada como vista.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar notificações.' });
    }
};

export { listarNotificacoes, marcarComoVistas, listarNotificacoesNaoLidas };
