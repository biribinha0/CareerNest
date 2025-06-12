"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./CandidatoLogin.css";
import Loading from "@/app/loading";

export default function CandidatoLogin() {
    const [loginParams, setLoginParams] = useState({ email: "", senha: "" });
    const [loading, setLoading] = useState(false);
    const [retorno, setRetorno] = useState(null);
    const router = useRouter();
    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) router.push('/candidato/dashboard')
    }, [])

    const login = async (e) => {
        e.preventDefault();
        setRetorno(null);
        setLoading(true)

        try {
            const res = await fetch(`${API_URL}/auth/login-candidato`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginParams)
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                setRetorno({ status: "success", mensagem: "Login realizado com sucesso!" });

                setTimeout(() => {
                    router.push("/candidato/dashboard");
                }, 1000);
            } else {
                setRetorno({ status: "error", mensagem: data.mensagem || "Erro ao fazer login" });
            }
        } catch (error) {
            console.error("Erro ao fazer login: ", error);
            setRetorno({ status: "error", mensagem: "Erro na requisição" });
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
            <div className="form-row text-center p-5 rounded-5 w-100 texto-laranja">
                <h1 className="candidatologin">Login</h1>
                <h4 className="candidatologin">Candidato</h4>



                <div className="row d-flex justify-content-center p-3">
                    <div className="form-container p-3 col">
                        <form className="login-candidato-form" onSubmit={login}>
                            <div className="mb-3 col-12">
                                <label htmlFor="email" className="form-label">
                                    Endereço de Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={loginParams.email}
                                    onChange={(e) => setLoginParams({ ...loginParams, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3 col-12">
                                <label htmlFor="senha" className="form-label">
                                    Digite sua senha
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    value={loginParams.senha}
                                    onChange={(e) => setLoginParams({ ...loginParams, senha: e.target.value })}
                                    required
                                />
                            </div>

                            <button className="btn btn-candidato text-align-start" type="submit">
                                Entrar <i className="bi bi-box-arrow-in-right"></i>
                            </button>
                            {loading && <Loading></Loading>}
                            {retorno && (
                                <div
                                    className={`alert mt-3 ${retorno.status === "success" ? "alert-success" : "alert-danger"}`}
                                    role="alert"
                                >
                                    {retorno.mensagem}
                                </div>
                            )}

                            <div className="cadastro-candidato-link-container">
                                Ainda não tem uma conta? <Link href={'/cadastro/candidato'}>Crie uma</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
