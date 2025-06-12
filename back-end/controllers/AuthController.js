import jwt from "jsonwebtoken";
import { read, compare } from "../config/database.js";
import { JWT_SECRET } from "../utils/jwt.js";
import { criarEndereco } from "../models/Endereco.js";
import { generateHashedPassword } from "../utils/hashPassword.js";
import { criarCandidato } from "../models/Candidato.js";
import { criarEmpresa } from "../models/Empresa.js"
import { obterCoordenadas } from "../utils/obterCoordenadas.js";

import { criarNotificacao } from "../models/Notificacoes.js";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loginCandidatoController = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await read('candidatos', `email = '${email}'`);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário Não Encontrado' })
        }

        const senhaCorreta = await compare(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha Incorreta' })
        }

        const token = jwt.sign({ id: usuario.id, cargo: 'candidato' }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ mensagem: 'Login Realizado com Sucesso', token })
    } catch (error) {
        console.error('Erro ao Fazer Login: ', error);
        res.status(500).json({ mensagem: 'Erro ao Fazer Login.' })
    }
}

const loginEmpresaController = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await read('empresas', `email = '${email}'`);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário Não Encontrado' })
        }

        const senhaCorreta = await compare(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha Incorreta' })
        }

        const token = jwt.sign({ id: usuario.id, cargo: 'empresa' }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ mensagem: 'Login Realizado com Sucesso', token })
    } catch (error) {
        console.error('Erro ao Fazer Login: ', error);
        res.status(500).json({ mensagem: 'Erro ao Fazer Login.' })
    }
}


const cadastroCandidatoController = async (req, res) => {
    try {
        const { cpf, nome, descricao, email, telefone, senha, data_nascimento, curso, educacao, genero, linkedin, skills, endereco } = req.body;
        const senhaHash = await generateHashedPassword(senha);
        const candidatoData = {
            cpf: cpf,
            nome: nome,
            descricao: descricao,
            email: email,
            telefone: telefone,
            senha: senhaHash,
            data_nascimento: data_nascimento,
            curso: curso,
            educacao: educacao,
            genero: genero,
            linkedin: linkedin,
            skills: JSON.stringify(skills)
        }

        const idCandidato = await criarCandidato(candidatoData);

        const enderecoCompleto = `${endereco.logradouro}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`;
        const coordenadas = await obterCoordenadas(enderecoCompleto);

        const enderecoData = {
            logradouro: endereco.logradouro,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude,
            candidato_id: idCandidato,
        };
        await criarEndereco(enderecoData);

        const token = jwt.sign({ id: idCandidato, cargo: 'candidato' }, JWT_SECRET, { expiresIn: '1h' })

        res.status(201).json({ mensagem: 'Candidato criado com sucesso', token });
    } catch (error) {
        console.error('Erro ao criar candidato: ', error);
        res.status(500).json({ mensagem: 'Erro ao criar candidato' });
    }
};



const cadastroEmpresaController = async (req, res) => {
    try {
        const { cnpj, nome, email, telefone, senha, setor, descricao, endereco } = JSON.parse(req.body.dados);

        let logoPath = null;
        if (req.file) {
            logoPath = `/img/empresas/${req.file.filename}`;

        }

        const senhaHash = await generateHashedPassword(senha);
        const empresaData = {
            cnpj: cnpj,
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senhaHash,
            setor: setor,
            logo: logoPath,
            descricao: descricao,
        }

        const empresaId = await criarEmpresa(empresaData);

        const enderecoCompleto = `${endereco.logradouro}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`;
        const coordenadas = await obterCoordenadas(enderecoCompleto);

        const enderecoData = {
            logradouro: endereco.logradouro,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude,
            empresa_id: empresaId,
        };

        await criarEndereco(enderecoData);

        const token = jwt.sign({ id: empresaId, cargo: 'empresa' }, JWT_SECRET, { expiresIn: '1h' })

        await criarNotificacao(empresaId, 'Bem-vindo ao CareerNest!');

        res.status(201).json({ mensagem: 'Empresa cadastrada com sucesso', token });
    } catch (error) {
        console.error('Erro ao cadastrar empresa: ', error);
        res.status(500).json({ mensagem: 'Erro ao cadastrar empresa' });
    }
};


export { loginCandidatoController, loginEmpresaController, cadastroCandidatoController, cadastroEmpresaController }