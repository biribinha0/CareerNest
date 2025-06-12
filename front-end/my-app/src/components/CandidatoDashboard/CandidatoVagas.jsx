"use client";
import Select from "react-select";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Link from "next/link";
import CardVaga from "../CandidatoDashboardComponents/CardVaga";
import "./CandidatoVagas.css";
import SweetPagination from "sweetpagination";
import "./vagas.css";

export default function CandidatoVagas({ Styles }) {

    const [cidades, setCidades] = useState([]);
    const [vagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [currentPageData, setCurrentPageData] = useState([]);

    const [filtros, setFiltros] = useState({
        titulo: '',
        tipo: '',
        curso: '',
        localizacao: '',
        remuneracaoMin: 400,
        distanciaMax: 20
    });
    const buscarVagasFiltradasCom = async (filtrosAtuais) => {
        try {
            setCarregando(true);
            const API_URL = 'http://localhost:3001';
            const token = localStorage.getItem("token");
            const decoded = jwtDecode(token);
            const params = new URLSearchParams();

            if (filtrosAtuais.titulo) params.append("titulo", filtrosAtuais.titulo);
            if (filtrosAtuais.curso) params.append("curso", filtrosAtuais.curso);
            if (filtrosAtuais.tipo) params.append("tipo", filtrosAtuais.tipo);
            if (filtrosAtuais.localizacao) params.append("localizacao", filtrosAtuais.localizacao);
            if (filtrosAtuais.remuneracaoMin) params.append("remuneracaoMin", filtrosAtuais.remuneracaoMin);
            if (filtrosAtuais.distanciaMax) params.append("distanciaMax", filtrosAtuais.distanciaMax);

            const response = await fetch(`${API_URL}/vagas/filtros/${decoded.id}?${params.toString()}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setVagas(data);
            setCurrentPageData(data)
            setCarregando(false);
        } catch (error) {
            console.error("Erro ao buscar vagas filtradas:", error);
            setCarregando(false);
        }
    };

    const handleLimparFiltros = () => {
        const filtrosVazios = {
            titulo: '',
            tipo: '',
            curso: '',
            localizacao: '',
            remuneracaoMin: 400,
            distanciaMax: 20
        }
        setFiltros(filtrosVazios);
        buscarVagasFiltradasCom(filtrosVazios);
    }
    useEffect(() => {
        setCarregando(true)
        const fetchData = async () => {
            try {
                const API_URL = 'http://localhost:3001';
                const token = localStorage.getItem("token");
                const decoded = jwtDecode(token);
                const cidadesRes = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios");
                const cidadesData = await cidadesRes.json();
                setCidades(cidadesData.slice(0, 645));

                const vagaRes = await fetch(`${API_URL}/vagas/distancia/${decoded.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const vagaData = await vagaRes.json();
                setVagas(vagaData);
                setCurrentPageData(vagaData)
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
        setCarregando(false)

    }, []);


    const cidadesMap = cidades.map((cidade) => ({
        value: cidade.nome,
        label: cidade.nome,
    }));

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

    const filtrosPadrao = {
        titulo: '',
        tipo: '',
        curso: '',
        localizacao: '',
        remuneracaoMin: 400,
        distanciaMax: 20
    };

    const temAlgumFiltroAtivo = () => {
        return Object.keys(filtrosPadrao).some(
            chave => filtros[chave] !== filtrosPadrao[chave]
        );
    };




    return (
        <div>

            <h1>Vagas</h1>
            <div className="filters container p-5">
                <div className="row gx-4 gy-3">
                    <div className="col-12 col-md-6">
                        <form className="w-100">
                            <label className="mb-2" htmlFor="tipoVaga">Tipo de vaga</label>
                            <select id="tipoVaga" className={Styles.select} value={filtros.tipo} onChange={(e) => setFiltros({ ...filtros, tipo: e.target.value })}>
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
                                <label className="mb-2" htmlFor="cidade">Cidade</label>
                                <Select
                                    inputId="cidade"
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
                            <label className="mb-2" htmlFor="curso">Área</label>
                            <select id="curso" className={Styles.select} value={filtros.curso} onChange={(e) => setFiltros({ ...filtros, curso: e.target.value })}>
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
                        <label className="mb-2" htmlFor="titulo">Título</label>
                        <div className="d-flex flex-wrap justify-content-between">
                            <input
                                id="titulo"
                                type="text"
                                className={Styles.selectVagas}
                                value={filtros.titulo}
                                onChange={(e) => setFiltros({ ...filtros, titulo: e.target.value })}
                            />
                        </div>

                    </div>
                    <div className="col-12 col-md-5 ">
                        <label className="mb-2" htmlFor="remuneracao">Remuneração Mínima</label>
                        <div className="d-flex flex-wrap justify-content-between">
                            <input
                                id="remuneracao"
                                type="range"
                                min="400"
                                max="4000"
                                step={100}
                                className={Styles.range}
                                value={filtros.remuneracaoMin}
                                onChange={(e) => setFiltros({
                                    ...filtros,
                                    remuneracaoMin: parseFloat(e.target.value)
                                })}
                            />
                            <p>R$: {filtros.remuneracaoMin},00</p>
                        </div>

                    </div>
                    <div className="col-12 col-md-5">
                        <label className="mb-2" htmlFor="distancia">Distância Máxima</label>
                        <div className="d-flex flex-wrap justify-content-between">
                            <input
                                id="distancia"
                                type="range"
                                min="1"
                                max="20"
                                step={1}
                                className={Styles.range}
                                value={filtros.distanciaMax}
                                onChange={(e) => setFiltros({
                                    ...filtros,
                                    distanciaMax: parseInt(e.target.value, 10)
                                })}
                            />
                            <p>{filtros.distanciaMax} km</p>
                        </div>

                    </div>


                    <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                        <button
                            type="button"
                            onClick={() => buscarVagasFiltradasCom(filtros)}
                            className="btn fw-bold botaozinho"
                        >Filtrar
                        </button>
                    </div>

                    {temAlgumFiltroAtivo() && <div className="col-12 d-flex justify-content-center pt-4 px-0 text-center">
                        <button
                            type="button"
                            className="btn btn-limpar col-12 col-sm-6 col-md-4 col-xl-2"
                            onClick={handleLimparFiltros}> Limpar filtros </button>
                    </div>}
                </div>
            </div>
            {carregando && <Loading></Loading>}
            {

                vagas && vagas.length > 0 ? (
                    <div className="row mt-4 d-flex flex-wrap justify-content-center row-gap-5">
                        {currentPageData.map((vaga, index) => (
                            <div className="col-12 col-lg-6 px-3 m-0 d-flex justify-content-center" key={index}>
                                <CardVaga vaga={vaga}></CardVaga>
                            </div>
                        ))}

                    </div>



                ) : (
                    <>
                        <h3>Nenhuma vaga disponível.</h3>
                        <Link className="explorar-vagas" href={'/'}>Clique aqui</Link> para ver mais vagas
                    </>

                )
            }
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
    )
}