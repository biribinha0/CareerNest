"use client";

import CardCandidatoOverview from "@/components/EmpresaDashboardComponents/CardCandidatoOverview";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function Candidatos() {
    const [candidaturas, setCandidaturas] = useState(null)
    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);

        fetch(`${API_URL}/candidaturas/empresa/${decoded.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setCandidaturas(data))
            .catch((err) => console.log('Erro ao ler candidaturas: ', err))
    }, [])

    console.log(candidaturas)
    return (
        <>
            <div className="container d-flex justify-content-center flex-column">
                <div className="row d-flex justify-content-center flex-row column-gap-5">
                    {
                        Array.isArray(candidaturas) ? (
                            candidaturas.map(candidatura => (
                                <div
                                    key={`${candidatura.candidato_id}-${candidatura.vaga_id}`}
                                    className="col-12 col-md-6 col-xl-4 d-flex justify-content-center p-4 g-3 "
                                >
                                    <CardCandidatoOverview candidatoId={candidatura.candidato_id} vagaId={candidatura.vaga_id}></CardCandidatoOverview>
                                </div>
                            ))
                        ) : ''
                    }
                </div>

            </div>
        </>
    )
}   