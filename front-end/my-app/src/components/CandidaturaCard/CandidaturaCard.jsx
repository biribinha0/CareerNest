import React, { useEffect, useState } from "react";
import "./CandidaturaCard.css";
import ModalCancelarCandidatura from "../ModalCancelarCandidatura/ModalCancelarCandidatura";
import Link from "next/link";

export default function CandidaturaCard({ candidatura }) {
    const [vaga, setVaga] = useState(null);
    const [empresa, setEmpresa] = useState(null)
    const API_URL = 'http://localhost:3001'
    const data = new Date(candidatura.data_candidatura);
    const token = localStorage.getItem("token")
    const dataFormatada = data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    const statusFormatado = candidatura.status.charAt(0).toUpperCase() + candidatura.status.slice(1);

    useEffect(() => {
        fetch(`${API_URL}/vagas/${candidatura.vaga_id}`)
            .then((res) => res.json())
            .then((data) => setVaga(data))
            .catch((err) => console.log('Erro ao ler dados da vaga', err))
    }, [])

    useEffect(() => {
        if (vaga) {

            fetch(`${API_URL}/empresas/${vaga.empresa_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => res.json())
                .then((data) => setEmpresa(data))
                .catch((err) => console.log('Erro ao ler dados da empresa', err))
        }
    }, [vaga, token])

    return (
        <div className="col-12 col-md-6 px-2 d-flex">
            <div className=" w-100 rounded-5 mb-4 p-4 bg-white shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 text-black fw-bold">Candidatura para {vaga ? vaga.titulo : ''}</h5>
                    <span className={`badge ${candidatura.status}`}>{statusFormatado}</span>
                </div>
                <div className="linha mb-3"></div>
                <div className="mb-2">
                    <Link className="verDetalhes" target='_blank' href={`/vagas/${candidatura.vaga_id}`}>Ver Detalhes da Vaga</Link>
                </div>
                <div className="mb-2 d-flex flex-column">
                    <strong className="mb-2">Contato da empresa:</strong>
                    <p className="my-1">
                        <i className="bi bi-telephone"></i> {empresa?.telefone || 'Não informado'}
                    </p>
                    <p className="my-1">
                        <i className="bi bi-envelope"></i> {empresa?.email || 'Não informado'}
                    </p>
                </div>
                <div className="mb-2">
                    Aplicado em {dataFormatada}
                </div>
                <div className="d-flex w-100 justify-content-end">
                    <ModalCancelarCandidatura vaga={vaga} candidatura={candidatura} />
                </div>
            </div>
        </div>
    );
}
