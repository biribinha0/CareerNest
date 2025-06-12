"use client"
import { useEffect, useState, use } from "react";
import { jwtDecode } from "jwt-decode";
import CardCandidato from "@/components/CardCandidato/CardCandidato";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Vaga({ params }) {
    const { vagaId } = use(params);
    const [vaga, setVaga] = useState([]);
    const [acesso, setAcesso] = useState(null);
    const [candidatos, setCandidatos] = useState([]);
    const [encontrado, setEncontrado] = useState('encontrado');
    const router = useRouter();

    const token = localStorage.getItem("token");

    
    const API_URL = 'http://localhost:3001'
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        const decoded = jwtDecode(token);

        fetch(`${API_URL}/vagas/${vagaId}`)
            .then(res => res.json())
            .then(data => {
                if (!data || Object.keys(data).length === 0 || !data.empresa_id) {
                    console.warn("Vaga não encontrada ou resposta inválida");
                    setEncontrado(false);
                    return;
                }
                if (data.empresa_id === decoded.id) {
                    setVaga(data)
                    setAcesso(true)
                } else {
                    setAcesso(false);
                }
            })
            .catch(error => console.error('Erro ao buscar dados da vaga: ', error));

        fetch(`${API_URL}/candidaturas/vaga/${vagaId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCandidatos(data)
                data.map((candidatura) => {
                    fetch(`${API_URL}/candidaturas/${candidatura.id}/`, {
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ status: 'visualizado' })
                    })
                        .catch(error => console.error('Erro ao mudar status da candidatura: ', error));
                })
            })
            .catch(error => console.error('Erro ao buscar candidatos da vaga: ', error));

    }, [])


    const handleAceitar = (id) => {
        fetch(`${API_URL}/candidaturas/${id}/`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 'aprovado' })
        })
            .then(res => {
                if (!res.ok) throw new Error('Erro ao aprovar candidatura');
                return res.json();
            })
            .then(data => {
                console.log('Candidatura aprovada:', data);
                alert('Candidatura aprovada com sucesso!');
            })
            .catch(error => {
                console.error(error);
                alert('Erro ao aprovar a candidatura.');
            });
    }

    const handleRejeitar = (id) => {
        fetch(`${API_URL}/candidaturas/${id}/`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 'rejeitado' })
        })
            .then(res => {
                if (!res.ok) throw new Error('Erro ao rejeitar candidatura');
                return res.json();
            })
            .then(data => {
                console.log('Candidatura rejeitada:', data);
                alert('Candidatura rejeitada com sucesso!');

            })
            .catch(error => {
                console.error(error);
                alert('Erro ao rejeitar a candidatura.');
            });
    }

    useEffect(() => {
        if (acesso === false) {
            alert('Você não tem acesso de administrador para essa vaga');
            router.push('/empresa/dashboard/vagas/');
        }
    }, [acesso]);

    if (acesso === false) {
        return null
    }
    if (encontrado === false) {
        return (<><p>Vaga não encontrada</p><Link href={'/empresa/dashboard/vagas'}>Ver minhas vagas</Link></>)
    }
    return (
        <div className="rounded-5 pagina-ativa p-3 pt-0">
            <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                <div className="d-flex flex-column justify-content-between align-items-center py-4  px-2 px-md-5">
                    <div className="border-bottom pb-2 w-100 mb-3">
                        <Link href={'/empresa/dashboard/vagas'} className="text-black opacity-50"><i className="bi bi-arrow-left"></i> Voltar</Link>
                    </div>
                    <div className="fs-4 text-black">{vaga.titulo}</div>
                    <span className="py-3 pb-4">{vaga.descricao}</span>

                    <div className="d-flex flex-wrap px-5">

                        <span className="text-black opacity-50 pe-sm-3">
                            <i className="bi bi-suitcase-lg-fill"></i> {vaga.tipo}
                        </span>
                        <span className="text-black opacity-50 ps-sm-3">
                            <i className="bi bi-geo-alt-fill"></i> {vaga.localizacao}
                        </span>
                    </div>
                    <div className="row w-100 d-flex justify-content-center flex-wrap row-gap-5 row-gap-sm-4">

                        {Array.isArray(candidatos) && candidatos.length > 0 ? (
                            candidatos.map((candidato, index) => (
                                <div key={index} className="col-12 col-lg-6 col-xxl-4 d-flex justify-content-center mt-5">
                                    <CardCandidato
                                    candidato_id={candidato.candidato_id}
                                    data_candidatura={candidato.data_candidatura}
                                    candidatura_id={candidato.id}
                                    vaga_id={vagaId}
                                    handleAceitar={handleAceitar}
                                    handleRejeitar={handleRejeitar}/>
                                </div>
                            ))) : (
                            <div className="mt-5 py-3 text-center">

                                <p className="text-black ">Nenhum usuário se candidatou à essa vaga</p>
                                <Link href={'/empresa/dashboard/vagas/'} className="opacity 75 text-laranja"><i className="bi bi-arrow-left pe-2 text-laranja"></i> Ver todas as Vagas</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}