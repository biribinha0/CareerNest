import { useEffect } from "react";

export default function EtapaEndereco({ dados, setDados, setRetorno, proxima }) {
    function handleSubmit(e) {
        e.preventDefault();
        proxima();
    }

    useEffect(() => {
        const cep = dados.endereco.cep.replace(/\D/g, "");
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.erro) {
                        setDados((prev) => ({
                            ...prev,
                            endereco: {
                                ...prev.endereco,
                                logradouro: data.logradouro,
                                bairro: data.bairro,
                                cidade: data.localidade,
                                estado: data.uf
                            }
                        }));
                    }
                });
        }
    }, [dados.endereco.cep, setDados]);

    return (
        <div className="row d-flex justify-content-center p-3">
            <h3>Endereço</h3>
            <div className="col-10 col-lg-8 col-xl-6 p-3 row">
                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="mb-3 col-12 col-md-6 pe-0 pe-md-3">
                            <label htmlFor="cep" className="form-label form">CEP</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cep"
                                value={dados.endereco.cep}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "").slice(0, 8);
                                    const formatted = raw.replace(/(\d{5})(\d{1,3})/, "$1-$2");
                                    setDados({
                                        ...dados,
                                        endereco: {
                                            ...dados.endereco,
                                            cep: formatted,
                                        },
                                    });
                                }}
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-6 ps-0 ps-md-3">
                            <label htmlFor="numero" className="form-label form">Número</label>
                            <input
                                type="text"
                                className="form-control"
                                id="numero"
                                value={dados.endereco.numero}
                                onChange={(e) =>
                                    setDados({
                                        ...dados,
                                        endereco: {
                                            ...dados.endereco,
                                            numero: e.target.value
                                        }
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="logradouro" className="form-label form">Logradouro</label>
                        <input
                            type="text"
                            className="form-control"
                            id="logradouro"
                            value={dados.endereco.logradouro}
                            onChange={(e) =>
                                setDados({
                                    ...dados,
                                    endereco: {
                                        ...dados.endereco,
                                        logradouro: e.target.value
                                    }
                                })
                            }
                            required
                        />
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="bairro" className="form-label form">Bairro</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bairro"
                            value={dados.endereco.bairro}
                            onChange={(e) =>
                                setDados({
                                    ...dados,
                                    endereco: {
                                        ...dados.endereco,
                                        bairro: e.target.value
                                    }
                                })
                            }
                            required
                        />
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                        <div className="mb-3 col-12 col-md-6 pe-0 pe-md-3">
                            <label htmlFor="cidade" className="form-label form">Cidade</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cidade"
                                value={dados.endereco.cidade}
                                onChange={(e) =>
                                    setDados({
                                        ...dados,
                                        endereco: {
                                            ...dados.endereco,
                                            cidade: e.target.value
                                        }
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-6 ps-0 ps-md-3">
                            <label htmlFor="estado" className="form-label form">Estado</label>
                            <input
                                type="text"
                                className="form-control"
                                id="estado"
                                value={dados.endereco.estado}
                                onChange={(e) =>
                                    setDados({
                                        ...dados,
                                        endereco: {
                                            ...dados.endereco,
                                            estado: e.target.value
                                        }
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <button className="found btn btn-primary text-align-start" type="submit">
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
}
