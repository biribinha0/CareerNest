"use client"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


export default function EmpresaDashboard() {
    const [vagas, setVagas] = useState([]);
    const [totalCandidaturas, setTotalCandidaturas] = useState(0);
    const [carregando, setCarregando] = useState(true);

    const API_URL = 'http://localhost:3001';

    const buscarVagas = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const decoded = jwtDecode(token);
            const response = await fetch(`${API_URL}/vagas/empresa/${decoded.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();
            const lista = Array.isArray(data) ? data : [data];
            setVagas(lista);

            const total = lista.reduce((acc, vaga) => acc + (vaga.candidatos_qntd || 0), 0);
            setTotalCandidaturas(total);

            setCarregando(false);
        } catch (err) {
            console.error("Erro ao buscar vagas: ", err);
            setCarregando(false);
        }
    };

    useEffect(() => {
        buscarVagas();
        const intervalo = setInterval(buscarVagas, 10000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <h3>Bem-vindo de volta!</h3>
            <p>Aqui está o resumo da sua atividade recente.</p>
            <div className="rounded-5 pagina-ativa p-3">
                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    <div className="container my-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 className="card-title">Vagas Ativas</h5>
                                            <i className="bi bi-briefcase me-2 fw-bold" />
                                        </div>
                                        <h3>{vagas.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 className="card-title">Candidaturas</h5>
                                            <i className="bi bi-people me-2" />
                                        </div>
                                        <h3>{totalCandidaturas}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-md-12">
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <h5 className="card-title">Vagas Recentes</h5>
                                        <p className="card-text">Acompanhe o status das suas vagas publicadas.</p>
                                        <div className="container">
                                            {vagas.map((vaga) => (
                                                <div key={vaga.id} className="row mb-3">
                                                    <div className="col">
                                                        <div className="vagasrecente card rounded-4">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between">
                                                                    <h5 className="card-title">{vaga.titulo}</h5>
                                                                    <p>{vaga.candidatos_qntd || 0} Candidatos</p>
                                                                </div>
                                                                <h6 className="card-subtitle mb-2 text-body-secondary">{vaga.local || 'Local, Brasil'}</h6>
                                                                <a className="btn btn-custom" href={`/empresa/dashboard/vagas/${vaga.id}`} role="button">
                                                                    Ver Descrição
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {vagas.length === 0 && !carregando && (
                                                <p className="text-center">Nenhuma vaga cadastrada.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
