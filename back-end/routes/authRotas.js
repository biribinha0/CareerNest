import express from "express";
import { loginCandidatoController, loginEmpresaController, cadastroCandidatoController, cadastroEmpresaController } from "../controllers/AuthController.js";

import multer from 'multer';
import path from 'path';

import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../front-end/my-app/public/img/empresas'));
    },
    filename: (req, file, cb) => {
        const nomeArquivo = `${Date.now()}-${file.originalname}`;
        cb(null, nomeArquivo);
    }
});

const upload = multer({ storage: storage })


router.post('/login-candidato', loginCandidatoController);

router.options('/login-candidato', (req, res) => {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(204).send();
})
router.post('/login-empresa', loginEmpresaController);

router.options('/login-empresa', (req, res) => {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(204).send();
})

router.post('/cadastro-candidato', cadastroCandidatoController);

router.options('/cadastro-candidato', (req, res) => {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(204).send();
})

router.post('/cadastro-empresa', upload.single('logo'), cadastroEmpresaController);

router.options('/cadastro-empresa', (req, res) => {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(204).send();
})

export default router;