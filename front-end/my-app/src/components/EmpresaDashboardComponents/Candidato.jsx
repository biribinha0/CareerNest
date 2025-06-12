"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./Candidato.css";

export default function Candidatura({ id }) {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [vaga, setVaga] = useState(null)
    const [erro, setErro] = useState(null);
    const API_URL = "http://localhost:3001";
    const [endereco, setEndereco] = useState(null);


    useEffect(() => {
        setCarregando(true);
        fetch(`${API_URL}/candidatos/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Candidato não encontrado");
                return res.json();
            })
            .then((data) => setUsuario(data))
            .catch((error) => {
                console.error("Erro ao obter usuário", error);
                setErro("Candidato não encontrado.");
            })
            .finally(() => setCarregando(false));
    }, [id]);

    useEffect(() => {
        setCarregando(true);

        const buscarDados = async () => {
            try {
                const token = localStorage.getItem("token")
                const resUsuario = await fetch(`${API_URL}/candidatos/${id}`);
                if (!resUsuario.ok) throw new Error("Candidato não encontrado");
                const dadosUsuario = await resUsuario.json();
                setUsuario(dadosUsuario);

                const resEndereco = await fetch(`${API_URL}/endereco/candidato/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!resEndereco.ok) throw new Error("Endereço não encontrado");
                const dadosEndereco = await resEndereco.json();
                setEndereco(dadosEndereco);

                const resVagasCandidatadas = await fetch(`${API_URL}/candidaturas/candidato/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!resVagasCandidatadas.ok) throw new Error("Candidatura não encontrado");
                const dadosCandidatura = await resVagasCandidatadas.json();
                const indiceAleatorio = Math.floor(Math.random() * dadosCandidatura.length);
                const candidaturaAleatoria = dadosCandidatura[indiceAleatorio];
                const resVaga = await fetch(`${API_URL}/vagas/${candidaturaAleatoria.vaga_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!resVaga.ok) throw new Error("Vaga não encontrada");
                const vagaData = await resVaga.json();
                setVaga(vagaData);



            } catch (error) {
                console.error("Erro ao carregar dados", error);
                setErro("Erro ao carregar informações do candidato.");
            } finally {
                setCarregando(false);
            }
        };

        buscarDados();
    }, [id]);


    if (carregando) {
        return <div className="text-center mt-5">Carregando informações do candidato...</div>;
    }

    if (erro || !usuario) {
        return (
            <div className="text-center mt-5 d-flex flex-column">
                <span className="text-black">
                    {erro || "Ocorreu um erro ao carregar as informações do candidato, ou ele não existe"}
                </span>
                <Link href="/empresa/dashboard/candidatos" className="mt-2">
                    <i className="bi bi-arrow-left me-2"></i>Voltar para Candidatos
                </Link>
            </div>
        );
    }

    const idade =
        new Date().getFullYear() - new Date(usuario.data_nascimento).getFullYear();

    const nomeCompleto = usuario.nome?.split(" ");
    const primeiroNome = nomeCompleto?.[0] || "";
    const sobrenome = nomeCompleto?.slice(1).join(" ") || "";

    return (
        <div className="container my-4">
            <div className="">
                <Link href="/empresa/dashboard/candidatos/" className="icone-voltar">
                    <i className="bi bi-chevron-left me-2 text-black text-decoration-none"></i> Voltar para visualizar demais candidatos
                </Link>
            </div>
            <div className="container-fluid">
                <div className="row mt-4 gap-4">
                    <div className="col-lg-4 text-wrap bg-white rounded-4 p-4">
                        <div className="text-center">
                            <img
                                src="/img/FotoUsuario.png"
                                alt="Foto do candidato"
                                className="img-fluid rounded-circle shadow mb-3"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />
                            <h4 className="fw-bold">{usuario.nome} {usuario.sobrenome}</h4>
                            <p className="text-muted">São Paulo, SP</p>
                            <p><strong>Idade:</strong> {idade} anos</p>
                        </div>


                        <div className="mb-3 border-top border-2 p-2">
                            <p className="mb-1 text-muted">
                                <i className="bi bi-geo-alt me-2"></i>
                                {endereco ? `${endereco.cidade}, ${endereco.estado}` : "Endereço não disponível"}
                            </p>
                            <p className="mb-1 text-muted">
                                <i className="bi bi-clock me-2"></i>
                                Ingressou no site <strong>{new Date(usuario.criado_em).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</strong>
                            </p>

                        </div>

                        <div className="my-4 border-top border-2 p-2">
                            <h6 className="fw-bold text-laranja">Vagas aplicadas</h6>
                            <div className="border p-2 rounded-4 bg-light">
                                <p className="mb-0 fw-bold">{vaga?.titulo || ''}</p>
                                <small>{vaga?.tipo || ''} • {vaga?.localizacao || ''}</small>
                            </div>
                        </div>
                        <div className="mt-4 border-top border-2 p-2">
                            <h6 className="fw-bold text-laranja my-2">Detalhes de contato</h6>
                            <p className="mb-1"><i className="bi bi-telephone me-2 my-2"></i>{usuario.telefone}</p>
                            <p className="mb-1"><i className="bi bi-envelope me-2 my-2"></i>{usuario.email}</p>
                            <p className="mb-1"><i className="bi bi-linkedin me-2 my-2"></i>{usuario.linkedin}</p>
                        </div>
                    </div>

                    <div className="col-lg bg-white rounded-4 px-5 py-4">
                        <div className="d-flex justify-content-end">
                            <span className="bg-laranja text-white px-4 py-2 rounded fw-bold">{'Em análise'}</span>
                        </div>

                        <div className="mt-4">
                            <h5 className="text-laranja fw-bold">Detalhes pessoais</h5>
                            <div className="row mb-2 mt-3 ">
                                <div className="col-md-6 my-3"><strong>Primeiro nome</strong><br />{primeiroNome}</div>
                                <div className="col-md-6 my-3"><strong>Sobrenome</strong><br />{sobrenome}</div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6 my-3"><strong>Gênero</strong><br />{usuario.genero}</div>
                                <div className="col-md-6 my-3">
                                    <strong>Data de nascimento</strong><br />
                                    {new Date(usuario.data_nascimento).toLocaleDateString("pt-BR")} ({idade} anos)
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h5 className="text-laranja fw-bold">Educação</h5>
                            <p className="fw-semibold mb-1">{usuario.educacao}</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-laranja fw-bold">Descrição</h5>
                            <div className="bg-light p-3 rounded">
                                <p className="mb-0">{usuario.descricao}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-laranja fw-bold">Skills</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {usuario.skills && JSON.parse(usuario.skills).map((skill, index) => (
                                    <span key={index} className={`badge bg-secondary px-3 py-2 rounded-pill ${index % 2 == 0 ? 'verde' : 'laranja'}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
