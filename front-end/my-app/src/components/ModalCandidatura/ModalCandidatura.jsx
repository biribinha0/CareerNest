"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import "./ModalCandidatura.css"
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
export default function ModalCandidatura({ vaga }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [candidatoId, setCandidatoId] = useState(null);
    const [jaCandidatado, setJaCandidatado] = useState(false);
    const [etapa, setEtapa] = useState('verificacao'); // 'verificacao', 'confirmar', 'sucesso'
    const router = useRouter();


    const API_URL = 'http://localhost:3001';

    const verificarCandidato = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar autenticado para se candidatar a uma vaga.')
            router.push('/login/candidato');
            return;
        }

        const decoded = jwtDecode(token);

        if (decoded.cargo !== 'candidato') {
            setModalContent('Apenas candidatos podem se candidatar a vagas.');
            setEtapa('verificacao');
            setShowModal(true);
            return;
        }

        setCandidatoId(decoded.id);

        // Verifica se já se candidatou
        try {
            const res = await fetch(`${API_URL}/candidaturas/verificar/${decoded.id}/${vaga.id}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();

            if (data?.candidatoJaInscrito) {
                setJaCandidatado(true);
                setModalContent('Você já se candidatou a esta vaga.');
                setEtapa('verificacao');
            } else {
                setModalContent(`Deseja se candidatar à vaga: "${vaga.titulo}"?`);
                setEtapa('confirmar');
            }
            setShowModal(true);
        } catch (err) {
            console.error(err);
            setModalContent('Erro ao verificar candidatura.');
            setEtapa('verificacao');
            setShowModal(true);
        }
    };

    const aplicarNaVaga = async () => {
        const token = localStorage.getItem('token');

        try {
            const res = await fetch(`${API_URL}/candidaturas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    candidato_id: candidatoId,
                    vaga_id: vaga.id,
                }),
            });

            if (res.ok) {
                setModalContent('Candidatura registrada com sucesso!');
                setEtapa('sucesso');
            } else {
                setModalContent('Erro ao registrar candidatura.');
                setEtapa('verificacao');
            }
        } catch (err) {
            console.error(err);
            setModalContent('Erro de conexão ao enviar candidatura.');
            setEtapa('verificacao');
        }
    };

    return (
        <>
            <button className="aplicar" onClick={verificarCandidato}>
                Aplicar
            </button>

            {/* Modal Bootstrap */}
            {showModal && (
                <div className="modal-backdrop">

                    <div className="modal show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog my-0 w-100 d-flex justify-content-center align-items-center" role="document">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title text-black">Candidatura</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>

                                <div className="modal-body">
                                    <p>{modalContent}</p>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-fechar" onClick={() => setShowModal(false)}>
                                        Fechar
                                    </button>

                                    {etapa === 'confirmar' && (
                                        <button type="button" className="btn btn-confirmar" onClick={aplicarNaVaga}>
                                            Confirmar candidatura
                                        </button>
                                    )}
                                    {etapa === 'sucesso' && (
                                        <Link href={'/candidato/dashboard/candidaturas'}>Ver Candidaturas</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
