"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Link from "next/link";
import CandidaturaCard from "../CandidaturaCard/CandidaturaCard";

export default function CandidatoCandidaturas() {

    const API_URL = "http://localhost:3001";
    const [candidaturas, setCandidaturas] = useState([]);
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {

        const token = localStorage.getItem("token")

        const decoded = jwtDecode(token);


        fetch(`${API_URL}/candidaturas/candidato/${decoded.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCandidaturas(data);
                setCarregando(false);
            })
            .catch(err => {
                console.error("Erro ao buscar candidaturas: ", err);
                setCarregando(false);
            });
    }, [])

    if (carregando) return <Loading></Loading>;

    return (
        <div>

            <h3>Suas Candidaturas</h3>
            {
                candidaturas && candidaturas.length > 0 ? (
                    //placeholder para candidaturas
                    <div className="mt-4 row d-flex flex-wrap justify-content-center">
                        {candidaturas.map((candidatura) => (
                            <CandidaturaCard key={candidatura.id} candidatura={candidatura} />
                        ))}
                    </div>
                ) : (
                    <>
                        <h3 className="mt-4">Você ainda não se candidatou a nenhuma vaga.</h3>
                        <Link className="explorar-vagas" href={'/candidato/dashboard?pagina=vagas'}>Clique aqui</Link> para explorar vagas
                    </>
                )
            }
        </div>
    )
}