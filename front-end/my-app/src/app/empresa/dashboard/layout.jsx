"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Sidebar from "@/components/EmpresaDashboardComponents/Sidebar";
import UserArea from "@/components/EmpresaDashboardComponents/UserArea";
import "./dashboard.css";

export default function DashboardLayout({ children }) {
    const API_URL = "http://localhost:3001";
    const [usuario, setUsuario] = useState(null);
    const [page, setPage] = useState('Dashboard');
    const [carregando, setCarregando] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login/empresa");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            if (decoded.cargo !== 'empresa') {
                router.push('/empresa');
                return;
            }

            if (decoded.exp < Date.now() / 1000) {
                localStorage.removeItem("token");
                alert('Seu Login Expirou.');
                router.push('/login/empresa');
                return;
            }

            const id = decoded.id;
            fetch(`${API_URL}/empresas/${id}`)
                .then(res => res.json())
                .then(data => {
                    setUsuario(data);
                    setCarregando(false);
                })
                .catch(err => {
                    console.error("Erro ao buscar usuário: ", err);
                    setCarregando(false);
                });
        } catch (error) {
            console.error("Token inválido:", error);
            localStorage.removeItem("token");
            router.push("/login/empresa");
            return;
        }

        const rotaParaPagina = {
        'dashboard': 'Dashboard',
        'notificacoes': 'Notificações',
        'vagas': 'Vagas',
        'candidatos': 'Candidatos',
        'configuracoes': 'Configurações'
    };

    const segments = pathName.split('/').filter(Boolean);
    const lastValidSegment = [...segments].reverse().find(seg => rotaParaPagina[seg]);

    setPage(rotaParaPagina[lastValidSegment] || 'Dashboard');

    }, [pathName]);

    if (carregando) return <Loading />;
    if (!usuario) return null;

    return (
        <div className="container-fluid p-0 d-flex flex-column flex-md-row min-vh-100 w-100">
            <button
                className="btn sidebar-toggle-btn d-md-none"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Abrir menu"
            >
                <i className="bi bi-list text-white fs-3"></i>
            </button>

            <Sidebar page={page} setPage={setPage} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <main className="flex-grow-1 bg-light">
                <UserArea titulo={page} usuario={usuario}></UserArea>
                <div className="active-page-container p-3 p-md-4">
                    {children}
                </div>
            </main>
        </div>
    );
}
