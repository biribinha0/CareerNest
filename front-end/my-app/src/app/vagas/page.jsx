"use client";
import Styles from "./page.module.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import Card from "@/components/CardVagas/Card";
import SweetPagination from "sweetpagination";
import "./vagas.css";
import Loading from "@/app/loading";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

export default function ExplorarVagas() {
    const [cidades, setCidades] = useState([]);
    const [vagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [logado, setLogado] = useState(null)

    const [filtros, setFiltros] = useState({
        titulo: '',
        tipo: '',
        curso: '',
        localizacao: ''
    });


    const buscarVagasFiltradasCom = async (filtrosAtuais) => {
        try {
            setCarregando(true);
            const API_URL = 'http://localhost:3001';
            const params = new URLSearchParams();

            if (filtrosAtuais.titulo) params.append("titulo", filtrosAtuais.titulo);
            if (filtrosAtuais.curso) params.append("curso", filtrosAtuais.curso);
            if (filtrosAtuais.tipo) params.append("tipo", filtrosAtuais.tipo);
            if (filtrosAtuais.localizacao) params.append("localizacao", filtrosAtuais.localizacao);

            const response = await fetch(`${API_URL}/vagas/filtros?${params.toString()}`);
            const data = await response.json();
            setVagas(data);
            setCarregando(false);
        } catch (error) {
            console.error("Erro ao buscar vagas filtradas:", error);
            setCarregando(false);
        }
    };

    const handleLimparFiltros = () => {
        const filtrosVazios = { titulo: '', tipo: '', curso: '', localizacao: '' }
        setFiltros(filtrosVazios);
        buscarVagasFiltradasCom(filtrosVazios);
    }
    const [currentPageData, setCurrentPageData] = useState([]);

    useEffect(() => {
        setCarregando(true)
        const fetchData = async () => {
            try {
                const cidadesRes = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios");
                const cidadesData = await cidadesRes.json();
                setCidades(cidadesData.slice(0, 645));

                const vagaRes = await fetch("http://localhost:3001/vagas");
                const vagaData = await vagaRes.json();
                setVagas(vagaData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
        setCarregando(false)

        try {
            const token = localStorage.getItem("token")
            const decoded = jwtDecode(token)
            const cargo = decoded.cargo
            const estaLogado = cargo === 'candidato';
            setLogado(estaLogado)
        } catch (error) {
            setLogado(false)
        }

    }, []);

    const selectStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: "#f1f1f1",
            borderColor: "#ccc",
            boxShadow: "none",
            height: "50px",
            fontSize: "16px",
            borderRadius: "8px",
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f0f0f0" : "white",
            color: "black",
            fontSize: "16px",
        }),
    };
    const cidadesMap = cidades.map((cidade) => ({
        value: cidade.nome,
        label: cidade.nome,
    }));

    const temAlgumFiltroAtivo = () => {
        return Object.values(filtros).some(valor => valor !== '');
    };

    return (
        <div className="page container pt-5">
            <h2 className={`${Styles.title} fw-bold`}>Explorar vagas</h2>

            <section className="passos">
                <h3 className="subtitle fw-bold text-center mt-5">Como conquistar sua vaga em 3 passos</h3>

                <div className={`${Styles.steps} container d-flex justify-content-center align-items-start p-5`}>
                    <div className="step justify-content-center align-items-center d-flex flex-column">
                        <h1 className={`${Styles.number} fw-bold`}>1</h1>
                        <h4 className={`${Styles.stepText} fw-bold`}>Atualize ou preencha os seus dados</h4>
                    </div>
                    <div className="step justify-content-center align-items-center d-flex flex-column">
                        <h1 className={`${Styles.number} fw-bold`}>2</h1>
                        <h4 className={`${Styles.stepText} fw-bold`}>Filtre as oportunidades</h4>
                    </div>
                    <div className="step justify-content-center align-items-center d-flex flex-column">
                        <h1 className={`${Styles.number} fw-bold`}>3</h1>
                        <h4 className="fw-bold">Conquiste-as!</h4>
                    </div>
                </div>
                <hr />
            </section>

            <div className="img d-flex justify-content-center align-items-center pt-5">
                <img src="./img/banner/vagasbanner.png" alt="Banner de Vagas" className="img-fluid" width="80%" />
            </div>



            <div className="filters container p-5">
                <div className="row gx-4 gy-3">
                    <div className="col-12 col-md-6">
                        <form className="w-100">
                            <label className="mb-2">Tipo de vaga</label>
                            <select className={Styles.select} value={filtros.tipo} onChange={(e) => setFiltros({ ...filtros, tipo: e.target.value })}>
                                <option value="">Selecione *</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Home Office">Home Office</option>
                                <option value="Híbrido">Híbrido</option>
                            </select>
                        </form>
                    </div>

                    <div className="col-12 col-md-6">
                        {cidades.length === 0 ? (
                            <p>Carregando cidades...</p>
                        ) : (
                            <form className="w-100">
                                <label className="mb-2">Cidade</label>
                                <Select
                                    options={cidadesMap}
                                    value={cidadesMap.find(option => option.value === filtros.localizacao)}
                                    onChange={(option) => setFiltros({ ...filtros, localizacao: option.value })}
                                    styles={selectStyles}
                                    isSearchable
                                    placeholder={'Selecione...'}
                                />
                            </form>
                        )}
                    </div>

                    <div className="col-12 col-md-6">
                        <form className="w-100">
                            <label className="mb-2">Área</label>
                            <select className={Styles.select} value={filtros.curso} onChange={(e) => setFiltros({ ...filtros, curso: e.target.value })}>
                                <option value=""> Selecione *</option>
                                <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                                <option value="Banco de Dados">Banco de Dados</option>
                                <option value="Ciência da Computação">Ciência da Computação</option>
                                <option value="Ciência de Dados">Ciência de Dados</option>
                                <option value="Design Digital">Design Digital</option>
                                <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                                <option value="Engenharia da Computação">Engenharia da Computação</option>
                                <option value="Engenharia de Produção">Engenharia de Produção</option>
                                <option value="Engenharia de Software">Engenharia de Software</option>
                                <option value="Estatística">Estatística</option>
                                <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
                                <option value="Redes de Computadores">Redes de Computadores</option>
                                <option value="Sistemas de Informação">Sistemas de Informação</option>
                                <option value="Sistemas para Internet">Sistemas para Internet</option>
                                <option value="Suporte Técnico em Informática">Suporte Técnico em Informática</option>
                                <option value="TI">TI</option>
                            </select>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <form className="w-100">

                            <label className="mb-2">Título</label>
                            <div className="d-flex flex-wrap justify-content-between gap-3">
                                <input type="text" className={Styles.selectVagas} value={filtros.titulo} onChange={(e) => setFiltros({ ...filtros, titulo: e.target.value })} />
                                <button
                                    type="button"
                                    onClick={() => buscarVagasFiltradasCom(filtros)}
                                    className={`${Styles.button} fw-bold`}
                                >
                                    Filtrar
                                </button>

                            </div>
                        </form>
                    </div>
                    <div className=" col d-flex row justify-content-center pt-4 px-0 text-center">
                        {temAlgumFiltroAtivo() && <button
                            type="button"
                            className="btn btn-limpar col-12 col-sm-6 col-md-4 col-xl-2"
                            onClick={handleLimparFiltros}
                        >
                            Limpar Filtros
                        </button>}
                        {logado && <Link href={'/candidato/dashboard/vagas'} className="mt-2" >Filtros avançados para usuários cadastrados</Link>}
                    </div>
                </div>
            </div>

            {carregando ? < Loading /> : ''}
            <div className="vagas container d-flex justify-content-center align-items-center flex-wrap gap-3 my-5">
                <Card vagas={currentPageData} />
            </div>
            <hr />
            <div className="pagination my-5 d-flex align-items-center justify-content-center">
                <SweetPagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={6}
                    getData={vagas}
                    navigation={true}
                    getStyle={'style-custom'}
                > </SweetPagination>
            </div>

        </div>
    );
}
