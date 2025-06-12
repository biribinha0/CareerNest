import express from "express";
import { listarCandidatosController, obterCandidatoPorIdController, atualizarCandidatoController, excluirCandidatoController} from "../controllers/CandidatoController.js";

import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get('/', listarCandidatosController);
router.get('/:id', obterCandidatoPorIdController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send;
});

router.put('/:id', authMiddleware, atualizarCandidatoController);

router.delete('/:id', authMiddleware, excluirCandidatoController);

router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

export default router;