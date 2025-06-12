import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar({ setPage, page, isOpen, setIsOpen }) {
    const [notificacoesNaoVistas, setNotificacoesNaoVistas] = useState(0);
    const API_URL = 'http://localhost:3001'

    useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        fetch(`${API_URL}/empresas/${decoded.id}/notificacoes/nao-lidas`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setNotificacoesNaoVistas(data.length))
            .catch((err) => console.error('Erro ao listar notificações não vistas: ', err))
    }, [])


    const handleLinkClick = (pageName) => {
        setPage(pageName);
        setIsOpen(false);
    };

    console.log(notificacoesNaoVistas)

    return (
        <>
            {isOpen && <div className="sidebar-overlay d-md-none" onClick={() => setIsOpen(false)}></div>}

            <div className={`sidebar-toda col-md-3 col-xl-3 col-xxl-2 py-5 px-4 side-bar shadow ${isOpen ? 'open' : ''}`}>
                <div className="d-flex flex-column">
                    <button
                        className="btn btn-close btn-close-white d-md-none sidebar-close-btn"
                        onClick={() => setIsOpen(false)}
                        aria-label="Fechar menu"
                    ></button>

                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item mb-2">
                            <Link
                                className={`nav-link w-100 text-start ${page == 'Home' ? 'active' : ''}`}
                                href={'/'}
                                onClick={() => handleLinkClick('Home')}
                            >
                                <i className="bi bi-arrow-left-circle" /> Voltar
                            </Link>
                        </li>
                    </ul>
                    <Link href={'/'} className="d-flex align-items-center justify-content-center mb-4 text-decoration-none text-white">
                        <div className="col-2 col-md-5">
                            <img src="/img/icons/micrologo.png" alt="micrologo" className="img-fluid" />
                        </div>
                        <h5 className="mb-0 mt-2 mt-sm-3 px-2">CarrerNest</h5>
                    </Link>
                    <div className="d-flex flex-column">
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item mb-2">
                                <Link
                                    className={`nav-link w-100 text-start ${page == 'Dashboard' ? 'active' : ''}`}
                                    href={'/empresa/dashboard/'}
                                    onClick={() => handleLinkClick('Dashboard')}
                                >
                                    <i className="bi bi-display me-2" /> Dashboard
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    className={`nav-link w-100 text-start ${page == 'Notificações' ? 'active' : ''}`}
                                    href={'/empresa/dashboard/notificacoes'}
                                    onClick={() => handleLinkClick('Notificações')}
                                >
                                    <i className="bi bi-bell me-2" /> Notificações
                                    {notificacoesNaoVistas > 0 && (
                                        <span className="badge bg-danger ms-3">
                                            {notificacoesNaoVistas}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-4 small text-white opacity-50 d-block">
                            <p className="recrutamento m-0">Recrutamento</p>
                        </div>
                        <ul className="nav nav-pills flex-column mt-2">
                            <li className="nav-item mb-2">
                                <Link
                                    className={`nav-link w-100 text-start ${page == 'Vagas' ? 'active' : ''}`}
                                    href={'/empresa/dashboard/vagas'}
                                    onClick={() => handleLinkClick('Vagas')}
                                >
                                    <i className="bi bi-briefcase me-2" /> Vagas
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    className={`nav-link w-100 text-start ${page == 'Candidatos' ? 'active' : ''}`}
                                    href={'/empresa/dashboard/candidatos'}
                                    onClick={() => handleLinkClick('Candidatos')}
                                >
                                    <i className="bi bi-people me-2" /> Candidatos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link w-100 text-start ${page == 'Configurações' ? 'active' : ''}`}
                                    href={'/empresa/dashboard/configuracoes'}
                                    onClick={() => handleLinkClick('Configurações')}
                                >
                                    <i className="bi bi-gear me-2" /> Configurações
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
