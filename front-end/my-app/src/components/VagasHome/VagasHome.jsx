import './style.css'
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function VagasHome() {

    const [vagas, setVagas] = useState([])
    const [searchVaga, setSearchVaga] = useState('')


    const API_URL = 'http://localhost:3001'

    useEffect(() => {
        fetch(`${API_URL}/Vagas`)
            .then(res => res.json())
            .then(data => setVagas(data))
            .catch(err => console.error(err))
    }, [])

    const handleSearch = (e) => {
        setSearchVaga(e.target.value);
    }

    const normalize = (str) => {
        if (!str) return "";
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };

    const listaVagas = vagas
        ? (Array.isArray(vagas) ? vagas : [vagas])
            .filter(vaga =>
                normalize(vaga.titulo).includes(normalize(searchVaga))
            )
        : '';


    return (
        <>
            {/* input de pesquisa de vagas */}
            <div className="search-container container-fluid d-flex justify-content-center py-2 w-md-50 mb-3">

                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Encontre sua vaga dos sonhos"
                    className="input" />
            </div>
            <div className="row d-flex w-100 justify-content-center">
                {listaVagas.length > 0 ? (
                    <>
                        {listaVagas.map((item, index) => {
                            if (index >= 8) return null
                            else {
                                return (
                                    <div key={index} className="col-lg-3 col-md-12 mb-4 d-flex ">
                                        <div className="cardMaior card rounded-4 align-items-center">
                                            <div className="corpoCard card-body d-flex flex-column justify-content-between align-items-center">
                                                <div className="titulo-vaga text-center ">
                                                    <i className="iconeCard bi bi-mortarboard"></i>
                                                    <p className="tituloVagaCard card-title">{item.titulo}</p>
                                                </div>
                                                <div className="detalhes-vaga pt-2">
                                                    <p className='mb-1'><b>Bolsa: </b> {parseFloat(item.remuneracao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
                                                    <p><b>Localização: </b> {item.localizacao}</p>
                                                </div>
                                                <Link href={`/vagas/${item.id}`} className="botaoVaga ">Ver detalhes</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </>
                ) : (
                    <>
                        <span className="px-4 text-center">
                            Nenhuma vaga encontrada para "{searchVaga}"
                        </span>
                        <span className="px-4 text-center ">
                            <Link href={'/vagas'} className='me-1 text-laranja'>Clique aqui</Link>para explorar vagas
                        </span>
                    </>
                )
                }
            </div >
        </>
    )
}