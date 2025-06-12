export default function EtapaEmpresa({ dados, setDados, setRetorno, proxima }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!dados.nome || !dados.email || !dados.cnpj) {
            setRetorno({ status: "erro", mensagem: "Preencha todos os campos obrigatórios" });
            return;
        }
        proxima();
    }


    return (
        <div className="row d-flex justify-content-center p-3">
            <h3>Informações da Empresa</h3>
            <div className="col-10 col-lg-8 col-xl-6 p-3 row">
                <form className="cadastro-form" onSubmit={handleSubmit}>

                    <div className="d-flex flex-wrap-reverse">

                        <div className="col-12 col-lg-8 pe-lg-2">

                            <div className="mb-3 col-12">
                                <label htmlFor="cnpj" className="form-label form">CNPJ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cnpj"
                                    value={dados.cnpj}
                                    onChange={(e) => {
                                        const raw = e.target.value.replace(/\D/g, ''); // remove tudo que não for número
                                        const formatted = raw
                                            .replace(/^(\d{2})(\d)/, '$1.$2')
                                            .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                                            .replace(/\.(\d{3})(\d)/, '.$1/$2')
                                            .replace(/(\d{4})(\d)/, '$1-$2')
                                            .slice(0, 18); // limita o tamanho
                                        setDados({ ...dados, cnpj: formatted });
                                    }}
                                    maxLength={18}
                                    required
                                />

                            </div>

                            <div className="mb-3 col-12">
                                <label htmlFor="nome" className="form-label form">Nome da Empresa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    value={dados.nome}
                                    onChange={(e) => setDados({ ...dados, nome: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ps-lg-2">
                            <label htmlFor="logo" className="form-label text-center">Logo</label>
                            <div className=" col-12 d-flex flex-column align-items-center logo-upload">
                                <label htmlFor="logo-input" className="upload-label">
                                    {dados.logo ? (
                                        <img
                                            src={URL.createObjectURL(dados.logo)}
                                            alt="Prévia da logo"
                                            className="preview-logo"
                                        />
                                    ) : (
                                        <span className="camera-icon"><i className="bi bi-camera m-0 p-0"></i></span>
                                    )}
                                </label>

                                <input
                                    type="file"
                                    id="logo-input"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setDados({ ...dados, logo: e.target.files[0] });
                                        }
                                    }}
                                    required
                                />

                                <div className="file-label">
                                {dados.logo ? dados.logo.name : "Nenhum arquivo escolhido. É obrigatório enviar a logo da empresa"}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="email" className="form-label form">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={dados.email}
                            onChange={(e) => setDados({ ...dados, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="telefone" className="form-label form">Telefone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telefone"
                            value={dados.telefone}
                            onChange={(e) => {
                                let raw = e.target.value.replace(/\D/g, ''); // remove tudo que não for número

                                if (raw.length > 11) raw = raw.slice(0, 11); // limita a 11 dígitos

                                let formatted = raw;

                                if (raw.length > 10) {
                                    formatted = raw.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // celular
                                } else if (raw.length > 6) {
                                    formatted = raw.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3'); // fixo
                                } else if (raw.length > 2) {
                                    formatted = raw.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
                                }

                                setDados({ ...dados, telefone: formatted });
                            }}
                            required
                            maxLength={15}
                        />

                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="setor" className="form-label form">Setor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="setor"
                            value={dados.setor}
                            onChange={(e) => setDados({ ...dados, setor: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="descricao" className="form-label form">Descrição</label>
                        <textarea
                            className="form-control"
                            id="descricao"
                            rows={3}
                            value={dados.descricao}
                            onChange={(e) => setDados({ ...dados, descricao: e.target.value })}
                            required
                        />
                    </div>

                    <button className="found btn btn-primary" type="submit">
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
}
