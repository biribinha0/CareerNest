import express from "express";
import { listarEmpresasController, obterEmpresaPorIdController, atualizarEmpresaController, excluirEmpresaController } from "../controllers/EmpresasController.js";
import { listarNotificacoes, marcarComoVistas, listarNotificacoesNaoLidas } from '../controllers/NotificacaoController.js';

import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();


router.get('/:id/notificacoes', authMiddleware ,listarNotificacoes);
router.get('/:id/notificacoes/nao-lidas', authMiddleware ,listarNotificacoesNaoLidas);
router.put('/:idEmpresa/notificacoes/vistas', authMiddleware, marcarComoVistas);

router.get('/', listarEmpresasController);
router.get('/:id', obterEmpresaPorIdController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send;
});



router.put('/:id', authMiddleware, atualizarEmpresaController);

router.delete('/:id', authMiddleware, excluirEmpresaController);



router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});


export default router;