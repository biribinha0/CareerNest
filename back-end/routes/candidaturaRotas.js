import express from "express";
import {obterCadidaturaPorIdController, verificarCandidaturaController, listarCandidaturasPorEmpresaController, listarCandidaturasPorCandidatoController, listarCandidaturasPorVagaController, atualizarCandidaturaController, registrarCandidaturaController, cancelarCandidaturaController } from "../controllers/CandidaturaController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get('/candidato/:id', authMiddleware, listarCandidaturasPorCandidatoController);

router.options('candidato/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

router.get('/empresa/:id', authMiddleware, listarCandidaturasPorEmpresaController);

router.options('empresa/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

router.get('/verificar/:id_candidato/:id_vaga', authMiddleware, verificarCandidaturaController);

router.get('/vaga/:id', authMiddleware, listarCandidaturasPorVagaController);

router.options('vaga/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

router.get('/:id', authMiddleware, obterCadidaturaPorIdController)

router.post('/', authMiddleware, registrarCandidaturaController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(204).send();
});

router.put('/:id', authMiddleware, atualizarCandidaturaController);

router.delete('/:id', authMiddleware, cancelarCandidaturaController);

router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'DELETE, PUT, OPTIONS');
    res.status(204).send();
});

export default router;