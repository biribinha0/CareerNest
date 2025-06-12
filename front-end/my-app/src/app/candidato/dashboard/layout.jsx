"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Link from "next/link";
import "./dashboard.css"

export default function CandidatoLayout({ children }) {
    const API_URL = "http://localhost:3001";
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const router = useRouter()
    const pathname = usePathname();


    useEffect(() => {
        const token = localStorage.getItem("token");

        //redirecionar se não estiver logado
        if (!token) {
            router.push("/login/candidato");
            return;
        }



        try {
            const decoded = jwtDecode(token);

            if (decoded.cargo !== 'candidato') {
                router.push('/');
            }

            if (decoded.exp < Date.now() / 1000) {
                localStorage.removeItem("token");
                alert('Seu Login Expirou.')
                router.push('/login/candidato')
            }

            const id = decoded.id;


            fetch(`${API_URL}/candidatos/${id}`)
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
            router.push("/login/candidato");
        }
    }, []);

    if (carregando) return <Loading></Loading>;
    if (!usuario) return null;



    const saudacao = usuario.genero === "Feminino" ? "a" : "o";

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push('/')
    }
    return (
        <div className="container mx-auto py-5">
            <div className="row d-flex flex-wrap-reverse">
                <div className="col-12 col-md-9">

                    <h3>
                        Seja bem-vind{saudacao}, <span className="candidato-nome">{usuario.nome}</span>
                    </h3>
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-end">
                    <div className="p-3">
                        <button type="button" className="btn-sair px-4 py-2 rounded-3" onClick={() => handleLogout()}>
                            Sair <i className="bi bi-box-arrow-right ps-2 text-white"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="pagina-container d-flex w-100 gap-3 pt-4 px-2" style={{ cursor: "pointer" }}>
                <Link
                    href="/candidato/dashboard"
                    className={`btn-pagina px-3 py-1 rounded-top-3 ${pathname === '/candidato/dashboard' ? 'ativo' : 'inativo'}`}
                >
                    Dashboard
                </Link>

                <Link
                    href="/candidato/dashboard/vagas"
                    className={`btn-pagina px-3 py-1 rounded-top-3 d-none d-md-inline ${pathname === '/candidato/dashboard/vagas' ? 'ativo' : 'inativo'}`}
                >
                    Vagas
                </Link>

                <Link
                    href="/candidato/dashboard/candidaturas"
                    className={`btn-pagina px-3 py-1 rounded-top-3 d-none d-md-inline ${pathname === '/candidato/dashboard/candidaturas' ? 'ativo' : 'inativo'}`}
                >
                    Candidaturas
                </Link>

                <Link
                    href="/candidato/dashboard/perfil"
                    className={`btn-pagina px-3 py-1 rounded-top-3 d-none d-md-inline ${pathname === '/candidato/dashboard/perfil' ? 'ativo' : 'inativo'}`}
                >
                    Perfil
                </Link>

            </div>
            <div className="row page-container pt-4 px-2 rounded-2 d-flex flex-wrap">
                {children}
            </div>
        </div>
    );
}
