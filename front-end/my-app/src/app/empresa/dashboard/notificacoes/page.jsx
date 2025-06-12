"use client"

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';

export default function Notificacoes() {
    const [notificacoes, setNotificacoes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const API_URL = 'http://localhost:3001'
    useEffect(() => {
        fetch(`${API_URL}/empresas/${decoded.id}/notificacoes/vistas`, {
            'method': 'PUT',
            'Content-Type': 'application/json',
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        })
        fetch(`${API_URL}/empresas/${decoded.id}/notificacoes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setNotificacoes(data);
                setCarregando(false);
            })
            .catch(err => {
                console.error("Erro ao listar notificações: ", err);
                setCarregando(false);
            });
    }, []);
    if (carregando) return <Loading></Loading>
    return (
        <>
            {/* <div className="d-flex flex-row-reverse p-2">
                <div className="form-control searchvaga p-2 rounded-5 d-flex w-100 w-md-auto">
                    <i className="bi bi-search pe-2 opacity-50"></i>
                    <input type="text" className="flex-grow-1 border-0 bg-transparent" placeholder="Buscar..." />
                </div>
            </div> */}
            {/* não faz sentido ter uma barra de pesquisa para notificações, por enquanto... */}
            
            <div className="rounded-5 pagina-ativa p-3" >
                <div className="rounded-4 bg-white p-3 d-flex flex-column justify-content-end">
                    <div className="d-flex justify-content-end align-items-center border-bottom pb-2">
                    </div>

                    {notificacoes.map((n, index) => (
                        <div
                            key={index}
                            className="d-flex justify-content-between align-items-center py-3 border-bottom px-3 px-md-5">
                            <div className="d-flex align-items-center gap-2 col-10">
                                <input type="checkbox" className="form-check-input" />
                                <span className="px-4 text-black">
                                    {n.mensagem}
                                </span>
                            </div>
                            <span className="text-muted col-2 text-black opacity-75" style={{ fontSize: '0.875rem' }}>
                                {new Date(n.criado_em).toLocaleString('pt-BR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}


                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}