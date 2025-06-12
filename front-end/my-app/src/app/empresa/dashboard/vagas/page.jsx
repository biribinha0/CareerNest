"use client"
import { useState, useEffect } from "react";
import Loading from '@/app/loading';
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { Modal, Button } from 'react-bootstrap'; 
import ModalEditVaga from "@/components/ModalEditarVaga/page"


const trashIconStyle = {
    cursor: 'pointer',
    color: '#dc3545', 
    transition: 'transform 0.2s ease-in-out',
};



export default function Vagas() {
    const [vagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const [showDeleteModal, setShowDeleteModal] = useState(false); 
    const [vagaToDelete, setVagaToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false); 


    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setCarregando(false);
            return;
        }

        try {
            const decoded = jwtDecode(token);
            fetch(`${API_URL}/vagas/empresa/${decoded.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    const listaVagas = Array.isArray(data) ? data : (data ? [data] : []);
                    setVagas(listaVagas);
                    setCarregando(false);
                })
                .catch(err => {
                    console.error("Erro ao listar vagas: ", err);
                    setVagas([]); 
                    setCarregando(false);
                });
        } catch (error) {
            console.error("Token inválido:", error);
            setCarregando(false);
        }
    }, []);


   
    const handleShowDeleteModal = (vaga) => {
        setVagaToDelete(vaga);
        setShowDeleteModal(true);
    };

    
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setVagaToDelete(null);
    };


    () => handleExcluir(vagaId)
    
    const handleExcluir = async (vagaId) => {
        if (!vagaToDelete) return; 

        setIsDeleting(true); 
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`${API_URL}/vagas/${vagaToDelete.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (!response.ok) {
                
                throw new Error(`Erro ${response.status}: Falha ao deletar a vaga.`);
            }

           
            setVagas(currentVagas => currentVagas.filter(v => v.id !== vagaToDelete.id));

            alert("Vaga excluída com sucesso!"); 

        } catch (error) {
            console.error("Erro ao deletar vaga:", error);
            alert("Ocorreu um erro ao tentar excluir a vaga. Tente novamente.");
        } finally {
            
            setIsDeleting(false); 
            handleCloseDeleteModal(); 
        }
    };
    


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    if (carregando) return <Loading />;

    const normalize = (str) => {
        if (!str) return "";
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

   
    const listaVagas = vagas.filter(vaga => normalize(vaga.titulo).includes(normalize(searchTerm)));


    return (
        <>
            <div className="d-flex justify-content-end align-items-center pb-2">
                <div className="form-control searchvaga p-3 rounded-5 d-flex ">
                    <i className="bi bi-search pe-3 opacity-50 "></i>
                    <input type="text" style={{ all: 'unset', width: '100%' }} placeholder="Buscar..." onChange={handleSearch} />
                </div>
            </div>

            <div className="rounded-5 pagina-ativa p-3 pt-0">
                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    
                    <div className="d-flex justify-content-between align-items-center py-4 border-bottom px-md-5 px-2">
                        <div className="d-flex align-items-center w-100 row">
                            <span className="text-black col-12 col-md-6 fs-5 text-center text-md-start">Vaga</span>
                            <span className="d-none d-md-block text-black col-md-3 fs-5 text-center">Candidatos</span>
                            <span className="d-none d-md-block text-black col-md-3 fs-5 text-center text-md-end">Ações</span>
                        </div>
                    </div>
                    {
                        listaVagas.length > 0 ? (
                            <>
                                {listaVagas.map((v, index) => (
                                    <div key={v.id || index} className="d-flex justify-content-between align-items-center py-3 border-bottom px-md-5 px-2">
                                        <div className="d-flex align-items-center w-100 row gy-3">
                                            
                                            <div className="vaga-item d-flex flex-column text-black col-12 col-md-6 text-center text-md-start">
                                                <span className="vaga-titulo fw-bold">{v.titulo}</span>
                                                <Link className="small vaga-link mt-1" target="_blank" href={`/vagas/${v.id}`}>Ver Detalhes</Link>
                                            </div>
                                            
                                            <div className="col-12 col-md-3 text-center d-flex flex-column">
                                                <span>{v.candidatos_qntd || 0}</span>
                                                <Link className="small mt-1" href={`/empresa/dashboard/vagas/${v.id}`}>Ver Candidatos</Link>
                                            </div>
                                           
                                            <div className="col-12 col-md-3 text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center gap-2">
                                                <ModalEditVaga vaga={v} />

                                                
                                                <i
                                                    className="bi bi-trash p-2 fs-5"
                                                    style={trashIconStyle}
                                                    role="button"
                                                    onClick={() => handleShowDeleteModal(v)}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="text-center py-4">
                                <p className="mb-2">Nenhuma Vaga Encontrada.</p>
                                <Link className="botao-verde btn btn-sm btn-primary" href={'/empresa/dashboard/vagas/criar'}>Criar Primeira Vaga</Link>
                            </div>
                        )
                    }
                </div>
            </div>

           
            {vagaToDelete && (
                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
                            Confirmar Exclusão
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Deseja mesmo deletar a vaga: <strong>"{vagaToDelete.titulo}"</strong>?
                        <br />
                        <small className="text-muted">Esta ação não poderá ser desfeita.</small>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="cancela" onClick={handleCloseDeleteModal} disabled={isDeleting} className=''> 
                            Não, cancelar
                        </Button>
                        <Button variant="apaga" onClick={handleExcluir} disabled={isDeleting}>
                            {isDeleting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span className="ms-2 ">Excluindo...</span>
                                </>
                            ) : (
                                "Sim, excluir"
                            )}
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
            
        </>
    );
}