import express from "express";
import { obterEnderecoDoCandidatoController, obterEnderecoDaEmpresaController } from "../controllers/EnderecoController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get('/candidato/:id', authMiddleware, obterEnderecoDoCandidatoController);
router.get('/empresa/:id', authMiddleware, obterEnderecoDaEmpresaController); 

router.options('/empresa/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

router.options('/candidato/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});
export default router;