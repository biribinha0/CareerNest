"use client"
import { useRouter } from "next/navigation";
import EtapaPessoal from "@/components/EtapasCandidatoCadastro/EtapaPessoal";
import EtapaEndereco from "@/components/EtapasCandidatoCadastro/EtapaEndereco";
import EtapaSenha from "@/components/EtapasCandidatoCadastro/EtapaSenha";
import { useState } from "react";
import "./CandidatoCadastro.css";

export default function CandidatoCadastro() {
    const router = useRouter();
    const API_URL = 'http://localhost:3001';

    const [etapa, setEtapa] = useState(1);
    const [retorno, setRetorno] = useState({ status: "", mensagem: "" })
    const [dados, setDados] = useState({
        nome: "", cpf: "", email: "", telefone: "", data_nascimento: "", genero: "", curso: "", educacao: "", skills:[] , linkedin: "", descricao: "",
        senha: "", confirmarSenha: "",
        endereco: {
            cep: "", numero: "", logradouro: "", bairro: "", cidade: "", estado: ""
        }
    });

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
            <div className="form-row text-center p-5 rounded-5 w-100 texto-laranja">
                <h1>Cadastro</h1>
                <h4>Candidato</h4>
                <div className="passos-container">
                    <div className={`passo ${etapa >= 1 ? 'ativo' : ''}`}>1</div>
                    <div className={`linha ${etapa >= 2 ? 'ativo' : ''}`}></div>
                    <div className={`passo ${etapa >= 2 ? 'ativo' : ''}`}>2</div>
                    <div className={`linha ${etapa >= 3 ? 'ativo' : ''}`}></div>
                    <div className={`passo ${etapa >= 3 ? 'ativo' : ''}`}>3</div>
                </div>

                {etapa === 1 && (
                    <EtapaPessoal
                        dados={dados}
                        setDados={setDados}
                        setRetorno={setRetorno}
                        proxima={() => setEtapa(2)}
                    />
                )}

                {etapa === 2 && (
                    <EtapaEndereco
                        dados={dados}
                        setDados={setDados}
                        setRetorno={setRetorno}
                        proxima={() => setEtapa(3)}
                    />
                )}

                {etapa === 3 && (
                    <EtapaSenha
                        dados={dados}
                        setDados={setDados}
                        setRetorno={setRetorno}
                        finalizar={async () => {
                            try {
                                const res = await fetch(`${API_URL}/auth/cadastro-candidato`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(dados),
                                });

                                const data = await res.json();

                                if (res.ok) {
                                    localStorage.setItem("token", data.token);
                                    localStorage.setItem("idUsuario", data.id);
                                    setRetorno({ status: "sucesso", mensagem: "Cadastro realizado com sucesso!" });
                                    setTimeout(() => router.push("/candidato/dashboard"), 1500);
                                } else {
                                    setRetorno({ status: "erro", mensagem: data.mensagem || "Erro ao cadastrar" });
                                }
                            } catch (error) {
                                console.error("Erro ao cadastrar: ", error);
                                setRetorno({ status: "erro", mensagem: "Erro na requisição" });
                            }
                        }}
                    />
                )}
                {retorno.mensagem && (
                    <div
                        className={`alert ${retorno.status === "sucesso" ? "alert-success" : "alert-danger"} mt-3`}
                        role="alert"
                    >
                        {retorno.mensagem}
                    </div>
                )}

            </div>
        </div>
    );
}
