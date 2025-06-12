import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3001;

import candidatoRotas from './routes/candidatoRotas.js';
import empresaRotas from './routes/empresaRotas.js';
import authRotas from './routes/authRotas.js';
import vagaRotas from './routes/vagaRotas.js';
import candidaturaRotas from "./routes/candidaturaRotas.js";
import enderecoRotas from "./routes/enderecoRotas.js";
import cors from "cors";

app.use(cors());

app.use('/candidatos', candidatoRotas);
app.use('/empresas', empresaRotas);
app.use('/auth', authRotas);
app.use('/vagas', vagaRotas);
app.use('/candidaturas', candidaturaRotas);
app.use('/endereco', enderecoRotas);

app.get('/', (req, res) => {
    res.status(200).send("API de CarrerNest");
});

app.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});


app.use((req, res) => {
    res.status(404).json({ mensagem: 'Rota Não Encontrada' })
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});