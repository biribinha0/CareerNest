"use client"
import { useRouter } from "next/navigation";
import EtapaPessoal from "@/components/EtapasEmpresaCadastro/EtapaInformacoes";
import EtapaEndereco from "@/components/EtapasEmpresaCadastro/EtapaEndereco";
import EtapaSenha from "@/components/EtapasEmpresaCadastro/EtapaSenha";
import { useState } from "react";
import Loading from "@/app/loading"
import "./EmpresaCadastro.css";


export default function EmpresaCadastro() {
    const router = useRouter();
    const API_URL = 'http://localhost:3001';

    const [etapa, setEtapa] = useState(1);
    const [loading, setLoading] = useState(false)
    const [retorno, setRetorno] = useState({ status: "", mensagem: "" })
    const [dados, setDados] = useState({
        cnpj: '',
        nome: '',
        email: '',
        telefone: '',
        setor: '',
        logo: '',
        descricao: '',
        senha: "", confirmarSenha: "",
        endereco: {
            cep: "", numero: "", logradouro: "", bairro: "", cidade: "", estado: ""
        }
    });

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
            <div className="form-row text-center p-5 rounded-5 w-100 texto-verde">
                <h1>Cadastro</h1>
                <h4>Empresa</h4>
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
                                setLoading(true)
                                const formData = new FormData();

                                const dadosEmpresa = {
                                    cnpj: dados.cnpj,
                                    nome: dados.nome,
                                    email: dados.email,
                                    telefone: dados.telefone,
                                    setor: dados.setor,
                                    descricao: dados.descricao,
                                    senha: dados.senha,
                                    endereco: dados.endereco
                                };

                                formData.append('dados', JSON.stringify(dadosEmpresa));
                                if (dados.logo instanceof File) {
                                    formData.append('logo', dados.logo);
                                }

                                const res = await fetch(`${API_URL}/auth/cadastro-empresa`, {
                                    method: 'POST',
                                    body: formData,
                                });

                                const data = await res.json();

                                if (res.ok) {
                                    localStorage.setItem("token", data.token);
                                    localStorage.setItem("idUsuario", data.id);
                                    setRetorno({ status: "sucesso", mensagem: "Cadastro realizado com sucesso!" });
                                    setTimeout(() => router.push("/empresa/dashboard"), 1000);
                                } else {
                                    setRetorno({ status: "erro", mensagem: data.mensagem || "Erro ao cadastrar" });
                                }

                                setLoading(false)
                            } catch (error) {
                                console.error("Erro ao cadastrar: ", error);
                                setRetorno({ status: "erro", mensagem: "Erro na requisição" });
                            }
                        }}

                    />
                )}
                {loading && <Loading></Loading>}
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
