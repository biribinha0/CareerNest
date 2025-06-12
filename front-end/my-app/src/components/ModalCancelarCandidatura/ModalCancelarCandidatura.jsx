"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import "./ModalCancelarCandidatura.css"
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
export default function ModalCancelarCandidatura({ candidatura, vaga }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [candidatoId, setCandidatoId] = useState(null);
    const [etapa, setEtapa] = useState('verificacao'); // 'verificacao', 'confirmar', 'sucesso'
    const router = useRouter();


    const API_URL = 'http://localhost:3001';

    const verificarCandidato = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar autenticado para cancelar uma candidatura.')
            router.push('/login/candidato');
            return;
        }

        const decoded = jwtDecode(token);

        if (decoded.cargo !== 'candidato') {
            setModalContent('Apenas candidatos podem cancelar uma candidatura.');
            setEtapa('verificacao');
            setShowModal(true);
            return;
        }

        setCandidatoId(decoded.id);

        setModalContent(`Deseja cancelar sua candidatura à vaga: "${vaga.titulo}"?`);
        setEtapa('confirmar');
        setShowModal(true);

    };

    const cancelarCandidatura = async () => {
        const token = localStorage.getItem('token');

        try {
            const res = await fetch(`${API_URL}/candidaturas/${candidatura.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                setModalContent('Candidatura cancelada com sucesso!');
                setEtapa('sucesso');
            } else {
                setModalContent('Erro ao cancelar candidatura.');
                setEtapa('verificacao');
            }
        } catch (err) {
            console.error(err);
            setModalContent('Erro de conexão ao cancelar candidatura.');
            setEtapa('verificacao');
        }
    };

    return (
        <>
            <button className="btn cancelar" onClick={verificarCandidato}>
                Cancelar <i className="bi bi-x"></i>
            </button>

            {/* Modal Bootstrap */}
            {showModal && (
                <div className="modal-backdrop">

                    <div className="modal show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog my-0 w-100 d-flex justify-content-center align-items-center" role="document">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title text-black">Cancelar Candidatura</h5>
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
                                        <button type="button" className="btn btn-confirmar" onClick={cancelarCandidatura}>
                                            Confirmar Cancelamento
                                        </button>
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
