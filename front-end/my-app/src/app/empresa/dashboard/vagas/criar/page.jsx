"use client"
import Select from "react-select";
import { useFieldArray, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import CurrencyInput from 'react-currency-input-field';
import "./criarvaga.css";
import { useRouter } from "next/navigation";

export default function CriarVaga() {
    const router = useRouter();
    const [vaga, setVaga] = useState({
        empresa_id: '',
        titulo: '',
        descricao: '',
        funcao: '',
        atividades: '',
        requisitos: '',
        beneficios: '',
        remuneracao: '',
        idiomas: '',
        carga_horaria: '',
        tipo: '',
        curso_desejado: '',
        localizacao: '',
        unidade_carga: 'h/dia'
    })

    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        const decoded = jwtDecode(token);

        setVaga(prev => ({ ...prev, empresa_id: decoded.id }));


        fetch(`${API_URL}/endereco/empresa/${decoded.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setVaga(prev => ({ ...prev, localizacao: `${data.cidade} - ${data.estado}` }));
            })
            .catch(err => {
                console.error("Erro ao buscar endereço da empresa: ", err);
            });
    }, []);

    const idiomas = [
        { value: "Português", label: "Português" },
        { value: "Inglês básico", label: "Inglês básico" },
        { value: "Inglês técnico", label: "Inglês técnico" },
        { value: "Inglês", label: "Inglês" },
        { value: "Espanhol", label: "Espanhol" },
        { value: "Mandarim", label: "Mandarim" },
        { value: "Alemão", label: "Alemão" },
        { value: "Francês", label: "Francês" },
        { value: "Italiano", label: "Italiano" },
        { value: "Japonês", label: "Japonês" }
    ];

    const tipos = [
        { value: "Presencial", label: "Presencial" },
        { value: "Híbrido", label: "Híbrido" },
        { value: "Remoto", label: "Remoto" }
    ];

    const cursos = [
        { value: "Análise e Desenvolvimento de Sistemas", label: "Análise e Desenvolvimento de Sistemas" },
        { value: "Banco de Dados", label: "Banco de Dados" },
        { value: "Ciência da Computação", label: "Ciência da Computação" },
        { value: "Ciência de Dados", label: "Ciência de Dados" },
        { value: "Design Digital", label: "Design Digital" },
        { value: "Desenvolvimento de Sistemas", label: "Desenvolvimento de Sistemas" },
        { value: "Engenharia da Computação", label: "Engenharia da Computação" },
        { value: "Engenharia de Produção", label: "Engenharia de Produção" },
        { value: "Engenharia de Software", label: "Engenharia de Software" },
        { value: "Estatística", label: "Estatística" },
        { value: "Publicidade e Propaganda", label: "Publicidade e Propaganda" },
        { value: "Redes de Computadores", label: "Redes de Computadores" },
        { value: "Sistemas de Informação", label: "Sistemas de Informação" },
        { value: "Sistemas para Internet", label: "Sistemas para Internet" },
        { value: "Suporte Técnico em Informática", label: "Suporte Técnico em Informática" },
        { value: "TI", label: "TI" }
    ];

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            atividades: [''],
            requisitos: [''],
            beneficios: ['']
        }
    });
    const { fields: atividadesFields, append: appendAtividade, remove: removeAtividade } = useFieldArray({
        control,
        name: "atividades"
    });
    const { fields: requisitosFields, append: appendRequisito, remove: removeRequisito } = useFieldArray({
        control,
        name: "requisitos"
    });
    const { fields: beneficiosFields, append: appendBeneficio, remove: removeBeneficio } = useFieldArray({
        control,
        name: "beneficios"
    });

    useEffect(() => {
        appendAtividade('')
        appendRequisito('')
        appendBeneficio('')
    }, [])
    const handleCargaHorariaChange = (e) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');
        setVaga({ ...vaga, carga_horaria: `${onlyNumbers} ${vaga.unidade_carga}` });
    };

    const handleUnidadeChange = (unidade) => {
        const currentValue = vaga.carga_horaria.match(/\d+/)?.[0] || '';
        setVaga({ ...vaga, carga_horaria: `${currentValue} ${unidade}`, unidade_carga: unidade });
    };

    const onSubmit = (data) => {

        const token = localStorage.getItem("token");
        const vagaFinal = {
            ...vaga,
            remuneracao: vaga.remuneracao ? parseFloat(vaga.remuneracao) : null,
            atividades: JSON.stringify(data.atividades || []),
            requisitos: JSON.stringify(data.requisitos || []),
            beneficios: JSON.stringify(data.beneficios || []),
            curso_desejado: JSON.stringify(vaga.curso_desejado || []),
            idiomas: JSON.stringify(vaga.idiomas || []),
            tipo: vaga.tipo || null,
            carga_horaria: vaga.carga_horaria || null,
            localizacao: vaga.localizacao || null,
            funcao: vaga.funcao || null,
            titulo: vaga.titulo || null,
            descricao: vaga.descricao || null,
            empresa_id: vaga.empresa_id || null,
        };
        console.log(vagaFinal)

        fetch(`${API_URL}/vagas/`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vagaFinal)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Vaga criada:", data);
                router.push('/empresa/dashboard/vagas')
            })
            .catch(err => {
                console.error("Erro ao criar vaga:", err);
            });
    };
    return (
        <>
            <div className="rounded-5 pagina-ativa p-3 pt-0">

                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    <div className="d-flex justify-content-between align-items-center py-4 border-bottom px-5 mt-2">
                        <Link
                            className=" small text-black opacity-50 d-block"
                            href={'/empresa/dashboard/vagas'}>
                            <i className="bi bi-caret-left"></i>
                            Voltar
                        </Link>
                        Criar Vaga
                    </div>
                    <div className="row d-flex justify-content-center p-3">
                        <h3 className="text-center pt-3">Nova Vaga</h3>
                        <div className="col-10 col-lg-10 col-xl-8 p-3 row">
                            <form className="vaga-form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3 col-12">
                                    <label htmlFor="titulo" className="form-label">Título da Vaga</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titulo"
                                        value={vaga.titulo}
                                        onChange={(e) => setVaga({ ...vaga, titulo: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="descricao" className="form-label">Descrição</label>
                                    <textarea
                                        className="form-control"
                                        id="descricao"
                                        rows="3"
                                        value={vaga.descricao}
                                        onChange={(e) => setVaga({ ...vaga, descricao: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3 col-12">
                                    <label htmlFor="funcao" className="form-label">Função</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="funcao"
                                        value={vaga.funcao}
                                        onChange={(e) => setVaga({ ...vaga, funcao: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Atividades</label>
                                    {atividadesFields.map((field, index) => (
                                        <div key={field.id} className="d-flex mb-2">
                                            <input
                                                {...register(`atividades.${index}`)}
                                                className="form-control"
                                            />
                                            {index >= 1 && <  button type="button" className="btn btn-excluir ms-2" onClick={() => removeAtividade(index)}>
                                                <i className="bi bi-trash m-0 p-0"></i>
                                            </button>}
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-adicionar" onClick={() => appendAtividade('')}>Adicionar Atividade</button>
                                </div>

                                <div className="mb-3 col-12">
                                    <label className="form-label">Requisitos</label>
                                    {requisitosFields.map((field, index) => (
                                        <div key={field.id} className="d-flex mb-2">
                                            <input
                                                {...register(`requisitos.${index}`)}
                                                className="form-control"
                                            />
                                            {index >= 1 && <button type="button" className="btn btn-excluir ms-2" onClick={() => removeRequisito(index)}>
                                                <i className="bi bi-trash m-0 p-0"></i>
                                            </button>}
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-adicionar" onClick={() => appendRequisito('')}>Adicionar Requisito</button>
                                </div>

                                <div className="mb-3 col-12">
                                    <label className="form-label">Benefícios</label>
                                    {beneficiosFields.map((field, index) => (
                                        <div key={field.id} className="d-flex mb-2">
                                            <input
                                                {...register(`beneficios.${index}`)}
                                                className="form-control"
                                            />
                                            {index >= 1 && <button type="button" className="btn btn-excluir ms-2" onClick={() => removeBeneficio(index)}>
                                                <i className="bi bi-trash m-0 p-0"></i>
                                            </button>}
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-adicionar" onClick={() => appendBeneficio('')}>Adicionar Benefício</button>
                                </div>

                                <div className="d-flex w-100 flex-column flex-xl-row">
                                    <div className="mb-3 col-12 col-xl-5 pe-xl-2">
                                        <label htmlFor="remuneracao" className="form-label">Remuneração (R$)</label>
                                        <CurrencyInput
                                            name="remuneracao"
                                            className="form-control"
                                            id="remuneracao"
                                            value={vaga.remuneracao}
                                            prefix="R$ "
                                            decimalsLimit={2}
                                            decimalSeparator=","
                                            groupSeparator="."
                                            onValueChange={(value) =>
                                                setVaga({ ...vaga, remuneracao: value })
                                            }
                                        />

                                    </div>

                                    <div className="mb-3 col-12 col-xl-7 ps-xl-2">
                                        <label htmlFor="carga_horaria" className="form-label">Carga Horária</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="carga_horaria"
                                            value={vaga.carga_horaria}
                                            onChange={handleCargaHorariaChange}
                                            required
                                        />
                                        <div className="forms-check d-flex align-items-center mt-3 gap-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="unidade"
                                                    id="dia"
                                                    checked={vaga.unidade_carga === 'h/dia'}
                                                    onChange={() => handleUnidadeChange('h/dia')}
                                                />
                                                <label className="form-check-label" htmlFor="dia">h/dia</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="unidade"
                                                    id="semana"
                                                    checked={vaga.unidade_carga === 'h/semana'}
                                                    onChange={() => handleUnidadeChange('h/semana')}
                                                />
                                                <label className="form-check-label" htmlFor="semana">h/semana</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="mb-3 col-12">
                                    <label htmlFor="idiomas" className="form-label">Idiomas</label>
                                    <Select
                                        isMulti
                                        id="idiomas"
                                        options={idiomas}
                                        placeholder="Selecione os idiomas desejados"
                                        value={idiomas.filter(option => vaga.idiomas?.includes(option.value))}
                                        onChange={(options) => setVaga({ ...vaga, idiomas: options ? options.map(opt => opt.value) : [] })}
                                        required
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="tipo" className="form-label">Tipo da Vaga</label>
                                    <Select
                                        id="tipo"
                                        options={tipos}
                                        placeholder="Selecione o tipo"
                                        value={tipos.find(option => option.value === vaga.tipo)}
                                        onChange={(option) => setVaga({ ...vaga, tipo: option.value })}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        required
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="curso_desejado" className="form-label">Cursos Desejados</label>
                                    <Select
                                        isMulti
                                        id="curso_desejado"
                                        options={cursos}
                                        placeholder="Selecione os cursos desejados"
                                        value={cursos.filter(option => vaga.curso_desejado?.includes(option.value))}
                                        onChange={(options) => setVaga({ ...vaga, curso_desejado: options ? options.map(opt => opt.value) : [] })}
                                        required
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </div>
                                <button className="btn btn-primary found col-8" type="submit">
                                    Criar Vaga
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
