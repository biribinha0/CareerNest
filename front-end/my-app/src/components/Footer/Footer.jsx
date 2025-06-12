"use client"
import { useEffect } from 'react';
import './Footer.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function Footer() {
    const pathName = usePathname();
    if (pathName.startsWith('/empresa/dashboard')) return;
    return (
        <footer className="footer">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-4 my-4">
                    <div className="col mb-3">
                        <a className="logo navbar-brand" href="#">
                            <img
                                className="logo navbar-brand"
                                src="/img/icons/logo.png"
                                alt="Logo"
                                width={200}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col mb-3">
                        <h5>Institucional</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 custom-link">Para Candidatos</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/empresa" className="nav-link p-0 custom-link">Para Empresas</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/sobre" className="nav-link p-0 custom-link">Sobre nós</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/contato" className="nav-link p-0 custom-link">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Para candidatos</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/login/candidato" className="nav-link p-0 custom-link">Sou candidato</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/cadastro/candidato" className="nav-link p-0 custom-link">Cadastre-se</a>
                            </li>
                            
                            <li className="nav-item mb-2">
                                <a href="/vagas" className="nav-link p-0 custom-link">Explorar vagas</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 custom-link"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Para empresas</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/empresa" className="nav-link p-0 custom-link">Sou empresa</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/cadastro/empresa" className="nav-link p-0 custom-link">Cadastre-se</a>
                            </li>                        
                            <li className="nav-item mb-2">
                                <Link href="/#empresas-carrossel" className="footer-link">
                                    Empresas Parceiras
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="footer-divider" />

                <div className="d-flex justify-content-between align-items-center social-section">
                    <div></div>
                    <div className="social-icons">
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>

                <div className="text-center">
                    <h6 className="footer-copy">© 2025 CareerNest. Todos os direitos reservados</h6>
                </div>
            </div>
        </footer>
    )
}